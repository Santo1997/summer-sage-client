import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ManageCls = () => {
  const [cart, refetch] = useCart("allCourses");
  const [loader, setLoader] = useState(true);
  const [clsID, setClsID] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (cart.length == 0) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [cart]);

  const accessDBHandle = (id, itmData, notify) => {
    axiosSecure.put(`/updateValue/${id}`, itmData).then((response) => {
      if (response.data.modifiedCount > 0) {
        toast.success(notify);
        refetch();
      }
    });
  };

  const handleApprove = (id) => {
    const updateStatus = {
      status: "approved",
    };
    accessDBHandle(id, updateStatus, "Course Status Updated");
  };
  const handleDeny = (id) => {
    const updateStatus = {
      status: "denied",
    };
    accessDBHandle(id, updateStatus, "Course Status Updated");
  };

  const onSubmit = (data) => {
    const setFeedback = {
      feedback: data.feedback,
    };
    accessDBHandle(clsID, setFeedback, "Feedback Send");
    reset();
    setClsID(null);
  };

  const handleFeedbackClick = (id) => {
    setClsID(id);
    window.my_modal_5.showModal();
  };

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
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
                    {itm.course_teacher ? (
                      <>
                        <td>
                          <h2 className="font-bold">
                            {itm.course_teacher.name}
                          </h2>
                        </td>
                        <td>
                          <h2 className="font-bold">
                            {itm.course_teacher.email}
                          </h2>
                        </td>
                      </>
                    ) : (
                      <progress className="progress w-56"></progress>
                    )}

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
                          {itm.status === "approved" ? (
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
                            onClick={() => handleApprove(itm._id)}
                            className="btn btn-outline btn-xs btn-success"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleDeny(itm._id)}
                            className="btn btn-outline btn-xs btn-error"
                          >
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
                      <button
                        onClick={() => handleFeedbackClick(itm._id)}
                        className="btn btn-outline btn-xs btn-info"
                      >
                        Feedback
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <dialog id="my_modal_5" className="modal">
              <div method="dialog" className="modal-box">
                <button
                  htmlFor="my-modal-5"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => {
                    document.getElementById("my_modal_5").close();
                  }}
                >
                  ✕
                </button>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-lg font-bold">
                        Send Your Feedback:
                      </span>
                    </label>
                    <textarea
                      placeholder="Your feedback"
                      className="input input-bordered h-24"
                      {...register("feedback", {
                        required: true,
                        minLength: 12,
                      })}
                    ></textarea>
                    {errors.feedback?.type === "required" && (
                      <span className="mt-1 text-red-600">
                        This field is required
                      </span>
                    )}
                    {errors.feedback?.type === "minLength" && (
                      <span className="mt-1 text-red-600">
                        Feedback must be a 12 Characture long
                      </span>
                    )}
                  </div>
                  <div className="form-control m-5 items-end">
                    <button className="btn btn-primary w-fit">Send</button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </>
      )}
    </>
  );
};

export default ManageCls;
