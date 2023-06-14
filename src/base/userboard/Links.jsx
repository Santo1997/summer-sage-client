import { useContext, useEffect, useState } from "react";
import Activelink from "../Activelink";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Links = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAuthor, setIsAuthor] = useState("student");

  useEffect(() => {
    if (user) {
      axios
        .get(`https://assign12-camp-server.vercel.app/checkRole/${user.email}`)
        .then((response) => {
          setIsAuthor(response.data.role);
        });
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
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
          <>
            {isAuthor === "admin" ? (
              <li className="text-lg">
                <Activelink to="/dashboard/admin_home">Dashboard</Activelink>
              </li>
            ) : isAuthor === "instractor" ? (
              <li className="text-lg">
                <Activelink to="/dashboard/instractor_home">
                  Dashboard
                </Activelink>
              </li>
            ) : isAuthor === "student" ? (
              <li className="text-lg">
                <Activelink to="/dashboard/student_home">Dashboard</Activelink>
              </li>
            ) : null}
          </>
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
