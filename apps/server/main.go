package main

import (
	"jenda-backend-go/controllers"
	_ "jenda-backend-go/docs" // Убедитесь, что этот импорт присутствует
	"jenda-backend-go/initializers"
	"jenda-backend-go/middleware"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
}

// @title Jenda Backend User Service
// @version 1.0
// @description API for user authentication and management
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization
// @host localhost:3000
// @BasePath /
func main() {
	r := gin.Default()

	r.POST("/signup", controllers.SignUp)
	r.POST("/login", controllers.Login)
	r.POST("/refresh", controllers.Refresh)
	r.POST("/logout", middleware.RequireAuth, controllers.Logout)
	r.GET("/validate", middleware.RequireAuth, controllers.Validate)
	r.PATCH("/users/:id", middleware.RequireAuth, controllers.EditUser)
	r.DELETE("/users/:id", middleware.RequireAuth, controllers.DeleteUser)

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	r.Run()
}
