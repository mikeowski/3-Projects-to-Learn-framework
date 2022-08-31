<template>
  <form
    class="flex flex-col justify-center items-center mt-44 space-y-10"
    @submit.prevent="search()"
  >
    <label class="flex flex-col items-center w-full px-10 space-y-4">
      <span class="text-4xl">Search Movie</span>
      <input
        :value="input.query"
        @input="updateText"
        type="text"
        class="text-xl sm:w-3/5 w-3/4 bg-inherit p-2 hover:border-gray-50 border-gray-500 focus:outline-none border-b rounded-md focus:border-gray-50 transition-all"
        ref="textInputRef"
        @keyup.enter="search"
        required
      />
    </label>
    <label class="flex justify-evenly w-full">
      <span class="text-2xl">Adult Search</span>
      <input
        type="checkbox"
        name="adult"
        id="adult"
        :value="input.adult"
        @click="updateCheckbox"
        class="w-7 h-7 transition-all"
      />
    </label>
    <button
      type="submit"
      class="w-1/5 bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-800 transition-all"
    >
      Search
    </button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { SearchInput } from '../types'
const emits = defineEmits<{
  (e: 'search', ınput: SearchInput): void
}>()
const input = ref<SearchInput>({ query: '', adult: false })
const textInputRef = ref<HTMLInputElement | null>(null)
const updateText = (e: Event) => {
  if ((e as InputEvent).data) {
    input.value.query = (e.target as HTMLInputElement).value
  }
}
const updateCheckbox = (e: Event) => {
  input.value.adult = (e.target as HTMLInputElement).checked
}

const search = () => {
  emits('search', input.value)
}
onMounted(() => {
  textInputRef.value?.focus()
})
</script>

<style scoped></style>
