import axios from "axios";
import { toast } from "react-hot-toast";

const postToDB = (route, dataItm, notify, refetch) => {
  axios
    .post(`http://localhost:5000/${route}`, dataItm, {
      headers: { "content-type": "application/json" },
    })
    .then((response) => {
      if (response.data.insertedId) {
        if (refetch) {
          refetch();
        }
        toast.success(` ${notify}  Added`);
      }
    });
};

export { postToDB };
