<template>
  <div class="max-w-screen-lg mx-auto">
    <MovieSearchForm @search="search" />
  </div>
</template>

<script setup lang="ts">
import MovieSearchForm from '../components/MovieSearchForm.vue'
const search = (payload: string) => {}
</script>

<style scoped></style>
