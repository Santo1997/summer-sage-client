import { useContext } from "react";
import { CourseContext } from "../../../layouts/Main";
import CourseData from "./CourseData";

const Courses = () => {
  const courses = useContext(CourseContext);

  return (
    <div className="grid grid-cols-4 gap-3">
      {courses.map((course) => (
        <CourseData course={course} key={course._id} />
      ))}
    </div>
  );
};

export default Courses;
