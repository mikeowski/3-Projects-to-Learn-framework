import { z } from 'zod'

export const searchInputValidator = z.object({
  adult: z.boolean(),
  query: z.string(),
})

export type SearchInputValidatorType = z.infer<typeof searchInputValidator>
