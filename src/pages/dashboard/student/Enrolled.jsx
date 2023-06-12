import useCart from "../../../hooks/useCart";
import { useEffect } from "react";
import anime from "animejs";

const Enrolled = () => {
  const [cart] = useCart("allDayments");

  useEffect(() => {
    animateTableRows();
  }, [cart]);

  const animateTableRows = () => {
    anime({
      targets: ".table-row",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 3000,
      delay: anime.stagger(100),
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Course</th>
            <th>Course Name</th>
            <th>Enrollment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((itm, index) => (
            <tr key={itm._id} className="table-row">
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
                <span>{itm.enroll}</span>
              </td>
              <td>
                <span>{itm.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enrolled;
