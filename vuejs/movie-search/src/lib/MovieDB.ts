import type { Movie, SearchInput } from '../types'

const fetchAllMovies = async (input: SearchInput): Promise<Movie[]> => {
  let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_PUBLIC_APIKEY
  }&query=${input.query}&include_adult=${input.adult}`
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
}
const fetchById = async (input: { id: string }): Promise<Movie> => {
  let baseUrl = `https://api.themoviedb.org/3//movie/${input.id}?api_key=${
    import.meta.env.VITE_PUBLIC_APIKEY
  }`
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
}
export { fetchAllMovies, fetchById }
