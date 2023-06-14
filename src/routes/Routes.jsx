import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/userboard/home/Home";
import Instractor from "../pages/userboard/instractor/Instractor";
import Courses from "../pages/userboard/courses/Courses";
import Dashboard from "../layouts/Dashboard";
import SelectCls from "../pages/dashboard/student/SelectCls";
import Enrolled from "../pages/dashboard/student/Enrolled";
import AddCls from "../pages/dashboard/instractor/AddCls";
import UpdateCls from "../pages/dashboard/instractor/UpdateCls";
import MyCls from "../pages/dashboard/instractor/MyCls";
import ManageCls from "../pages/dashboard/admin/ManageCls";
import ManageUser from "../pages/dashboard/admin/ManageUser";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/error/Error";
import { coursesAndTeachers } from "../loader/DataLoader";
import StudentRoutes from "./StudentRoutes";
import InstractorRoutes from "./InstractorRoutes";
import AdminRoutes from "./AdminRoutes";
import Payment from "../pages/dashboard/student/payment/Payment";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import InstractorHome from "../pages/dashboard/instractor/InstractorHome";
import StudentHome from "../pages/dashboard/student/StudentHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    loader: coursesAndTeachers,
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
    errorElement: <Error />,
    children: [
      {
        path: "student_home",
        element: (
          <StudentRoutes>
            <StudentHome />
          </StudentRoutes>
        ),
      },
      {
        path: "selected_cls",
        element: (
          <StudentRoutes>
            <SelectCls />
          </StudentRoutes>
        ),
      },
      {
        path: "enrolled",
        element: (
          <StudentRoutes>
            <Enrolled />
          </StudentRoutes>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoutes>
            <Payment />
          </StudentRoutes>
        ),
      },
      {
        path: "instractor_home",
        element: (
          <InstractorRoutes>
            <InstractorHome />
          </InstractorRoutes>
        ),
      },
      {
        path: "add_cls",
        element: (
          <InstractorRoutes>
            <AddCls />
          </InstractorRoutes>
        ),
      },
      {
        path: "update_cls/:id",
        element: (
          <InstractorRoutes>
            <UpdateCls />
          </InstractorRoutes>
        ),
      },
      {
        path: "my_cls",
        element: (
          <InstractorRoutes>
            <MyCls />
          </InstractorRoutes>
        ),
      },
      {
        path: "admin_home",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "manage_cls",
        element: (
          <AdminRoutes>
            <ManageCls />
          </AdminRoutes>
        ),
      },
      {
        path: "manage_user",
        element: (
          <AdminRoutes>
            <ManageUser />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
