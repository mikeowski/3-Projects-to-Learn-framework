import type { Movie, searchInput } from '../types'

const fetchMovies = async (input: searchInput): Promise<Movie[]> => {
  let baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.PUBLIC_APIKEY
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
export default fetchMovies
