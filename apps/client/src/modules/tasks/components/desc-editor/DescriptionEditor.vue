<script setup lang="ts">
import { shallowRef, toRaw, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useTaskDataLoader as useTaskData } from '../../loaders/task-cl'
import { useTaskMutations } from '../../mutations/task'
import TiptapEditor from '@/modules/editor/components/TiptapEditor.vue'
import { cn } from '@/shared/libs/shadcn/utils'
import { useUserStore } from '@/modules/auth/stores/auth'

const editor = shallowRef<string>('')

const { data: task } = useTaskData()
const { updateTask } = useTaskMutations()

watch(() => task.value.description, () => {
  editor.value = task.value?.description?.content ?? ''
}, { immediate: true, once: true })

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const debouncedFn = useDebounceFn(() => {
  updateTask({
    _id: task.value._id,
    description: {
      content: editor.value,
      updatedBy: toRaw(user.value),
      status: 'edited',
    },
  })
}, 1000, { maxWait: 5000 })
</script>

<template>
  <div class="h-full w-full overflow-hidden">
    <slot :task />
    <TiptapEditor
      v-model="editor"
      :expanded="false"
      :autofocus="false"
      section="task.description"
      :class="cn(
        '!h-full !w-full !px-4 !py-2 !pt-14 overflow-y-auto !cursor-text space-y-1 relative z-9',
      )"
      @update:model-value="debouncedFn"
    />
  </div>
</template>
