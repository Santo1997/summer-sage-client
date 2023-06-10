import { toast } from "react-hot-toast";

const postToDB = (route, dataItm, notify, refetch) => {
  fetch(`http://localhost:5000/${route}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(dataItm),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        if (refetch) {
          refetch();
        }
        toast.success(` ${notify}  Added`);
      }
    });
};

export { postToDB };
