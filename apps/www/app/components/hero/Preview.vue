<template>
  <section
    class="grid grid-cols-2 items-start gap-20 justify-between w-full pl-36"
  >
    <div class="flex flex-col gap-2 items-start pt-10">
      <UnaBadge badge="soft-gray" size="sm" class="p-1 px-2">
        <span style="margin-right: 3px">{{ $t('hero.badge_soon') }}</span>
      </UnaBadge>
      <h1
        class="relative text-76px leading-tight fw500 mb-1 text-left tracking-tighter
      max-[1220px]:text-68px max-[1152px]:text-64px max-[1100px]:text-62px max-[890px]:text-54px max-[680px]:!text-44px mb-8"
      >
        {{ $t('hero.title', 1) }} <span class="text-blue-600 relative">
          {{ $t('hero.title', 2) }}
          <NuxtImg src="/common/line.svg" class="absolute bottom--8 left-1/2 translate-x--1/2 w-70" />
        </span>
      </h1>
      <p
        class="text-lg max-w-600px text-left text-neutral-500 dark:text-neutral-400
      max-[680px]:(max-w-480px text-base)"
      >
        {{ $t('hero.description') }}
      </p>
      <div class="flex gap-2 mt-4">
        <UnaButton
          size="md"
          label="Записаться на превью"
          btn="primary"
        />
        <UnaButton
          size="md"
          label="Узнать больше"
          btn="outline"
        />
      </div>
    </div>
    <div class="block relative w-full h-600px bg-neutral-100 rounded-lg pr-0 justify-center items-center flex overflow-hidden">
      <NuxtImg src="/dev.png" class="h-full left-0 min-w-full object-cover object-left" rounded="xl" />
    </div>
  </section>
</template>
