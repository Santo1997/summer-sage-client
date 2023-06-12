import { useEffect } from "react";
import anime from "animejs";
import DasLinks from "./DasLinks";

const DasHeader = ({ children }) => {
  useEffect(() => {
    anime({
      targets: ".drawer",
      opacity: [0, 1],
      translateY: ["-20px", "0px"],
      duration: 600,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-5">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-5 h-full bg-slate-800 text-white">
          <DasLinks />
        </ul>
      </div>
    </div>
  );
};

export default DasHeader;
