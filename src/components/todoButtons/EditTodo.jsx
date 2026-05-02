import { useState } from "react";
import edit from "../../services/edit";

export default function EditTodo({
  todos,
  setTodos,
  todo,
  editingID,
  setEditingID,
}) {
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleEdit = () => {
    setEditingID(todo._id);
    setUpdatedTitle(todo.title);
  };
  const handleUpdate = async (_id) => {
    if (!updatedTitle.trim()) return;
    const updatedTodo = todos.map((todo) =>
      todo._id === _id ? { ...todo, title: updatedTitle } : todo,
    );
    setTodos(updatedTodo);
    try {
      await edit(_id, updatedTitle);
      setEditingID(null);
    } catch (err) {
      console.error("Failed to toggle todo status:", err.message);
    }
    // setEditingID(null);
  };
  return (
    <>
      {editingID === todo._id ? (
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg shadow-sm">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Edit todo..."
            className="px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />

          <button
            onClick={() => handleUpdate(todo._id)}
            className="px-3 py-1 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition"
          >
            Save
          </button>

          <button
            onClick={() => setEditingID(null)}
            className="px-3 py-1 text-sm rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleEdit(todo)}
          className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition shadow-sm"
        >
          Edit
        </button>
      )}
    </>
  );
}
