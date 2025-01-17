<script setup lang="ts">
import { BubbleMenu } from '@tiptap/vue-3'
import TextStyleItems from './menu/TextStyleItems.vue'
import AiOffer from './menu/AiOffer.vue'
import AdditionalItems from './menu/AdditionalItems.vue'
import TextLink from './menu/TextLink.vue'
import TextHighlighter from './menu/TextHighlighter.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()
</script>

<template>
  <BubbleMenu class="flex items-center" :editor>
    <AiOffer />
    <AdditionalItems />
    <TextStyleItems :editor />
    <TextLink />
    <TextHighlighter :editor />
  </BubbleMenu>
</template>
