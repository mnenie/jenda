<script setup lang="ts">
import { UiButton, UiPinInput, UiPinInputGroup, UiPinInputInput } from '@/shared/ui'
</script>

<template>
  <form @submit.prevent>
    <UiPinInput
      id="pin-input"
      placeholder="○"
      class="flex gap-2 items-center mt-1 w-full"
      otp
      type="number"
    >
      <UiPinInputGroup>
        <UiPinInputInput
          v-for="(id, index) in 5"
          :key="id"
          :index="index"
        />
      </UiPinInputGroup>
    </UiPinInput>
    <p class="text-sm text-neutral-400 mt-2">
      {{ $t('authentication.form.otp') }}
    </p>
    <UiButton type="submit" class="w-full mt-4 mb-2">
      {{ $t('authentication.confirm.btn') }}
    </UiButton>
    <p class="text-sm text-center select-none text-neutral-500 dark:text-neutral-300">
      {{ $t('authentication.confirm.proposal') }}
      <span
        class="cursor-pointer underline underline-offset-4 duration-100 ease-in hover:text-neutral-900 dark:hover:text-neutral-400"
      >
        {{ $t('authentication.confirm.route') }}
      </span>
    </p>
  </form>
</template>
