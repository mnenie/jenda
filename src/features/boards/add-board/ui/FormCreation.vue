<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { UiButton, UiInput } from '@/shared/ui';
import { Loader2 } from 'lucide-vue-next';
import { validationRules } from '../config/validation';

const validationSchema = toTypedSchema(validationRules);

const { handleSubmit, errors } = useForm({
  validationSchema
});
const { value: name } = useField<string>('name');
const description = ref('');

const create = handleSubmit((values) => {
  // create new board
});
</script>
<template>
  <form @submit.prevent="create">
    <div :class="$style.form_container">
      <div :class="$style.form_fields">
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="name">{{ $t('sheet.form.name.label') }}</label>
          <UiInput id="name" v-model="name" :placeholder="$t('sheet.form.name.placeholder')" />
          <span v-if="errors.name" class="text-xs">{{ errors.name }}</span>
        </div>
        <div :class="$style.field">
          <label class="text-sm" for="description">{{ $t('sheet.form.description.label') }}</label>
          <UiInput
            id="description"
            v-model="description"
            :placeholder="$t('sheet.form.description.placeholder')"
          />
        </div>
      </div>
      <UiButton style="width: 100%" type="submit">
        <!-- <Loader2 :class="$style.loader" /> -->
        Create Board
      </UiButton>
    </div>
  </form>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.form_container {
  display: grid;
  gap: 24px;

  .form_fields {
    display: grid;
    gap: 16px;

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
}

:global(html.dark) {
  .form_container {
    .form_fields {
      .field {
        & label {
          color: var(--zinc-200);
        }
      }
    }
  }
}
</style>
