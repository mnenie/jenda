package initializers

import "jenda-backend-go/models"

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})
}
