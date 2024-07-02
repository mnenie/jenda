<script setup lang="ts">
import { UiButton, UiInput } from '@/shared/ui';
import { toTypedSchema } from '@vee-validate/zod';
import { Loader2 } from 'lucide-vue-next';
import { validationRules } from '../config/validation';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';

const validationSchema = toTypedSchema(validationRules);

const { handleSubmit, errors } = useForm({
  validationSchema
});
const { value: name } = useField('name');
const description = ref('');

const create = handleSubmit((values) => {
  // on login event
});
</script>
<template>
  <form @submit.prevent="create">
    <div :class="$style.form_container">
      <div :class="$style.form_fields">
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="name">Board name</label>
          <UiInput id="name" v-model="name" :placeholder="'e.g. Nice Board'" />
          <span v-if="errors.name" class="text-xs">{{ errors.name }}</span>
        </div>
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="description">Board description</label>
          <UiInput
            id="description"
            v-model="description"
            :placeholder="'e.g. development board for our company'"
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

</style>
