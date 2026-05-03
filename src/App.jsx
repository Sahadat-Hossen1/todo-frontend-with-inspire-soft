import { useEffect, useState } from "react";
import getTodos from "./services/getTodos";
import AddTodo from "./components/todos/AddTodo";
import TodoList from "./components/todos/TodoList";
import FilterTodo from "./components/todoButtons/FilterTodo";
import Api_EndPoints from "./API_Endpoints";
// import Api_EndPoints from "./API_Endpoints";

export default function App() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const[todos,setTodos]=useState([])
  
  // get all todos
  useEffect(() => {
    const fetchData = async () => {
      try {

      let url=Api_EndPoints.Todos_API;
      if(currentFilter ==="pendding"){
        url=`${url}?isCompleted=false`
      }else if(currentFilter ==="completed"){
        url=`${url}?isCompleted=true`
      }
      console.log(url);
      
        const data = await getTodos(url);
        // console.log(data);
        
        setTodos(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [currentFilter]);
  

  return (
    <div>
      <h1 className="text-center text-3xl text-red-500">Todo Project</h1>

      {/* there will be an add todo form */}
    <AddTodo setTodos={setTodos} todos={todos}/>
      {/* there will be a list of todos */}
      <h1 className="text-center text-3xl font-bold text-red-500 py-3">Todo List </h1>
      <FilterTodo setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}
