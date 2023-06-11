import { Outlet } from "react-router-dom";
import DasHeader from "../base/dashboard/DasHeader";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <>
      <DasHeader>
        <Outlet />
      </DasHeader>
      <Toaster />
    </>
  );
};

export default Dashboard;
