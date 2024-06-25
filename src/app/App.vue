<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
    <!-- keep alive at auth layout level -->
  </router-view>
</template>
