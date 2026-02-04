<script setup lang="ts">
import { ref } from 'vue'
import ReRenders from './components/examples/ReRenders.vue'
import SlowDerived from './components/examples/SlowDerived.vue'
import UsingTheDom from './components/examples/UsingTheDom.vue'
import VueLogo from './components/VueLogo.vue'

type ExampleType = 'rerenders' | 'slowDerived' | 'usingTheDom'

const selectedExample = ref<ExampleType>('rerenders')
</script>

<template>
  <div class="w-full h-screen bg-neutral-900 text-white border-2 border-[#42b883] flex flex-col gap-8 p-12">
    <header class="flex flex-row items-center justify-start gap-4">
      <VueLogo class="size-24" />
      <h2 class="text-2xl font-bold">Vue Example</h2>
    </header>

    <div class="flex flex-row gap-2">
      <button
        :class="[
          'px-4 py-2 rounded-md',
          selectedExample === 'rerenders'
            ? 'bg-blue-500 text-white'
            : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
        ]"
        @click="selectedExample = 'rerenders'"
      >
        ReRenders
      </button>
      <button
        :class="[
          'px-4 py-2 rounded-md',
          selectedExample === 'slowDerived'
            ? 'bg-blue-500 text-white'
            : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
        ]"
        @click="selectedExample = 'slowDerived'"
      >
        SlowDerived
      </button>
      <button
        :class="[
          'px-4 py-2 rounded-md',
          selectedExample === 'usingTheDom'
            ? 'bg-blue-500 text-white'
            : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
        ]"
        @click="selectedExample = 'usingTheDom'"
      >
        UsingTheDom
      </button>
    </div>

    <div>
      <ReRenders v-if="selectedExample === 'rerenders'" />
      <SlowDerived v-if="selectedExample === 'slowDerived'" />
      <UsingTheDom v-if="selectedExample === 'usingTheDom'" />
    </div>
  </div>
</template>
