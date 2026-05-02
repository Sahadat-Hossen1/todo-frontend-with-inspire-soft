import { useState } from "react";
import toggleChecked from "../../services/toggleChecked";
import DeleteTodo from "../todoButtons/DeleteTodo";
import FilterTodo from "../todoButtons/FilterTodo";
import EditTodo from "../todoButtons/EditTodo";

export default function TodoList({ setTodos, todos }) {
    const[editingID,setEditingID]=useState(null)
  
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
//   handle edit 

  return (
    <div>
      <FilterTodo />
      {/* todo list */}
      <div className="min-h-screen bg-gray-100 p-6">
        {todos.length > 0 ? (
          <section className="max-w-2xl mx-auto space-y-4">
            {todos.map((todo) => (
              <div
                key={todo?._id}
                className="flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 p-4"
              >
                <input
                  type="checkbox"
                  checked={todo?.isCompleted}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                  onChange={() => handleTogole(todo._id, todo.isCompleted)}
                />
                <span>{todo?.title}</span>
                <div className="flex gap-2">
                  {/* <button>edit</button> */}
                  <EditTodo todos={todos} setTodos={setTodos} todo={todo} editingID={editingID} setEditingID={setEditingID}/>
                  <DeleteTodo todo={todo} setTodos={setTodos} todos={todos} />
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
