<template>
  <div class="max-w-screen-lg mx-auto">
    <MovieSearchForm @search="search" />
  </div>
</template>

<script setup lang="ts">
import MovieSearchForm from '../components/MovieSearchForm.vue'
import { useMovieStore } from '../store/MovieStore'
import type { SearchInput } from '../types'
const store = useMovieStore()
const movies = store.movies
const search = (payload: SearchInput) => {
  store.searchMovies(payload)
}
</script>

<style scoped></style>
