import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import anime from "animejs";

const Enrolled = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolled = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/userpayments?user=${user.email}`);
      return res.data;
    },
  });

  console.log(enrolled);

  useEffect(() => {
    anime({
      targets: ".user-row",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, [enrolled]);

  console.log(enrolled);

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Course</th>
            <th>Course Name</th>
            <th>User</th>
            <th>Enrollment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((itm, index) => (
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
              <td>{itm.user}</td>
              <td>{itm.enroll}</td>
              <td>{itm.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enrolled;
