<template>
  <div v-if="!movie" class="text-center h-full w-full text-6xl">
    Movie Not Found
  </div>
  <div v-else class="flex flex-col items-center justify-center text-center">
    <div
      class="flex flex-col sm:flex-row h-full items-center justify-center w-full"
    >
      <img
        v-if="movie.poster_image"
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_image"
        :alt="movie.title"
        class="aspect-auto h-96 left-0"
      />

      <div
        class="flex flex-col justify-center text-center w-full h-full px-4 font-bold"
      >
        <span v-if="movie.adult" class="text-2xl">+18</span>
        <h2 class="text-white text-6xl">{{ movie.title }}</h2>
        <span class="text-gray-300 text-lg">
          {{ movie.release_date?.split('-').reverse().join('/') }}
        </span>
      </div>
    </div>
    <span class="text-4xl font-bold">Overview</span>
    <div class="text-gray-200 mt-3 text-xl">
      {{ movie.overview }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '../store/MovieStore'
import type { Movie } from '../types'
const route = useRoute()
const id = route.params.id
const store = useMovieStore()
const movie = ref<Movie>()
onMounted(async () => {
  if (id && typeof id === 'string') {
    if (store.movies.length > 0) {
      movie.value = store.getMovieById(id)
    } else {
      movie.value = await store.searchById({ id: id })
    }
  }
})
</script>

<style scoped></style>
