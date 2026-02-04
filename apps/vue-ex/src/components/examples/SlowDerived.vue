<script setup lang="ts">
import { ref, computed } from "vue";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

const isPrimeNumber = (num: number) => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getNextFivePrimes = (num: number) => {
  console.log("getNextFivePrimes called");
  const primes = [];
  let current = num;
  while (primes.length < 5) {
    current++;
    if (isPrimeNumber(current)) {
      primes.push(current);
    }
  }
  return primes;
};

const randomNum = ref(getRandomNumber());
const input = ref("");

const nextFivePrimes = computed(() => getNextFivePrimes(randomNum.value));
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <ul class="list-disc list-inside">
      <li v-for="(prime, index) in nextFivePrimes" :key="index">{{ prime }}</li>
    </ul>

    <button
      class="bg-blue-500 text-white p-2 rounded-md"
      @click="randomNum = getRandomNumber()"
    >
      Generate New Random Number
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
