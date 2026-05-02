import PostTodo from "../../services/postTodo";

export default function AddTodo({setTodos,todos}) {
    // add new todo
  const handleSubmit =async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const data =await PostTodo(title);
    setTodos([...todos,data])
   
    

  };
  return (

  <div>
        <h2 className="text-2xl text-center font-bold mb-4">Add New Todo</h2>
        <form
          className="max-w-xl mx-auto flex justify-between items-center bg-orange-100  rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter a new todo"
            name="title"
            required
            className="w-3/4 pl-2 bg-transparent border-none focus:outline-none"
          />
          <button
            type="submit"
            className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Todo
          </button>
        </form>
      </div>)
}
