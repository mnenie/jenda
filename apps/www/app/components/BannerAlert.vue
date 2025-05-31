<template>
  <UnaAlert
    alert="soft-info"
    class="items-center justify-center py-0.5 !bg-white"
  >
    <template #title>
      <div class="flex w-full justify-center items-center gap-1">
        <span class="text-default">💡 {{ $t('banner.title_beta') }}</span>
        <UnaButton
          btn="link"
          trailing="i-lucide-arrow-right"
          to="https://github.com/mnenie/jenda"
          target="_blank"
          :label="$t('banner.action')"
          class="transition transition-all gap-1 hover:gap-1.5 px-1"
        />
      </div>
    </template>
  </UnaAlert>
</template>
