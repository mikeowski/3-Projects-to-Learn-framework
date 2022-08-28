<template>
  <div
    v-for="(todo, index) in store?.todoData.todos"
    class="border-b py-2 px-4 mt-2 flex justify-between items-center break-words"
    @click="store?.methods.updateTodo(todo)"
  >
    <p :class="'w-3/4 ' + (todo.done ? 'line-through' : '')">
      {{ todo.content }}
    </p>

    <button @click="store?.methods.removeTodo(todo)">delete</button>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, Ref } from 'vue'
import { Todo } from '../types'
import type { storeType } from '../store/todoStore'
const store = inject<storeType>('store')
</script>

<style scoped></style>
