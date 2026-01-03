import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export const ReRendersExample: Component = () => {
  const [count, setCount] = createSignal(0);

  console.log("ReRendersExample rendered");

  return (
    <div class="flex flex-col gap-4 items-start">
      <h2 class="text-lg font-bold">Current count: {count()}</h2>
      <button
        class="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setCount(count() + 1)}
      >
        Increment
      </button>
      <RandomChild />
    </div>
  );
};

const RandomChild: Component = () => {
  console.log("RandomChild rendered");
  return <div>RandomChild</div>;
};
