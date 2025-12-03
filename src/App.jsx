import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="min-h-screen flex flex-col items-center py-16 px-4
        bg-gray-100 text-black
        dark:bg-[#0f0f0f] dark:text-white
        transition-colors duration-500
      "
    >

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="
          absolute top-5 right-5 p-2 rounded-full shadow 
          bg-white dark:bg-gray-800 
          transition-all duration-300
        "
      >
        {theme === "dark" ? (
          <Sun className="w-6 h-6 text-yellow-300" />
        ) : (
          <Moon className="w-6 h-6 text-gray-900" />
        )}
      </button>

      <h1 className="text-4xl font-bold mb-8">To-Do List</h1>

      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}
