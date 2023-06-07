import { GiTeacher } from "react-icons/gi";
import { AiOutlineRead } from "react-icons/ai";
import { FaDiscourse } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const InfoSection = () => {
  return (
    <>
      <SectionTitle
        heading="Why Us?"
        subHeading="Language Courses to Help You Explore The World"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-3">
        <div className="card-body items-center text-center border-2 border-accent">
          <GiTeacher size={50} className="text-accent" />
          <h1 className="text-2xl">Skilled Teachers</h1>
          <p>
            Each one is a native English speaker and is certified by the New
            York State Education Department
          </p>
        </div>
        <div className="card-body items-center text-center border-2 border-accent">
          <AiOutlineRead size={50} className="text-accent" />
          <h1 className="text-2xl">Affordable Courses</h1>
          <p>
            It is an online learning and teaching school with over great courses
            and many students.
          </p>
        </div>
        <div className="card-body items-center text-center border-2 border-accent">
          <FaDiscourse size={50} className="text-accent" />
          <h1 className="text-2xl">Efficient & Flexible</h1>
          <p>
            Online learning is booming as more universities and businesses
            recognize the benefits it brings to students.
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
