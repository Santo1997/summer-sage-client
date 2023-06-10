import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../base/userboard/Header";
import Footer from "../base/userboard/Footer";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";

export const CourseContext = createContext([]);

const Main = () => {
  const { courses } = useLoaderData();

  return (
    <>
      <CourseContext.Provider value={courses}>
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
        <Toaster />
        <Footer />
      </CourseContext.Provider>
    </>
  );
};

export default Main;
