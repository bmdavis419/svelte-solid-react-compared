import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { SolidLogo } from "./components/SolidLogo";
import { ReRendersExample } from "./components/examples/ReRenders";
import { SlowDerived } from "./components/examples/SlowDerived";
import { UsingTheDom } from "./components/examples/UsingTheDom";

type ExampleType = "rerenders" | "slowDerived" | "usingTheDom";

const App: Component = () => {
  const [selectedExample, setSelectedExample] =
    createSignal<ExampleType>("rerenders");

  return (
    <div class="w-full h-screen bg-neutral-900 text-white border-2 border-[#1B336A] flex flex-col gap-8 p-12">
      <header class=" flex flex-row items-center justify-start gap-4">
        <SolidLogo class="size-24" />
        <h2 class="text-2xl font-bold">Solid Example</h2>
      </header>

      <div class="flex flex-row gap-2">
        <button
          class={`px-4 py-2 rounded-md ${
            selectedExample() === "rerenders"
              ? "bg-blue-500 text-white"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
          }`}
          onClick={() => setSelectedExample("rerenders")}
        >
          ReRenders
        </button>
        <button
          class={`px-4 py-2 rounded-md ${
            selectedExample() === "slowDerived"
              ? "bg-blue-500 text-white"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
          }`}
          onClick={() => setSelectedExample("slowDerived")}
        >
          SlowDerived
        </button>
        <button
          class={`px-4 py-2 rounded-md ${
            selectedExample() === "usingTheDom"
              ? "bg-blue-500 text-white"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
          }`}
          onClick={() => setSelectedExample("usingTheDom")}
        >
          UsingTheDom
        </button>
      </div>

      <div>
        {selectedExample() === "rerenders" && <ReRendersExample />}
        {selectedExample() === "slowDerived" && <SlowDerived />}
        {selectedExample() === "usingTheDom" && <UsingTheDom />}
      </div>
    </div>
  );
};

export default App;
