import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "red", "gray", "white", "orange", "magenta", "black", "pink", "green", "blue", "yellow", "purple", "teal", "cyan", "brown"
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: clr }}
            >
              {clr.charAt(0).toUpperCase() + clr.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
