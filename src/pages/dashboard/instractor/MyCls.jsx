import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyCls = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: userCoursesCart = [] } = useQuery({
    queryKey: ["userCourses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/userCourses?user=${user?.email}`);
      return res.data;
    },
  });

  return (
    <>
      {userCoursesCart.length == 0 ? (
        <h1 className="text-3xl  m-20 text-error">No Available Class</h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Enrolled</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userCoursesCart.map((itm) => (
                <tr key={itm._id}>
                  <th>1</th>
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
                  <td>{itm.student_enroll}</td>
                  <td>{itm.available_seats}</td>
                  <td>
                    $<span>{itm.course_price}</span>
                  </td>
                  <td>
                    {itm.status === "pending" ? (
                      <h2 className="font-bold text-warning">{itm.status}</h2>
                    ) : (
                      <h2 className="font-bold text-success">{itm.status}</h2>
                    )}
                  </td>
                  <td className="text-left">
                    <h2 className="font-bold">{itm.feedback}</h2>
                  </td>
                  <td className="text-center">
                    <Link>
                      <button className="btn btn-xs btn-outline me-3 btn-accent">
                        Update
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

export default MyCls;
