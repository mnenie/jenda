<script setup lang="ts">
import { RouteNames } from '@/shared/config/consts';
import { UiButton, UiInput } from '@/shared/ui';
import { toTypedSchema } from '@vee-validate/zod';
import { Loader2 } from 'lucide-vue-next';
import { validationRules } from '../config/validation';
import { useField, useForm } from 'vee-validate';

const validationSchema = toTypedSchema(validationRules);

const { handleSubmit, errors } = useForm({
  validationSchema
});
const { value: email } = useField('email');
const { value: password } = useField('password');

const onLogin = handleSubmit((values) => {
  // on login event
});
</script>

<template>
  <form @submit.prevent="onLogin">
    <div :class="$style.form_container">
      <div :class="$style.form_fields">
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="email">Email</label>
          <UiInput id="email" v-model="email" :placeholder="'user@example.com'" :type="'email'" />
          <span v-if="errors.email" class="text-xs">{{ errors.email }}</span>
        </div>
        <div v-auto-animate :class="$style.field">
          <label class="text-sm" for="password">Password</label>
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
          Sign In with Email
        </UiButton>
        <p :class="[$style.login, 'text-sm']">
          Don't have an account?
          <span :class="$style.login_route" @click="$router.push({ name: RouteNames.registration })">
            Sign Up Now
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

    .login {
      text-align: center;
      color: var(--zinc-500);

      .login_route {
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
</style>
