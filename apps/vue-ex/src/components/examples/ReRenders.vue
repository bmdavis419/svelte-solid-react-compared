<script setup lang="ts">
import { ref } from 'vue'
import RandomChild from './RandomChild.vue'

const count = ref(0)

console.log('ReRendersExample rendered')
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <h2 class="text-lg font-bold">Current count: {{ count }}</h2>
    <button
      class="bg-blue-500 text-white p-2 rounded-md"
      @click="count++"
    >
      Increment
    </button>
    <RandomChild />
  </div>
</template>
