export type Movie = {
  id: number
  adult: boolean
  poster_image: string
  backdrop_image: string
  title: string
  overview: string
  release_date: string
}
export type SearchInput = {
  query: string
  adult: boolean
}
