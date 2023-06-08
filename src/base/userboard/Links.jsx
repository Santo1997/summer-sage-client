import Activelink from "../Activelink";

const Links = () => {
  return (
    <>
      <li className="text-lg">
        <Activelink to="/">Home</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/instractor">Instructors</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/courses">Classes</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/dashboard/selected_cls">Dashboard</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/login">SignIn</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/signup">SignUp</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">LogOut</Activelink>
      </li>
    </>
  );
};

export default Links;
