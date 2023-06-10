import { useEffect, useState } from "react";

const InstreactorData = ({ course }) => {
  const { course_name, course_teacher } = course;

  const [userImg, setUserImg] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/teacher?user=${course_teacher.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserImg(data[0].img);
      });
  }, []);

  console.log(userImg);

  return (
    <div className="card shadow-xl">
      <figure>
        <img src={userImg} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course_teacher.name}</h2>
        <p>Email: {course_teacher.email}</p>
        <div className="card-actions justify-end">
          <p className="">Name of the Classes: {course_name}</p>
        </div>
      </div>
    </div>
  );
};

export default InstreactorData;
