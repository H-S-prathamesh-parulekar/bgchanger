import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "red", "gray", "white", "orange", "magenta", "black", "pink", "green", "blue", "yellow", "purple", "teal", "cyan", "brown"
  ];

  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-3 rounded-full backdrop-blur-md bg-opacity-80 border border-gray-200">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="outline-none px-5 py-2 rounded-full text-white shadow-md transition-transform transform hover:scale-110"
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
