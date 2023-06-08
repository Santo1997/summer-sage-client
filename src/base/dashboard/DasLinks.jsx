import { AiFillDashboard } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

import Activelink from "../Activelink";

const DasLinks = () => {
  return (
    <>
      <h3 className="text-xl flex items-center gap-1 mb-2">
        <AiFillDashboard /> DashBoard
      </h3>
      <li className="text-lg">
        <Activelink to="selected_cls">
          <BiSelectMultiple /> Selected Classes
        </Activelink>
      </li>
      <li className="text-lg ">
        <Activelink to="enrolled">
          <VscServerProcess /> Enrolled Classes
        </Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">
          <MdPayment /> Payment
        </Activelink>
      </li>
      <h3 className="text-xl flex items-center gap-1 mb-2">
        <FaChalkboardTeacher /> Instructor Dashboard
      </h3>
      <li className="text-lg">
        <Activelink to="Add_cls">
          <BiSelectMultiple /> Add a Class
        </Activelink>
      </li>
      <li className="text-lg ">
        <Activelink to="my_cls">
          <VscServerProcess /> My Classes
        </Activelink>
      </li>
    </>
  );
};

export default DasLinks;
