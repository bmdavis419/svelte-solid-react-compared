import type { Component } from "solid-js";
import { SolidLogo } from "./components/SolidLogo";

const App: Component = () => {
  return (
    <div class="w-full h-screen bg-neutral-900 text-white border-2 border-[#1B336A]">
      <header class="p-12 flex flex-row items-center justify-start gap-4">
        <SolidLogo class="size-24" />
        <h2 class="text-2xl font-bold">Solid Example</h2>
      </header>
    </div>
  );
};

export default App;
