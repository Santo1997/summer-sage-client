import { useContext, useEffect, useState } from "react";
import { BiSelectMultiple } from "react-icons/bi";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const CourseData = ({ course }) => {
  const { user } = useContext(AuthContext);
  const [isAuthor, setIsAuthor] = useState("student");
  const [axiosSecure] = useAxiosSecure();
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

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/checkRole/${user.email}`)
        .then((response) => {
          setIsAuthor(response.data.role);
        });
    }
  }, [user, course]);

  const { refetch, data: clsID = [] } = useQuery(
    ["carts", user?.email],
    async () => {
      const response = await axios.get(
        `http://localhost:5000/carts?user=${user?.email}`
      );
      return response.data.map((course) => course.langId);
    }
  );

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

      axiosSecure.post("/cart", cartItm).then((response) => {
        if (response.data.insertedId) {
          refetch();
          toast.success("Course Added");
        }
      });
    } else {
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
              disabled={
                clsID.includes(_id) ||
                available_seats === 0 ||
                isAuthor === "instractor" ||
                isAuthor === "admin"
              }
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
