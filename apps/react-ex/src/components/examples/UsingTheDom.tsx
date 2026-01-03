import { useRef, useState } from "react";

export const UsingTheDom: React.FC = () => {
  const [input, setInput] = useState("");

  const randomDivRef = useRef<HTMLDivElement>(null);

  const setRef = (el: HTMLDivElement) => {
    console.log("setting the ref");
    randomDivRef.current = el;
  };

  //   const setRef = useCallback((el: HTMLDivElement) => {
  //     console.log("setting the ref");
  //     randomDivRef.current = el;
  //   }, []);

  const changeColor = () => {
    if (randomDivRef.current) {
      const colors = ["red", "green", "blue", "yellow", "purple"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      randomDivRef.current.style.backgroundColor = randomColor;
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start">
      <div
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        ref={setRef}
      ></div>

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={changeColor}
      >
        Change Color
      </button>

      <div>
        <input
          className="bg-neutral-800 text-white p-2 rounded-md"
          placeholder="Type something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-sm text-neutral-400">You typed: {input}</p>
      </div>
    </div>
  );
};
