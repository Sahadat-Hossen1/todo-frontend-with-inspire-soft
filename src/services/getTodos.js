import Api_EndPoints from "../API_Endpoints";

export default async function getTodos(){
try {
    const res=await fetch(Api_EndPoints.Todos_API)
    const data=await res.json()
    return data.todos
} catch (error) {
    console.log(error.message);
    
}}