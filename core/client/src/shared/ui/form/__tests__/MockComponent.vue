<script setup lang="ts">
import { UiFormField, UiFormLabel, UiFormMessage } from '..'
import { UiButton, UiInput } from '../../index'
</script>

<template>
  <form>
    <div class="grid gap-6">
      <div class="grid gap-4">
        <UiFormField>
          <UiFormLabel for="test">
            Label
          </UiFormLabel>
          <UiInput id="test" />
          <UiFormMessage content="test message" />
        </UiFormField>
      </div>
      <UiButton>Test</UiButton>
    </div>
  </form>
</template>
