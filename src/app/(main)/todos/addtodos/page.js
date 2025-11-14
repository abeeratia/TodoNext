"use client";

// import { useRouter } from "next/router";
// import { useState } from "react";

// function AddToodo() {
//   const router = useRouter();
//   const [todo, setTodo] = useState({ title: "", author: "" });

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const data = await fetch("http://localhost:3000/api/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(todo),
//     });
//     const res = await data.json();
//     console.log("res", res);
//     setTodo({ title: "", author: "" });
//     router.push("/todos");
//   }

 /*  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-300 to-amber-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-3xl font-extrabold text-center text-amber-600">
          Add New Todo
        </h1>

        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-lg font-semibold text-amber-700 mb-2"
          >
            Title
          </label>
          <input
            className="border border-amber-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
            type="text"
            name="title"
            id="title"
            placeholder="Enter todo title..."
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="author"
            className="text-lg font-semibold text-amber-700 mb-2"
          >
            Author
          </label>
          <input
            className="border border-amber-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
            type="text"
            id="author"
            name="author"
            placeholder="Enter author name..."
            value={todo.author}
            onChange={(e) => setTodo({ ...todo, author: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg shadow-md transition duration-300"
        >
          Add Todo
        </button>
      </form>
    </div>
  ); */
// }

// export default AddToodo;
