import { AiFillDashboard } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

import Activelink from "../Activelink";
import useAuthor from "../../hooks/useAuthor";

const DasLinks = () => {
  const [isAuthor] = useAuthor();

  return (
    <>
      {isAuthor === "admin" && (
        <>
          <h3 className="text-xl flex items-center gap-1 mb-2">
            <FaChalkboardTeacher /> Admin Dashboard
          </h3>
          <li className="text-lg">
            <Activelink to="manage_cls">
              <BiSelectMultiple /> Manage Class
            </Activelink>
          </li>
          <li className="text-lg ">
            <Activelink to="manage_user">
              <VscServerProcess /> Manage Users
            </Activelink>
          </li>
        </>
      )}

      {isAuthor === "instractor" && (
        <>
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
      )}

      {isAuthor === "student" && (
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
            <Activelink to={`payment/${null}`}>
              <MdPayment /> Payment
            </Activelink>
          </li>
        </>
      )}
      <div className="border border-green-500 w-full my-8"></div>
      <li className="text-lg">
        <Activelink to="/">Home</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/instractor">Instructors</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/courses">Classes</Activelink>
      </li>
    </>
  );
};

export default DasLinks;
