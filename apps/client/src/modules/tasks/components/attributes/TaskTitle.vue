<script setup lang="ts">
import { shallowRef } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useTaskContext } from '../../composables/task'
import { UiTextarea } from '@/shared/ui'

// тайтл для моментального изменения из доски
const { taskInBoard } = useTaskContext()
// тайтл полученный с сервера
const title = shallowRef(taskInBoard.value.title)

const saveTitle = useDebounceFn(() => {
  const newTitle = title.value.trim()

  taskInBoard.value.title = newTitle
  // console.log(`Отправляем на сервак: ${title.value}`)
}, 1000)
</script>

<template>
  <UiTextarea
    v-model="title"
    resizeble
    class="text-2xl font-bold mt-5"
    :placeholder="$t('tasks.title_empty')"
    @input="saveTitle"
  />
</template>
