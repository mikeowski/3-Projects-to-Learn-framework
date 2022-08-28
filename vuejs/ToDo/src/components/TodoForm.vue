<template>
  <div class="mt-10 flex flex-col text-center w-full space-y-4">
    <span class="text-4xl letter">Add TODO</span>
    <input
      v-model="todoContent"
      type="text"
      class="border mx-8 focus:outline-none p-2 focus:border-gray-500 focus:ring-0 transition-all rounded-md shadow-md shadow-teal-300"
      @keyup.enter="addTodo()"
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
import { inject, ref, Ref } from 'vue'
import { Todo } from '../types'
import { storeType } from '../store/todoStore'
const store = inject<storeType>('store')

const todoContent = ref('')
const addTodo = () => {
  store?.methods.addTodo({ content: todoContent.value, done: false })
  todoContent.value = ''
}
</script>

<style scoped></style>
