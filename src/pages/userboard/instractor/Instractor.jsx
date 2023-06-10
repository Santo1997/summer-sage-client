import { useContext, useEffect, useState } from "react";
import InstractorData from "./InstreactorData";
import { CourseContext } from "../../../layouts/Main";

const Instractor = () => {
  const courses = useContext(CourseContext);
  const [userImg, setUserImg] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (courses.length == 0) {
      setLoader(true);
    } else {
      fetch(
        `http://localhost:5000/teacher?user=${courses[0].course_teacher.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserImg(data[0].img);
          setLoader(false);
        });
    }
  }, [courses]);

  const restCourses = courses.slice(1, courses.length);

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <div className="card card-side w-3/4 shadow-xl">
            <figure>
              <img src={userImg} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{courses[0].course_teacher.name}</h2>
              <p>
                <span> Email: {courses[0].course_teacher.email}</span>
                <br />
                <span>Name of the Classes: {courses[0].course_name} </span>
                <br />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-5">
            {restCourses.map((course) => (
              <InstractorData course={course} key={course._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Instractor;
