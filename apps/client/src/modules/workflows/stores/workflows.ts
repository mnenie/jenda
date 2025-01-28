import { ref, shallowRef, triggerRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Workflow } from '../types'

export const useWorkflowsStore = defineStore('workflows', () => {
  const workflows = shallowRef<Workflow[]>([])
  const workflow = ref<Workflow>()

  function addNewWorkflow(workflow: Omit<Workflow, '_id'>) {
    workflows.value.push(workflow)
  }

  function removeWorkflows(idxs: string[]) {
    idxs.forEach((id) => {
      const index = workflows.value.findIndex(workflow => workflow._id === id)
      if (index !== -1) {
        workflows.value.splice(index, 1)
        triggerRef(workflows)
      }
    })
  }

  return {
    workflows,
    workflow,
    addNewWorkflow,
    removeWorkflows,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorkflowsStore, import.meta.hot))
}
