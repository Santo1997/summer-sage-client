import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/userboard/home/Home";
import Instractor from "../pages/userboard/instractor/Instractor";
import Courses from "../pages/userboard/courses/Courses";
import Dashboard from "../layouts/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instractor",
        element: <Instractor></Instractor>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home></Home>,
    //   },
    //   {
    //     path: "/instractor",
    //     element: <Instractor></Instractor>,
    //   },
    //   {
    //     path: "/courses",
    //     element: <Courses></Courses>,
    //   },
    // ],
  },
]);

export default router;
