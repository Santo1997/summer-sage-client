import { Outlet } from "react-router-dom";
// import Header from "../base/Header";
// import Footer from "../base/Footer";

const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
