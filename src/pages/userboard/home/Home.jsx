import Slider from "./Slider";
import Classes from "./classses/Classes";
import InfoSection from "./InfoSection";
import Instructors from "./instractorSection/Instructors";
import Extra from "./Extra";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../../layouts/Main";

const Home = () => {
  const courses = useContext(CourseContext);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (courses.length == 0) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [courses]);

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          <Slider />
          <Classes courses={courses} />
          <InfoSection />
          <Instructors courses={courses} />
          <Extra />
        </>
      )}
    </>
  );
};

export default Home;
