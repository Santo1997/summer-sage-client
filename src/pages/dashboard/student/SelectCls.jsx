import { BsFillTrashFill } from "react-icons/bs";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import anime from "animejs";

const SelectCls = () => {
  const [cart, refetch] = useCart();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    anime({
      targets: ".user-row",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, [cart]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Want to delete item?");

    if (confirmed) {
      axiosSecure.delete(`carts/${id}`).then((response) => {
        if (response.data.deletedCount > 0) {
          toast.success(` Class Delete`);
          refetch();
        }
      });
    }
  };

  return (
    <>
      {cart.length == 0 ? (
        <h1 className="text-3xl  m-20 text-error">No Class Select</h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Course Img</th>
                <th>Course Name</th>
                <th>Available</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((itm, index) => (
                <tr key={itm._id} className="user-row">
                  <th>{index + 1}</th>
                  <td className="flex items-center gap-3 justify-center">
                    <div className="avatar ring-1 rounded-lg">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={itm.course_img} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="font-bold">{itm.course_name}</h2>
                  </td>
                  <td>
                    <span>12</span>
                  </td>
                  <td>
                    $<span>12</span>
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(itm._id)}
                      className="btn btn-xs btn-outline me-3 btn-error"
                    >
                      <BsFillTrashFill /> Delete
                    </button>
                    <Link to={`../payment/${itm._id}`}>
                      <button className="btn btn-xs btn-outline me-3 btn-warning">
                        Payment
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SelectCls;
