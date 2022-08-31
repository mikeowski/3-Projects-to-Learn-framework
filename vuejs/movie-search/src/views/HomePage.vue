<template>
  <div class="max-w-screen-lg mx-auto">
    <MovieSearchForm @search="search" />
    <div class="grid grid-cols-3 gap-2 mt-10">
      <MovieCard v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieSearchForm from '../components/MovieSearchForm.vue'
import { useMovieStore } from '../store/MovieStore'
import type { SearchInput, Movie } from '../types'
import MovieCard from '../components/MovieCard.vue'
import { ref } from 'vue'
const store = useMovieStore()
const movies = ref<Movie[]>([])
const search = async (payload: SearchInput) => {
  await store.searchMovies(payload)
  movies.value = store.movies
}
</script>

<style scoped></style>
