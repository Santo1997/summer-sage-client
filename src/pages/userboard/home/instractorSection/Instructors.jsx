import SectionTitle from "../../../../components/SectionTitle";
import InstractorData from "./InstractorData";

const Instructors = ({ courses }) => {
  const showCoursesTeacher = courses.slice(0, 6);
  return (
    <>
      <SectionTitle
        heading="Our teachers"
        subHeading="Our teachers are accomplished, creative individuals who know their subjects intimately. What’s more, they care deeply about their students."
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-3">
        {showCoursesTeacher.map((courses) => (
          <InstractorData courses={courses} key={courses._id} />
        ))}
      </div>
    </>
  );
};

export default Instructors;
