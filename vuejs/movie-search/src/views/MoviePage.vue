<template>
  <div>{{ movie?.title }} :{{ id }}</div>
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
