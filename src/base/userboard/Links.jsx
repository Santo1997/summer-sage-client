import { useContext } from "react";
import Activelink from "../Activelink";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const from = "/";
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      {user ? (
        <>
          <li className="text-lg">
            <Activelink to="/dashboard/selected_cls" target="_blank">
              Dashboard
            </Activelink>
          </li>
          <li className="text-lg">
            <button className="btn-md" onClick={handleLogOut}>
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="text-lg">
            <Activelink to="/login">Login</Activelink>
          </li>
          <li className="text-lg">
            <Activelink to="/signup">SignUp</Activelink>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
