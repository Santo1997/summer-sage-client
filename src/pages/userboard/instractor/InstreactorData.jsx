import { useEffect, useState } from "react";

const InstreactorData = ({ course }) => {
  const { course_teacher } = course;
  const [userImg, setUserImg] = useState();

  useEffect(() => {
    fetch(
      `https://assign12-camp-server.vercel.app/teacher?user=${course_teacher.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserImg(data[0].img);
      });
  }, []);

  return (
    <div className="card shadow-xl">
      <figure>
        <img src={userImg} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course_teacher.name}</h2>
        <p>Email: {course_teacher.email}</p>
      </div>
    </div>
  );
};

export default InstreactorData;
