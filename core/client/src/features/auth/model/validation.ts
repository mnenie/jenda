import * as z from 'zod'

export const validationRules = z.object({
  email: z
    .string({ required_error: 'Email is a required field' })
    .nonempty('Email is a required field')
    .email('Email must be a valid'),
  password: z
    .string({ required_error: 'Password is a required field' })
    .nonempty('Password is a required field')
    .min(8, 'Password must be at least 8 characters'),
})
