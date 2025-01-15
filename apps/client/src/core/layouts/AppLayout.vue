<template>
  <div>
    <component :is="$route.meta.layoutComponent">
      <slot />
    </component>
  </div>
  <!-- <NotAvailable v-else /> -->
</template>
