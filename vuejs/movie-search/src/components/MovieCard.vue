<template>
  <div>
    <h2>{{ movie.title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMovieStore } from '../store/MovieStore'

const { id } = defineProps<{ id: number }>()
const store = useMovieStore()
const movie = store.getMovieById(id)
</script>

<style scoped></style>
