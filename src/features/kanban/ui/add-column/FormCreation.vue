<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { UiButton, UiInput } from '@/shared/ui';
import { validationColumnRules } from '../../config/validation';

const validationSchema = toTypedSchema(validationColumnRules);
const { t } = useI18n();

const { handleSubmit, errors } = useForm({
  validationSchema
});
const { value: name } = useField('name');

const createColumn = handleSubmit((values) => {
  // create new column
});
</script>
<template>
  <form @submit.prevent="createColumn">
    <div :class="$style.form_container">
      <div v-auto-animate :class="$style.field">
        <label class="text-sm" for="name">{{ t('kanban.sheet.column.form.label') }}</label>
        <UiInput id="name" v-model="name" :placeholder="t('kanban.sheet.column.form.placeholder')" />
        <span v-if="errors.name" class="text-xs">{{ errors.name }}</span>
      </div>
      <UiButton style="width: 100%" type="submit"> {{ t('kanban.sheet.column.form.submit') }} </UiButton>
    </div>
  </form>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.form_container {
  display: grid;
  gap: 24px;
  transition: none !important;
  transform: none !important;

  .field {
    display: grid;
    justify-items: flex-start;
    gap: 8px;

    & label {
      color: var(--zinc-950);
      font-weight: 500 !important;
    }

    & span {
      color: var(--destructive);
    }
  }
}

:global(html.dark) {
  .form_container {
    .field {
      & label {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
