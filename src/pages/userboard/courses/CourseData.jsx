import { AiOutlineShoppingCart } from "react-icons/ai";

const CourseData = ({ course }) => {
  const {
    course_name,
    course_img,
    course_price,
    student_enroll,
    available_seats,
  } = course;

  return (
    <>
      <div className="card card-compact shadow-xl">
        <figure>
          <img src={course_img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>
            <span>Instructor name</span>
            <br />
            <span>Student Enroll: {student_enroll}</span>
            <br />
            <span>Available seats: {available_seats}</span>
            <br />
            <span>Price: ${course_price}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-accent text-white">
              <AiOutlineShoppingCart /> Add Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseData;
