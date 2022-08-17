import { z } from 'zod'

export const searchInputValidator = z.object({
  adult: z.boolean(),
  query: z.string(),
  year: z.number().nullish(),
})

export type SearchInputValidatorType = typeof searchInputValidator
