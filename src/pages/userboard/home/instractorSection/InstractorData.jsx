const InstractorData = ({ courses }) => {
  const { course_teacher, course_name, student_enroll } = courses;
  return (
    <div className="card shadow-xl overflow-hidden insPrt">
      <img src="{img}" alt="" />
      <div className="card-body insShow">
        <h2 className="card-title">{course_teacher.name}</h2>
        <p>Course Name: {course_name}</p>
        <p>Student Enroll: {student_enroll}</p>
      </div>
    </div>
  );
};

export default InstractorData;
