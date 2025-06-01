<template>
  <UnaAlert
    alert="solid-black"
    class="items-center justify-center py-0.5 rounded-none"
  >
    <template #title>
      <div class="flex w-full justify-center items-center gap-1">
        <span class="text-default text-white">💡 {{ $t('banner.title_beta') }}</span>
        <UnaButton
          btn="link-gray"
          trailing="i-lucide-arrow-right"
          to="https://github.com/mnenie/jenda"
          target="_blank"
          :label="$t('banner.action')"
          class="transition transition-all gap-1 hover:gap-1.5 px-1 !text-white underline"
        />
      </div>
    </template>
  </UnaAlert>
</template>
