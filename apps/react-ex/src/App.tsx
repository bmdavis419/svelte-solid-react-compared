import { ReactLogo } from "./components/ReactLogo";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-900 text-white border-2 border-[#59C4DC]">
      <header className="p-12 flex flex-row items-center justify-start gap-4">
        <ReactLogo className="size-24" />
        <h2 className="text-2xl font-bold">React Example</h2>
      </header>
    </div>
  );
}

export default App;
