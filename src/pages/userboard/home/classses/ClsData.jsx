import { AiOutlineShoppingCart } from "react-icons/ai";

const ClsData = ({ course }) => {
  const {
    course_name,
    course_img,
    course_price,
    description,
    student_enroll,
    available_seats,
  } = course;

  return (
    <div className="card card-compact shadow-xl mainHov">
      <figure>
        <img src={course_img} className="h-58 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course_name}</h2>
        <h2 className="card-title"></h2>
        <p>{description}</p>
        <p>Enrolled: {student_enroll}</p>
        <p>Available: {available_seats}</p>
        <p>Price:$ {course_price}</p>
      </div>
      <div className="card-actions justify-end m-3">
        <button className="btn btn-md  btn-accent text-white">
          <AiOutlineShoppingCart /> Add Cart
        </button>
      </div>
    </div>
  );
};

export default ClsData;
