import type React from "react";
import { useState } from "react";

export const ReRendersExample: React.FC = () => {
  const [count, setCount] = useState(0);

  console.log("ReRendersExample rendered");

  return (
    <div className="flex flex-col gap-4 items-start">
      <h2 className="text-lg font-bold">Current count: {count}</h2>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <RandomChild />
    </div>
  );
};

// can stop this from re-rendering by turning on the compiler
const RandomChild: React.FC = () => {
  console.log("RandomChild rendered");
  return <div>RandomChild</div>;
};
