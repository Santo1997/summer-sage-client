import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const ManageCls = () => {
  const [cart, refetch] = useCart("allCourses");
  const [axiosSecure] = useAxiosSecure();

  //TODO: confirm to Approve

  const handleApprove = (itm) => {
    console.log(itm);
    const updateStatus = {
      status: "confirm",
    };
    axiosSecure
      .put(`/updateStatus/${itm._id}`, updateStatus)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          toast.success("Course Status Updated");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((itm) => (
            <tr key={itm._id}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={itm.course_img} />
                  </div>
                </div>
              </td>
              <td>
                <h2 className="font-bold">{itm.course_name}</h2>
              </td>
              <td>
                <h2 className="font-bold">{itm.course_teacher.name}</h2>
              </td>
              <td>
                <h2 className="font-bold">{itm.course_teacher.email}</h2>
              </td>
              <td>{itm.available_seats}</td>
              <td>
                $<span>{itm.course_price}</span>
              </td>
              <td>
                {itm.status === "pending" ? (
                  <h2 className="font-bold text-warning capitalize">
                    {itm.status}
                  </h2>
                ) : (
                  <>
                    {itm.status === "confirm" ? (
                      <h2 className="font-bold text-success capitalize">
                        {itm.status}
                      </h2>
                    ) : (
                      <h2 className="font-bold text-error capitalize">
                        {itm.status}
                      </h2>
                    )}
                  </>
                )}
              </td>
              <td className="grid grid-rows-3 gap-2">
                {itm.status === "pending" ? (
                  <>
                    <button
                      onClick={() => handleApprove(itm)}
                      className="btn btn-outline btn-xs btn-success"
                    >
                      Approve
                    </button>
                    <button className="btn btn-outline btn-xs btn-error">
                      Deny
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-xs" disabled="disabled">
                      Approve
                    </button>
                    <button className="btn btn-xs" disabled="disabled">
                      Deny
                    </button>
                  </>
                )}

                <button className="btn btn-outline btn-xs btn-info">
                  Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCls;
