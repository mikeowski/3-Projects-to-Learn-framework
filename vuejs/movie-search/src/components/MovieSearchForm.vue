<template>
  <form class="flex justify-center items-center mt-44" @submit.prevent>
    <label class="flex flex-col items-center w-full px-10 space-y-4">
      <span class="text-4xl">Search Movie</span>
      <input
        :value="text"
        @input="updateText"
        type="text"
        class="bg-inherit p-2 hover:border-gray-50 border-gray-500 w-full focus:outline-none border-b rounded-md focus:border-gray-50 transition-all"
        required
        ref="textInputRef"
        @keyup.enter="search"
      />
      {{ text }}
    </label>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const emits = defineEmits<{
  (e: 'search', text: string): void
}>()
const text = ref('')
const textInputRef = ref<HTMLInputElement | null>(null)
const updateText = (e: Event) => {
  if ((e as InputEvent).data) {
    text.value = (e.target as HTMLInputElement).value
  }
}

const search = () => {
  emits('search', text.value)
  text.value = ''
}
onMounted(() => {
  textInputRef.value?.focus()
})
</script>

<style scoped></style>
