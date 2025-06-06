type TagsInputPrefix = 'tags-input'

export const staticTagsInput: Record<`${TagsInputPrefix}-${string}` | TagsInputPrefix, string> = {
  'tags-input': 'flex flex-wrap h-fit gap-2 items-center rounded-md border border-neutral-200 px-3 py-1.5 text-default dark:(border-neutral-700 focus-visible:ring-neutral-300)',
  'tags-input-input': 'text-default focus:outline-none flex-1 bg-transparent placeholder:text-neutral-500 dark:placeholder:text-neutral-400',
  'tags-input-item': 'flex items-center rounded-md ring-offset-0 bg-neutral-100 text-neutral-800 dark:(bg-neutral-700/60 text-neutral-100) data-[state=active]:(ring-0 ring-offset-0)',
  'tags-input-item-delete': 'flex rounded bg-transparent mr-1',
  'tags-input-item-delete-icon': 'h-3.5 w-3.5',
  'tags-input-item-text': 'px-2 text-default rounded bg-transparent',
}

export const tagsInput = [
  staticTagsInput,
]
