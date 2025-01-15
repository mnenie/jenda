type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  'checkbox': 'w-4 h-4 shrink-0 rounded-md bg-transparent border disabled:cursor-not-allowed disabled:opacity-50',
  'checkbox-indicator': 'flex h-full w-full items-center justify-center',
  'checkbox-indecator-icon': 'w-4 h-4',

  'checkbox-default': 'border-neutral-950 data-[state=checked]:bg-neutral-950 data-[state=checked]:text-neutral-50 dark:border-neutral-100 dark:(focus-visible:ring-neutral-100 data-[state=checked]:bg-neutral-100 data-[state=checked]:text-neutral-900)',

}

export const dynamicCheckbox: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^checkbox-solid(?:-(.+))?$/, ([, c = 'blue']) => `border-neutral-200 data-[state=checked]:!bg-${c}-500 data-[state=checked]:!text-neutral-50 dark:border-neutral-600`],
]

export const checkbox = [
  staticCheckbox,
  ...dynamicCheckbox,
]
