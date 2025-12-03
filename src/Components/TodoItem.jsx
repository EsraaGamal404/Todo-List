import React from "react";
import { motion } from "framer-motion";

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="
        p-4 rounded-lg flex justify-between items-center mb-3 
        bg-white text-black 
        dark:bg-gray-800 dark:text-white 
        border border-gray-300 dark:border-gray-700
        shadow-sm
        transition-colors duration-300
      "
    >
      <span className="font-medium">{todo.text}</span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="
          text-red-500 hover:text-red-700
          dark:text-red-400 dark:hover:text-red-300
          font-semibold
          transition-colors duration-200
        "
      >
        Delete
      </button>
    </motion.div>
  );
}
