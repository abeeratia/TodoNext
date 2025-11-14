import { newTodo } from "@/lib/actions";

function AddTodoServer() {
  return (
    <div>
      <h2>Add Todo</h2>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-300 to-amber-800">
        <form
          action={newTodo}
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
    </div>
  );
}

export default AddTodoServer;
