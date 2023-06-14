import { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();
export const TeacherContext = createContext();

const DataProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("https://assign12-camp-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });

    fetch("https://assign12-camp-server.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  }, []);

  return (
    <TeacherContext.Provider value={teachers}>
      <CourseContext.Provider value={courses}>
        {children}
      </CourseContext.Provider>
    </TeacherContext.Provider>
  );
};

export default DataProvider;
