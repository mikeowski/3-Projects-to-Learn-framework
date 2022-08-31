import { defineStore } from 'pinia'
import fetchMovies from '../lib/MovieDB'
import type { Movie, SearchInput } from '../types'
type StateShape = {
  movies: Movie[]
}
export const useMovieStore = defineStore('MovieStore', {
  state: (): StateShape => {
    return {
      movies: [],
    }
  },
  getters: {
    numberOfMovies: (state): number => {
      return state.movies.length
    },
    getMovieById: (state) => {
      return (movieId: number): Movie => {
        return state.movies.filter((movie) => movie.id === movieId)[0]
      }
    },
  },
  actions: {
    async searchMovies(payload: SearchInput) {
      if (payload.query.length > 1) this.movies = await fetchMovies(payload)
      else {
        alert('please fill the search box')
      }
    },
  },
})
