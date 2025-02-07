import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { toast } from 'vue-sonner'
import type { Workflow } from '../types'

export const useWorkflowsStore = defineStore('workflows', () => {
  // so maybe shallowRef is better (needs to be think in future)
  const workflows = ref<Workflow[]>([])
  const workflow = ref<Workflow>({
    _id: 'test-123',
    name: 'Test Workflow',
    description: 'Cloud-based app for efficient collaborative and individual task management',
    state: 'draft',
    runsCount: 0,
    creator: {
      _id: '',
      email: '',
      photoUrl: '',
    },
  })

  function addNewWorkflow(workflow: Omit<Workflow, '_id'>) {
    workflows.value.push(workflow)
    // backend also
  }

  function removeWorkflows(idxs: string[]) {
    idxs.forEach((id) => {
      const index = workflows.value.findIndex(workflow => workflow._id === id)
      if (index !== -1) {
        workflows.value.splice(index, 1)
      }
    })
    // backend also
  }

  function updateStatus(state: Workflow['state']) {
    // so will be replaced with pinia/collada
    const updationPromise = new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
      workflow.value.state = state
    })
    toast.promise(updationPromise, {
      loading: 'Updating status',
      success: () => {
        return 'Workflow status updated'
      },
      error: () => {
        console.error('Error')
      },
    })
    // backend also
  }

  return {
    workflows,
    workflow,
    addNewWorkflow,
    removeWorkflows,
    updateStatus,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorkflowsStore, import.meta.hot))
}
