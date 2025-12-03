import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-3">

      {todos.length === 0 ? (
        <p className="
          text-gray-500 dark:text-gray-400 
          text-center mt-4
          transition-colors duration-300
        ">
          Start adding your tasks ✨
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
          />
        ))
      )}

    </div>
  );
}
