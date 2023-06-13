import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../base/userboard/Header";
import Footer from "../base/userboard/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";

export const CourseContext = createContext([]);

const Main = () => {
  const [theme, setTheme] = useState("light");
  const { courses } = useLoaderData();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <CourseContext.Provider value={courses}>
        <div
          className={`main ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <Header toggleTheme={toggleTheme} />
          <div className="p-6">
            <Outlet />
          </div>
          <Toaster />
          <Footer />
        </div>
      </CourseContext.Provider>
    </>
  );
};

export default Main;
