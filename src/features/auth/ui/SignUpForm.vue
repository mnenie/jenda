<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { toast } from 'vue-sonner';
import { RouteNames } from '@/shared/config/consts';
import { UiButton, UiInput } from '@/shared/ui';
import { Loader2 } from 'lucide-vue-next';
import { validationRules } from '../model';

const validationSchema = toTypedSchema(validationRules);

const { handleSubmit, errors } = useForm({
  validationSchema
});
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');

const onRegistration = handleSubmit((values) => {
  // on registration event
  toast.warning('Jenda in dev mode and temporarily unavailable');
});
</script>

<template>
  <form @submit.prevent="onRegistration">
    <div :class="$style.form_container">
      <div :class="$style.form_fields">
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="email">{{ $t('authentication.form.email') }}</label>
          <UiInput id="email" v-model="email" :placeholder="'user@example.com'" :type="'email'" />
          <span v-if="errors.email" class="text-xs">{{ errors.email }}</span>
        </div>
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="password">{{ $t('authentication.form.password') }}</label>
          <UiInput
            id="password"
            v-model="password"
            :placeholder="'user_password_example'"
            :type="'password'"
          />
          <span v-if="errors.password" class="text-xs">{{ errors.password }}</span>
        </div>
      </div>
      <div :class="$style.choose_block">
        <UiButton type="submit">
          <!-- <Loader2 :class="$style.loader" /> -->
          {{ $t('authentication.registration.btn') }}
        </UiButton>
        <p :class="[$style.reg, 'text-sm']">
          {{ $t('authentication.registration.proposal') }}
          <span :class="$style.reg_route" @click="$router.push({ name: RouteNames.login })">
            {{ $t('authentication.registration.route') }}
          </span>
        </p>
      </div>
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
        font-weight: 500 !important;
      }
    }
  }

  .choose_block {
    display: grid;
    gap: 8px;

    .loader {
      margin-right: 8px;
      height: 16px;
      width: 16px;
      @include on-spin;
    }

    .reg {
      text-align: center;
      color: var(--zinc-500);
      user-select: none;

      .reg_route {
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 4px;
        transition: 0.1s ease-in;

        &:hover {
          color: var(--zinc-900);
        }
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

    .choose_block {
      .reg {
        color: var(--zinc-200);
      }
      .reg_route {
        &:hover {
          color: var(--zinc-300);
        }
      }
    }
  }
}
</style>
