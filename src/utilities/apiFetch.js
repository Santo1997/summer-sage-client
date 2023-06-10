import { toast } from "react-hot-toast";

const postToDB = (dataItm) => {
  fetch("http://localhost:5000/allusers", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(dataItm),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        toast.success("User Added");
      }
    });
};

export { postToDB };
