import { Outlet } from "react-router-dom";
import DasHeader from "../base/dashboard/DasHeader";

const Dashboard = () => {
  return (
    <>
      <DasHeader>
        <Outlet />
      </DasHeader>
    </>
  );
};

export default Dashboard;
