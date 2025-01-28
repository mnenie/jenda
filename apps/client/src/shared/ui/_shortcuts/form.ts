type FormPrefix = 'form'

export const staticForm: Record<`${FormPrefix}-${string}` | FormPrefix, string> = {
  'form': '',
  'form-field': 'grid gap-2 justify-items-start',
  'form-label': 'text-sm text-neutral-900 !fw500 dark:text-neutral-200 peer-disabled:(cursor-not-allowed opacity-70)',
  'form-message': 'flex items-center gap-2 capitalize text-sm normal-case !fw500',
  'form-text-underline': 'cursor-pointer underline underline-offset-4 duration-100 ease-in hover:text-neutral-900 dark:hover:text-neutral-400',
}

export const form = [
  staticForm,
]
