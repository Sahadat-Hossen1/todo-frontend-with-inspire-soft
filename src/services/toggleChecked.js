import Api_EndPoints from "../API_Endpoints";

const toggleChecked = async (_id, isCompleted) => {
  try {
    const res = await fetch(`${Api_EndPoints.Todos_API}/${_id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ isCompleted }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong while updating todo");
    }
    const data = await res.json();
    return data.todo;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
export default toggleChecked;
