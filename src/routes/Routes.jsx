import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/userboard/home/Home";
import Instractor from "../pages/userboard/instractor/Instractor";
import Courses from "../pages/userboard/courses/Courses";
import Dashboard from "../layouts/Dashboard";
import SelectCls from "../pages/dashboard/student/SelectCls";
import Enrolled from "../pages/dashboard/student/Enrolled";
import AddCls from "../pages/dashboard/instractor/AddCls";
import MyCls from "../pages/dashboard/instractor/MyCls";
import ManageCls from "../pages/dashboard/admin/ManageCls";
import ManageUser from "../pages/dashboard/admin/ManageUser";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "selected_cls",
        element: <SelectCls></SelectCls>,
      },
      {
        path: "enrolled",
        element: <Enrolled></Enrolled>,
      },
      {
        path: "add_cls",
        element: <AddCls></AddCls>,
      },
      {
        path: "my_cls",
        element: <MyCls></MyCls>,
      },
      {
        path: "manage_cls",
        element: <ManageCls></ManageCls>,
      },
      {
        path: "manage_user",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
