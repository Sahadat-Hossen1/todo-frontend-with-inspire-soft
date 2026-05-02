import Api_EndPoints from "../API_Endpoints"

const PostTodo=async(title)=>{
    try{
        const res=await fetch(Api_EndPoints.Todos_API,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({title})
        })
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        const data =await res.json();
        // console.log(data);
        
        return data.data
    }catch(err){
        console.log(err.message);
    }
    }

    export default PostTodo