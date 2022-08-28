<script setup lang="ts">
import { onMounted, ref, provide } from 'vue'
import type { Todo } from './types'
const todos = ref<Todo[]>([])
provide('todos', todos)
onMounted(() => {
  const localTodo = window.localStorage.getItem('todos')
  if (localTodo) todos.value = JSON.parse(localTodo)
})
</script>

<template>
  <h1 class="text-center text-4xl font-bold">TODO</h1>
</template>

<style scoped></style>
