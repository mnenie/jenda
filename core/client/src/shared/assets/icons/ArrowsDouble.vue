<template>
  <svg
    data-v-e329aaf9=""
    data-v-90ec8441=""
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="simple"
    style="height: 24px; width: 24px; --7ea24000: inherit"
  >
    <path
      opacity="0.39"
      d="M17.8 17.4C18.2 17.8 18.1 18.5001 17.7 18.8001C17.3 19.2001 16.6 19.1 16.3 18.7L11.3 12.7C11 12.3 11 11.8 11.3 11.4L16.3 5.39996C16.7 4.99996 17.3 4.90011 17.7 5.30011C18.1 5.70011 18.2 6.30001 17.8 6.70001L13.5 11.8001C13.4 11.9001 13.4 12.2001 13.5 12.3001L17.8 17.4Z"
      :class="$style.fill_first"
    />
    <path
      d="M12.8 17.4C13.2 17.8 13.1 18.5001 12.7 18.8001C12.3 19.2001 11.6 19.1 11.3 18.7L6.29998 12.7C5.99998 12.3 5.99998 11.8 6.29998 11.4L11.3 5.39996C11.7 4.99996 12.3 4.90011 12.7 5.30011C13.1 5.70011 13.2 6.30001 12.8 6.70001L8.49999 11.8001C8.39999 11.9001 8.39999 12.2001 8.49999 12.3001L12.8 17.4Z"
      :class="$style.fill_second"
    />
  </svg>
</template>

<style module lang="scss">
.fill_first {
  fill: #3f3f46;
}

.fill_second {
  fill: #71717a;
}

:global(html.dark) {
  .fill_first {
    fill: var(--zinc-100);
  }

  .fill_second {
    fill: var(--zinc-200);
  }
}
</style>
