<template>
  <div class="mt-10 flex flex-col text-center w-full space-y-4">
    <span class="text-4xl letter">Add TODO</span>
    <input
      v-model="todo.content"
      type="text"
      class="border mx-8 focus:outline-none p-2 focus:border-gray-500 focus:ring-0 transition-all rounded-md"
    />
    <button
      class="font-bold hover:bg-teal-400 transition-all mx-44 text-center bg-teal-300 rounded py-2"
      @click="addTodo()"
    >
      ADD
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'
import { Todo } from '../types'
const todos = inject<Ref<Todo[]>>('todos')

const todo: Todo = {
  content: '',
  done: false,
}
const addTodo = () => {
  if (todo.content.length != 0) todos!.value = [...todos!.value, todo]
}
</script>

<style scoped></style>
