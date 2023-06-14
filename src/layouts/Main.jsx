import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "../base/userboard/Header";
import Footer from "../base/userboard/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
import Title from "../components/Title";
export const CourseContext = createContext([]);

const Main = () => {
  const [theme, setTheme] = useState("light");
  const courses = useLoaderData();
  const location = useLocation();
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const webTitle = () => {
    if (location.pathname === "/") {
      return <Title title="Home" />;
    } else if (location.pathname === "/instractor") {
      return <Title title="Instractor" />;
    } else if (location.pathname === "/courses") {
      return <Title title="Courses" />;
    } else if (location.pathname === "/login") {
      return <Title title="Login" />;
    } else if (location.pathname === "/signup") {
      return <Title title="Signup" />;
    }
  };

  return (
    <>
      {webTitle()}
      <CourseContext.Provider value={courses}>
        <div
          className={`main ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <Header toggleTheme={toggleTheme} />
          <div className="mt-20 p-1 lg:p-6">
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
