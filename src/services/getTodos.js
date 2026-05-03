// import Api_EndPoints from "../API_Endpoints";

export default async function getTodos(url){
try {
    const res=await fetch(url)
    const data=await res.json()
    return data.todos
} catch (error) {
    console.log(error.message);
    
}}