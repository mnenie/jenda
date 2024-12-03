import * as z from 'zod'

export const validationColumnRules = z.object({
  name: z
    .string({ required_error: 'Name is a required field' })
    .nonempty('Name is a required field'),
})
