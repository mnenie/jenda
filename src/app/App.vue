<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['LoginPage', 'RegistrationPage']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
