<template>
  <div class="items-center justify-center flex flex-col relative h-full">
    <img
      v-if="movie.poster_image"
      :src="'https://image.tmdb.org/t/p/original' + movie.poster_image"
      :alt="movie.title"
    />

    <div
      class="opacity-0 z-30 hover:opacity-100 absolute flex flex-col justify-center text-center hover:backdrop-brightness-50 backdrop-blur-sm transition-all translate-y-2 hover:translate-y-0 w-full h-full px-4 font-bold"
    >
      <span v-if="movie.adult" class="text-2xl">+18</span>
      <h2 class="text-white text-3xl">{{ movie.title }}</h2>
      <span class="text-gray-300">
        {{ movie.release_date?.split('-').reverse().join('/') }}
      </span>

      <div class="text-gray-200 mt-3">
        <a href="" class="hover:underline cursor-pointer text-red-500">
          details
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../store/MovieStore'
import { Movie } from '../types'

const { movie } = defineProps<{ movie: Movie }>()
</script>

<style scoped></style>
