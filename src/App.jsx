import { useEffect, useState } from "react";
import getTodos from "./services/getTodos";
import AddTodo from "./components/todos/AddTodo";
// import Api_EndPoints from "./API_Endpoints";

export default function App() {
  const[todos,setTodos]=useState([])
  // get all todos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        console.log(data);
        
        setTodos(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h1 className="text-center text-3xl text-red-500">Todo Project</h1>

      {/* there will be an add todo form */}
    <AddTodo setTodos={setTodos} todos={todos}/>
      {/* there will be a list of todos */}
      <h1>todos length: {todos.length} </h1>
    </div>
  );
}
