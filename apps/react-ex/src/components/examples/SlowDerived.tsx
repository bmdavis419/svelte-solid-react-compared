import { useState } from "react";

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

// compiler works WONDERS on speeding this one up
export const SlowDerived: React.FC = () => {
  const [randomNum, setRandomNum] = useState(getRandomNumber());

  const [input, setInput] = useState("");

  const nextFivePrimes = getNextFivePrimes(randomNum);

  return (
    <div className="flex flex-col gap-4 items-start">
      <ul className="list-disc list-inside">
        {nextFivePrimes.map((prime, index) => (
          <li key={index}>{prime}</li>
        ))}
      </ul>

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setRandomNum(getRandomNumber())}
      >
        Generate New Random Number
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
