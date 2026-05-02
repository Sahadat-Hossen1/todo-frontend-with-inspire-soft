import DeleteTodo from "../../services/DeleteTodo";
import toggleChecked from "../../services/toggleChecked";
import FilterTodo from "../todoButtons/FilterTodo";

export default function TodoList({ setTodos, todos }) {
  // handle delete
  const handleDelete = async (_id) => {
    try {
      await DeleteTodo(_id);
      setTodos(todos.filter((todo) => todo._id !== _id));
    } catch (error) {
      console.error("Failed to delete todo:", error.message);
      alert("Failed to delete todo. Please try again.");
    }
  };

  // handle togole iscompleted
  const handleTogole = async (_id, currentStatus) => {
    const updatedStatus = !currentStatus;
    const updatedTodos = todos.map((todo) =>
      todo._id === _id ? { ...todo, isCompleted: updatedStatus } : todo,
    );
    setTodos(updatedTodos);
    try {
      await toggleChecked(_id, updatedStatus);
      //   setTodos(updatedTodo);
    } catch (err) {
      console.error("Failed to toggle todo status:", err.message);
    }
  };
  return (
    <div>
      <FilterTodo />
      {/* todo list */}
      <div className="min-h-screen bg-gray-100 p-6">
        {todos.length > 0 ? (
          <section className="max-w-2xl mx-auto space-y-4">
            {todos.map((todo) => (
              <div
                key={todo._id}
                className="flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 p-4"
              >
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                  onChange={(e) => handleTogole(todo._id, todo.isCompleted)}
                />
                <span>{todo.title}</span>
                <div className="flex gap-2">
                  <button>edit</button>
                  <button onClick={() => handleDelete(todo._id)}>delete</button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <h1 className="text-center text-2xl font-bold text-red-500 py-3">
            No Todos Found
          </h1>
        )}
      </div>
    </div>
  );
}
