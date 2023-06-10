import { useEffect, useState } from "react";

const InstractorData = ({ courses }) => {
  const { course_teacher, course_name, student_enroll } = courses;
  const [userImg, setUserImg] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/teacher?user=${course_teacher.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserImg(data[0].img);
      });
  }, []);
  return (
    <div className="card shadow-xl overflow-hidden insPrt">
      <img src={userImg} alt="" />
      <div className="card-body insShow">
        <h2 className="card-title">{course_teacher.name}</h2>
        <p>Course Name: {course_name}</p>
        <p>Student Enroll: {student_enroll}</p>
      </div>
    </div>
  );
};

export default InstractorData;
