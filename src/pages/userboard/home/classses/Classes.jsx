import SectionTitle from "../../../../components/SectionTitle";
import ClsData from "./ClsData";

const Classes = ({ courses }) => {
  const galItm = courses.slice(0, 6);

  return (
    <>
      <SectionTitle
        heading="Popular Classes"
        subHeading="Our interactive teaching method engages you in the learning process so that you learn
communication skills and develop confidence quickly."
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-3">
        {galItm.map((course) => (
          <ClsData course={course} key={course._id} />
        ))}
      </div>
    </>
  );
};

export default Classes;
