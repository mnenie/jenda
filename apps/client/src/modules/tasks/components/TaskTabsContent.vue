<script setup lang="ts">
import SectionTabs from './SectionTabs.vue'
import AttachmentsTabContent from './attachments/AttachmentsTabContent.vue'
import CommentsTabContent from './comments/CommentsTabContent.vue'
import DescriptionTabContent from './desc-editor/DescriptionTabContent.vue'
</script>

<template>
  <SectionTabs class="mt-2">
    <template #comments>
      <CommentsTabContent />
    </template>
    <template #description>
      <DescriptionTabContent />
    </template>
    <template #attachments>
      <AttachmentsTabContent />
    </template>
  </SectionTabs>
</template>
