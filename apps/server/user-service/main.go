package main

import (
	"jenda-backend-go/controllers"
	"jenda-backend-go/initializers"
	"jenda-backend-go/middleware"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
}
func main() {
	r := gin.Default()

	r.POST("/signup", controllers.SignUp)
	r.POST("/login", controllers.Login)
	r.POST("/refresh", controllers.Refresh)
	r.POST("/logout", middleware.RequireAuth, controllers.Logout)
	r.GET("/validate", middleware.RequireAuth, controllers.Validate)
	r.PATCH("/users/:id", middleware.RequireAuth, controllers.EditUser)
	r.DELETE("/users/:id", middleware.RequireAuth, controllers.DeleteUser)

	r.Run()
}
