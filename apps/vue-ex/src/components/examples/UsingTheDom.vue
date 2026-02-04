<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const randomDivRef = ref<HTMLDivElement | null>(null)

const changeColor = () => {
  if (randomDivRef.value) {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    randomDivRef.value.style.backgroundColor = randomColor
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <div
      ref="randomDivRef"
      style="background-color: red; width: 100px; height: 100px"
    ></div>

    <button
      class="bg-blue-500 text-white p-2 rounded-md"
      @click="changeColor"
    >
      Change Color
    </button>

    <div>
      <input
        class="bg-neutral-800 text-white p-2 rounded-md"
        placeholder="Type something"
        v-model="input"
      />
      <p class="text-sm text-neutral-400">You typed: {{ input }}</p>
    </div>
  </div>
</template>
