import { useContext } from "react";
import { CourseContext } from "../../../layouts/Main";
import CourseData from "./CourseData";
import useCart from "../../../hooks/useCart";

const Courses = () => {
  const courses = useContext(CourseContext);
  const [cart] = useCart();
  cart.map((ids) => console.log(ids.langId));

  return (
    <div className="grid grid-cols-4 gap-3">
      <p>{cart.length}</p>
      {courses.map((course) => (
        <CourseData course={course} key={course._id} />
      ))}
    </div>
  );
};

export default Courses;
