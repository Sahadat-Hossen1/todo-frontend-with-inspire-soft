import Delete from "../../services/Delete";

export default function DeleteTodo({ todo,setTodos, todos }) {
  // handle delete
  const handleDelete = async (_id) => {
    try {
      await Delete(_id);
      setTodos(todos.filter((todo) => todo._id !== _id));
    } catch (error) {
      console.error("Failed to delete todo:", error.message);
      alert("Failed to delete todo. Please try again.");
    }
  };

  return (
    <>
      <button onClick={() => handleDelete(todo._id)}>delete</button>
    </>
  );
}
