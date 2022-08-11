import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'
import superjson from 'superjson'
import { movie } from '../../../shared/types'
export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query('search', {
    input: z.object({
      adult: z.boolean(),
      query: z.string(),
      year: z.number().nullish(),
    }),
    async resolve({ input }) {
      let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_APIKEY}&query=${input.query}&include_adult=${input.adult}`
      if (input.year) {
        baseUrl += `&year=${input.year}`
      }
      const res = await fetch(baseUrl)
      const json = await res.json()
      return json.results.map((v: any) => {
        return {
          adult: v.adult,
          backdrop_path: v.poster_path,
          overview: v.overview,
          release_date: v.release_date,
          title: v.title,
        }
      }) as movie[]
    },
  })

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
})
