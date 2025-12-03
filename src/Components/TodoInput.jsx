import React, { useState } from "react";

export default function TodoInput({ setTodos }) {
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;

    setTodos((prev) => [...prev, { text, id: Date.now() }]);
    setText("");
  };

  return (
    <div className="flex gap-3 mb-8 w-full max-w-md">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="
          flex-1 p-3 rounded-lg 
          bg-white text-black 
          dark:bg-gray-800 dark:text-white 
          border border-gray-300 dark:border-gray-700
          focus:ring-2 focus:ring-purple-500
          transition-colors duration-300
        "
      />

      <button
        onClick={addTodo}
        className="
          px-5 py-2 rounded-lg font-semibold 
          text-white 
          bg-purple-600 hover:bg-purple-700
          dark:bg-purple-500 dark:hover:bg-purple-400
          transition-colors duration-300
        "
      >
        Add
      </button>
    </div>
  );
}
