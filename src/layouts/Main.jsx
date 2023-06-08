import { Outlet } from "react-router-dom";
// import Header from "../base/Header";
// import Footer from "../base/Footer";

const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="p-6">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
