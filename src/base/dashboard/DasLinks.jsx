import { BiSelectMultiple } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";

import Activelink from "../Activelink";

const DasLinks = () => {
  return (
    <>
      <li className="text-lg">
        <Activelink to="selected_cls">
          <BiSelectMultiple /> Selected Classes
        </Activelink>
      </li>
      <li className="text-lg ">
        <Activelink to="/">
          <VscServerProcess /> Enrolled Classes
        </Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">
          <MdPayment /> Payment
        </Activelink>
      </li>
    </>
  );
};

export default DasLinks;
