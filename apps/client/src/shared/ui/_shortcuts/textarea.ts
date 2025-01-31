type TextareaPrefix = 'textarea'

export const staticTextarea: Record<`${TextareaPrefix}-${string}` | TextareaPrefix, string> = {
  textarea: 'flex min-h-60px w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-default shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:(border-neutral-700 placeholder:text-neutral-400 focus-visible:ring-neutral-300)',
}

export const textarea = [
  staticTextarea,
]
