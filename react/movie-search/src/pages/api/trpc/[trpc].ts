import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'
import superjson from 'superjson'
import { Movie } from '../../../shared/types'
import { searchInputValidator } from '../../../shared/searchInputValidator'
export const appRouter = trpc
  .router()
  .transformer(superjson)
  .mutation('search', {
    input: searchInputValidator,
    async resolve({ input }): Promise<Movie[]> {
      let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_APIKEY}&query=${input.query}&include_adult=${input.adult}`
      const res = await fetch(baseUrl)
      const json = await res.json()

      return json.results.map((v: any) => {
        return {
          id: v.id,
          adult: v.adult,
          poster_image: v.poster_path,
          backdrop_image: v.backdrop_path,
          overview: v.overview,
          release_date: v.release_date,
          title: v.title,
        }
      })
    },
  })
  .query('findById', {
    input: z.object({ id: z.string().min(1) }),
    async resolve({ input }): Promise<Movie> {
      let baseUrl = `https://api.themoviedb.org/3//movie/${input.id}?api_key=${process.env.NEXT_PUBLIC_APIKEY}`
      const res = await fetch(baseUrl)
      const json = await res.json()
      return {
        id: json.id,
        adult: json.adult,
        poster_image: json.poster_path,
        backdrop_image: json.backdrop_path,
        overview: json.overview,
        release_date: json.release_date,
        title: json.title,
      }
    },
  })

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
})
