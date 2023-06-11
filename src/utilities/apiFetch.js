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

const putToDB = (route, dataItm, notify, refetch) => {
  axios
    .put(`http://localhost:5000/${route}`, dataItm, {
      headers: { "content-type": "application/json" },
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        if (refetch) {
          refetch();
        }
        toast.success(`${notify} Updated`);
      } else {
        toast.error("Need Some Update");
      }
    });
};

export { postToDB, putToDB };
