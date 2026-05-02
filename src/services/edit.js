import Api_EndPoints from "../API_Endpoints";

const edit= async (_id, updatedTitle) => {
  try {
    const res = await fetch(`${Api_EndPoints.Todos_API}/${_id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title: updatedTitle }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong while updating todo");
    }
    const data = await res.json();
    return data.todo;
  } catch (err) {
    console.log(err.message);
  }
};
export default edit
