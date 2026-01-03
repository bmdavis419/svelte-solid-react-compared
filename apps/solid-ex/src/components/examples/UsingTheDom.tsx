import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export const UsingTheDom: Component = () => {
  const [input, setInput] = createSignal("");

  let randomDivRef: HTMLDivElement | undefined;

  const setRef = (el: HTMLDivElement) => {
    console.log("setting the ref");
    randomDivRef = el;
  };

  const changeColor = () => {
    if (randomDivRef) {
      const colors = ["red", "green", "blue", "yellow", "purple"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      randomDivRef.style.backgroundColor = randomColor;
    }
  };

  return (
    <div class="flex flex-col gap-4 items-start">
      <div
        style={{ "background-color": "red", width: "100px", height: "100px" }}
        ref={setRef}
      ></div>

      <button
        class="bg-blue-500 text-white p-2 rounded-md"
        onClick={changeColor}
      >
        Change Color
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
