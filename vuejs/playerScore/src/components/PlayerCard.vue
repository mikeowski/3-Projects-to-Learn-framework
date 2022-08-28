<template>
  <div
    class="sm:w-1/2 w-full mx-12 border text-4xl grid grid-cols-5 text-center py-4 px-2 rounded-md"
  >
    <button
      @click="
        () => {
          score++
        }
      "
      class="text-xl hover:underline hover:font-bold transition-all h-full w-full border-r"
    >
      UP
    </button>
    <div class="col-span-3">
      <h1 class="w-full border-b">{{ name }}</h1>
      <span class="text-red-600">{{ score }}</span>
    </div>
    <button
      @click="
        () => {
          if (score > 0) score--
        }
      "
      class="text-xl hover:underline hover:font-bold transition-all h-full w-full border-l"
    >
      DOWN
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { name } = defineProps<{ name: string }>()
const score = ref<number>(0)
</script>

<style scoped></style>
