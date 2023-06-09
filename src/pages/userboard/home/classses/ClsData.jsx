const ClsData = ({ course }) => {
  const {
    course_name,
    course_img,
    course_price,
    description,
    students_enrolled,
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
        <p>Enrolled: {students_enrolled}</p>
        <p>Available: {available_seats}</p>
        <p>Price:$ {course_price}</p>
      </div>
      <button className="btn btn-accent">Buy Now</button>
    </div>
  );
};

export default ClsData;
