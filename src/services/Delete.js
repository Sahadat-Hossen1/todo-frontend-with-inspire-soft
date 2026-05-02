import Api_EndPoints from "../API_Endpoints";

const Delete = async (_id) => {
    try {
        const res = await fetch(`${Api_EndPoints.Todos_API}/${_id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
        if (!res.ok) {
            throw new Error("Something went wrong while deleting todo")
        }
        const data = await res.json();
        // console.log(data);

        return data.data
    } catch (err) {
        console.error("Delete error:", err.message);
        throw err; // Re-throw the error so it can be caught by the caller
    }
}
export default Delete;