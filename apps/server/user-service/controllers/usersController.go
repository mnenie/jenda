package controllers

import (
	"fmt"
	"jenda-backend-go/initializers"
	"jenda-backend-go/models"
	"net/http"
	"os"
	"regexp"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

var (
	emailRegex    = regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
	hexColorRegex = regexp.MustCompile(`^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$`)
	nicknameRegex = regexp.MustCompile(`^[a-zA-Z0-9_]{3,20}$`)
)

func isValidEmail(email string) bool {
	return emailRegex.MatchString(email)
}

func SignUp(c *gin.Context) {
	var body struct {
		Email    string
		Password string
		PhotoUrl string
		Role     string
		Color    string
		Nickname string
	}

	if err := c.Bind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	// Обязательные поля
	if body.Email == "" || body.Password == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email and password are required"})
		return
	}

	// Валидация email
	if !isValidEmail(body.Email) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Please write a valid email"})
		return
	}

	// Валидация пароля
	if len(body.Password) < 8 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Password must be at least 8 characters"})
		return
	}

	// Валидация цвета
	if body.Color != "" && !hexColorRegex.MatchString(body.Color) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid color format, must be HEX (e.g. #123abc)"})
		return
	}

	// Валидация никнейма
	if body.Nickname != "" && !nicknameRegex.MatchString(body.Nickname) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Nickname must be 3-20 alphanumeric characters or underscores"})
		return
	}

	// Хеширование пароля
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Создание пользователя
	user := models.User{
		Email:    body.Email,
		Password: string(hash),
		PhotoUrl: &body.PhotoUrl,
		Role:     &body.Role,
		Color:    &body.Color,
		Nickname: &body.Nickname,
	}

	result := initializers.DB.Create(&user)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "success"})
}

func Login(c *gin.Context) {
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	var user models.User
	initializers.DB.First(&user, "email = ?", body.Email)

	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	// создание аксесс токена
	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Minute * 15).Unix(),
	})
	accessTokenString, err := accessToken.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to sign access token"})
		return
	}

	// создание рефреш токена
	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 7).Unix(),
	})
	refreshTokenString, err := refreshToken.SignedString([]byte(os.Getenv("REFRESH_SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create refresh token"})
		return
	}

	// закинуть рефреш в дб
	user.RefreshToken = &refreshTokenString
	initializers.DB.Save(&user)

	// отправить рефреш в куки
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("RefreshToken", refreshTokenString, 3600*24*7, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{
		"accessToken": accessTokenString,
	})
}

func Validate(c *gin.Context) {
	user, _ := c.Get("user")
	c.JSON(http.StatusOK, gin.H{
		"message": user,
	})

}

func Refresh(c *gin.Context) {
	refreshTokenString, err := c.Cookie("RefreshToken")
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Refresh token required"})
		return
	}

	token, err := jwt.Parse(refreshTokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("REFRESH_SECRET")), nil
	})

	if err != nil || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid refresh token"})
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	exp, ok := claims["exp"].(float64)
	if !ok || time.Now().Unix() > int64(exp) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Refresh token expired"})
		return
	}

	var user models.User
	sub := fmt.Sprint(claims["sub"])
	initializers.DB.First(&user, "id = ?", sub)

	if user.ID == 0 || *user.RefreshToken != refreshTokenString {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid refresh token"})
		return
	}

	// создать новый аксесс
	newAccessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Minute * 15).Unix(),
	})
	newAccessTokenString, err := newAccessToken.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to sign access token"})
		return
	}

	// и рефреш
	newRefreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 7).Unix(),
	})

	newRefreshTokenString, err := newRefreshToken.SignedString([]byte(os.Getenv("REFRESH_SECRET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to sign access token"})
		return
	}

	// закинуть рефреш в дб
	user.RefreshToken = &newRefreshTokenString
	initializers.DB.Save(&user)

	// закинуть в куки
	c.SetCookie("RefreshToken", newRefreshTokenString, 3600*24*7, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{
		"accessToken": newAccessTokenString,
	})
}

func Logout(c *gin.Context) {
	user, _ := c.Get("user")
	currentUser := user.(models.User)

	// убрать рефреш с дб
	currentUser.RefreshToken = nil
	initializers.DB.Save(&currentUser)

	// зачистить куки
	c.SetCookie("RefreshToken", "", -1, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{
		"message": "Successfully logged out",
	})
}

func EditUser(c *gin.Context) {
	// стянуть айди
	userID := c.Param("id")

	// стянуть пользователя с бд
	user, _ := c.Get("user")
	currentUser := user.(models.User)

	// перепроверить айдишник
	if fmt.Sprint(currentUser.ID) != userID {
		c.JSON(http.StatusForbidden, gin.H{"error": "You can only edit your own account"})
		return
	}

	// спарсить
	var body struct {
		Email    *string `json:"email"`
		Password *string `json:"password"`
		PhotoUrl *string `json:"photoUrl"`
		Role     *string `json:"role"`
		Color    *string `json:"color"`
		Nickname *string `json:"nickname"`
	}

	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}
	updates := make(map[string]interface{})

	// почта
	if body.Email != nil {
		if !isValidEmail(*body.Email) {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email format"})
			return
		}

		var existingUser models.User
		initializers.DB.Where("email = ?", *body.Email).First(&existingUser)
		if existingUser.ID != 0 && existingUser.ID != currentUser.ID {
			c.JSON(http.StatusConflict, gin.H{"error": "Email already in use"})
			return
		}
		updates["email"] = *body.Email
	}

	// пароль
	if body.Password != nil {
		hash, err := bcrypt.GenerateFromPassword([]byte(*body.Password), 10)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
			return
		}
		updates["password"] = string(hash)
	}

	// фото
	if body.PhotoUrl != nil {
		updates["photo_url"] = *body.PhotoUrl
	}
	//роль
	if body.Role != nil {
		updates["role"] = *body.Role
	}
	//цвет
	if body.Color != nil {
		updates["color"] = *body.Color
	}
	//ник
	if body.Nickname != nil {
		updates["nickname"] = *body.Nickname
	}

	// закинуть в бд
	result := initializers.DB.Model(&currentUser).Updates(updates)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User updated successfully"})
}

func DeleteUser(c *gin.Context) {
	// стянуть айдишник
	userID := c.Param("id")

	// стянуть пользователя с бд
	user, _ := c.Get("user")
	currentUser := user.(models.User)

	// перепроверить айдишник
	if fmt.Sprint(currentUser.ID) != userID {
		c.JSON(http.StatusForbidden, gin.H{"error": "You can only delete your own account"})
		return
	}

	// удалить
	result := initializers.DB.Delete(&currentUser)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete user"})
		return
	}

	// рефреш куки убрать
	c.SetCookie("RefreshToken", "", -1, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{"message": "User deleted successfully"})
}
