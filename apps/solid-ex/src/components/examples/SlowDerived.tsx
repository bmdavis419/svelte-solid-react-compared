import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";

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

export const SlowDerived: Component = () => {
  const [randomNum, setRandomNum] = createSignal(getRandomNumber());
  const [input, setInput] = createSignal("");

  // const nextFivePrimes = createMemo(() => getNextFivePrimes(randomNum()));
  const nextFivePrimes = () => getNextFivePrimes(randomNum());

  return (
    <div class="flex flex-col gap-4 items-start">
      <ul class="list-disc list-inside">
        <For each={nextFivePrimes()}>{(prime) => <li>{prime}</li>}</For>
      </ul>

      <button
        class="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setRandomNum(getRandomNumber())}
      >
        Generate New Random Number
      </button>

      <div>
        <input
          class="bg-neutral-800 text-white p-2 rounded-md"
          placeholder="Type something"
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
        <p class="text-sm text-neutral-400">You typed: {input()}</p>
      </div>
    </div>
  );
};
