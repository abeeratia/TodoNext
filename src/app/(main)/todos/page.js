"use client";
import React, { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);

  async function getTodo() {
    try {
      const data = await fetch("http://localhost:3000/api/todos");
      const { todo } = await data.json();
      console.log("todoClient", todo);
      setTodo(todo);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 py-16 px-5">
      <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-10">
        My Todo List
      </h2>

      {todo && todo.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {todo.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-amber-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 italic">by {item.author}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-3xl font-semibold text-amber-600">
            No Todos Found
          </p>
        </div>
      )}
    </div>
  );
}

export default Todo;
