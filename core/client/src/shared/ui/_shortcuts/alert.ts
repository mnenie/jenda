type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  'alert': 'relative flex items-center justify-center border border-solid gap-2.5 py-0.5 pl-2.5 rounded-8px mb-5 min-h-22px',
  'alert-close': 'absolute top-1/2 transform -translate-y-1/2 right-2.5 text-sm text-neutral-700 cursor-pointer dark:text-neutral-200',

  'alert-default': 'bg-neutral-50 border-neutral-200 text-neutral-800 dark:(bg-neutral-800 text-neutral-200 border-neutral-700)',
  'alert-success': 'bg-green-50 border-green-200 text-neutral-950 dark:(bg-#1b4731 text-neutral-200 border-green-800)',
  'alert-warning': 'bg-yellow-50 border-#f8d040 text-neutral-950 dark:(bg-#3d351a text-neutral-200 border-#9f8745)',
  'alert-important': 'bg-red-50 border-red-600 text-neutral-950 dark:(bg-#692525 text-neutral-200 border-#c73939)',
}

export const dynamicAlert: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^alert-(solid|outline)-(.*)$/, ([, c, v]) => `alert-${c}-${v}`],
]

export const alert = [
  ...dynamicAlert,
  staticAlert,
]
