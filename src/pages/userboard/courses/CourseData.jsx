import { useContext } from "react";
import { BiSelectMultiple } from "react-icons/bi";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { postToDB } from "../../../utilities/apiFetch";
import useCart from "../../../hooks/useCart";

const CourseData = ({ course }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    _id,
    course_name,
    course_img,
    course_teacher,
    course_price,
    student_enroll,
    available_seats,
  } = course;

  const handleCart = (itm) => {
    itm;
    if (user && user.email) {
      const cartItm = {
        langId: _id,
        user: user.email,
        course_name,
        course_img,
        course_price,
        student_enroll,
        available_seats,
      };
      postToDB("cart", cartItm, "Language", refetch);
    } else {
      console.log("first");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <>
      <div
        className="card card-compact shadow-xl"
        style={{
          backgroundColor: available_seats === 0 && "red",
        }}
      >
        <figure>
          <img src={course_img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>
            <span className="font-bold">Instructor: {course_teacher.name}</span>
            <br />
            <span>Student Enroll: {student_enroll}</span>
            <br />
            <span>Available seats: {available_seats}</span>
            <br />
            <span>Price: ${course_price}</span>
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleCart(course)}
              disabled={available_seats === 0}
              className="btn btn-sm btn-accent text-white"
            >
              <BiSelectMultiple /> Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseData;
