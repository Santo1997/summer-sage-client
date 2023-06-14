import { Outlet, useLocation } from "react-router-dom";
import DasHeader from "../base/dashboard/DasHeader";
import { Toaster } from "react-hot-toast";
import Title from "../components/Title";

const Dashboard = () => {
  const location = useLocation();

  const webTitle = () => {
    const pathData = location.pathname.split("/");
    const pathname = [pathData[0], pathData[1], pathData[2]].join("/");

    if (pathname === "/dashboard") {
      return <Title title="Dashboard" />;
    } else if (pathname === "/dashboard/selected_cls") {
      return <Title title="Selected Classes" />;
    } else if (pathname === "/dashboard/enrolled") {
      return <Title title="Enrolled Classes" />;
    } else if (pathname === "/dashboard/payment") {
      return <Title title="Payment" />;
    } else if (pathname === "/dashboard/add_cls") {
      return <Title title="Add Class" />;
    } else if (pathname === "/dashboard/update_cls") {
      return <Title title="Update Class" />;
    } else if (pathname === "/dashboard/my_cls") {
      return <Title title="My Classes" />;
    } else if (pathname === "/dashboard/manage_cls") {
      return <Title title="Manage Classes" />;
    } else if (pathname === "/dashboard/manage_user") {
      return <Title title="Manage Users" />;
    }
  };
  return (
    <>
      {webTitle()}
      <DasHeader>
        <Outlet />
      </DasHeader>
      <Toaster />
    </>
  );
};

export default Dashboard;
