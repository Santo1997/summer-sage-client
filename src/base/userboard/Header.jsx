import { useContext } from "react";
import Links from "./Links";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="navbar bg-slate-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-slate-800 text-white"
            >
              <Links></Links>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl">Summer Camp</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-slate-800">
            <Links></Links>
          </ul>
        </div>
        {user && (
          <>
            <div className="navbar-end me-5">
              <div className="flex items-center gap-4">
                <p>{user.displayName}</p>
                <div className="avatar relative ">
                  <div className="w-10 rounded-full overflow-hidden">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
