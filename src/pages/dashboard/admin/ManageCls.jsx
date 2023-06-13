import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import anime from "animejs";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../provider/AuthProvider";

const ManageCls = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [clsID, setClsID] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/allCourses`);
      return res.data;
    },
  });

  useEffect(() => {
    anime({
      targets: ".user-row",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, [classes]);

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
      <div className="overflow-x-auto">
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th className="w-fit">#</th>
                <th className="w-fit">Image</th>
                <th className="w-fit">Class Name</th>
                <th className="w-fit">Instructor Name</th>
                <th className="w-fit">Instructor Email</th>
                <th className="w-fit">Available</th>
                <th className="w-fit">Price</th>
                <th className="w-fit">Status</th>
                <th className="w-fit">Feedback</th>
                <th className="w-fit">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((itm, index) => (
                <tr key={itm._id} className="user-row">
                  <td className="w-fit">{index + 1}</td>
                  <td className="w-fit">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src={itm.course_img} />
                      </div>
                    </div>
                  </td>
                  <td className="w-fit">
                    <h2 className="font-bold">{itm.course_name}</h2>
                  </td>
                  {itm.course_teacher ? (
                    <>
                      <td className="w-fit">
                        <h2 className="font-bold">{itm.course_teacher.name}</h2>
                      </td>
                      <td className="w-fit">
                        <h2 className="font-bold">
                          {itm.course_teacher.email}
                        </h2>
                      </td>
                    </>
                  ) : (
                    <progress className="progress w-56"></progress>
                  )}
                  <td className="w-fit">{itm.available_seats}</td>
                  <td className="w-fit">${itm.course_price}</td>
                  <td className="w-fit">
                    {itm.status === "pending" ? (
                      <h2 className="font-bold text-warning capitalize">
                        {itm.status}
                      </h2>
                    ) : itm.status === "approved" ? (
                      <h2 className="font-bold text-success capitalize">
                        {itm.status}
                      </h2>
                    ) : (
                      <h2 className="font-bold text-error capitalize">
                        {itm.status}
                      </h2>
                    )}
                  </td>
                  <td className="w-fit">{itm.feedback}</td>
                  <td className="grid grid-rows-3 gap-2 w-fit">
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
        </div>
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
                    Feedback must be at least 12 characters long
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
  );
};

export default ManageCls;
