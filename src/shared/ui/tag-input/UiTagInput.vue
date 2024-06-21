<script setup lang="ts">
import { ref } from 'vue';
import { UiBadge } from '../badge';
import { X } from 'lucide-vue-next';

const props = withDefaults(
  defineProps<{
    tags: string[];
    placeholder?: string;
  }>(),
  {
    placeholder: 'Enter a tag'
  }
);

const inputTags = ref([...props.tags]);

const addTag = (event: Event) => {
  let val = (event.target as HTMLInputElement).value.trim();
  if (val.length > 0) {
    if (inputTags.value.includes(val)) {
      return false;
    }
    inputTags.value.push(val);
    (event.target as HTMLInputElement).value = '';
  }
};

const removeTag = (index: number) => {
  inputTags.value.splice(index, 1);
};

const removeLastTag = (event: Event) => {
  if ((event.target as HTMLInputElement).value.length === 0) {
    removeTag(inputTags.value.length - 1);
  }
};
</script>

<template>
  <div :class="$style.tag_input">
    <UiBadge
      v-for="(tag, index) in inputTags"
      :key="tag"
      :variant="'secondary'"
      :class="$style.badge"
    >
      {{ tag }}
      <X :size="13" :class="$style.x" @click="removeTag(index)" />
    </UiBadge>
    <input
      type="text"
      :placeholder="placeholder"
      :class="[$style.tag_input__inside, 'text-sm']"
      @keydown.enter="addTag"
      @keydown.delete="removeLastTag"
    />
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.tag_input {
  display: flex;
  height: 32px;
  border: 1px solid var(--zinc-200);
  border-radius: 6px;
  background-color: transparent;
  padding: 4px 12px;
  &::placeholder {
    color: var(--zinc-500);
  }
  @include transition;
  @include on-focus {
    outline: none;
    border: 1px solid var(--zinc-800);
  }

  .badge {
    margin-right: 8px;
    justify-content: space-between;
    gap: 6px;

    .x {
      cursor: pointer;
      color: var(--zinc-800);
    }
  }
}

.tag_input__inside {
  border: none;
  outline: none;
  background: none;
}
</style>
