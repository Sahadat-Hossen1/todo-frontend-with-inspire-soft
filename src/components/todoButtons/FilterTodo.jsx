import { useState } from "react";

export default function FilterTodo() {
      const [currentFilter, setCurrentFilter] = useState("all");

  return (
 <div className="flex justify-center my-3">
        <div className="flex gap-2">
          {["all", "pendding", "completed"].map((filter) => (
            <button
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm capitalize transition 
        ${
          currentFilter === filter
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
)
}
