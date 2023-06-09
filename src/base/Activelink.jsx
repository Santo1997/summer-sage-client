import { NavLink } from "react-router-dom";

const Activelink = ({ to, children }) => {
  const isExternalLink = to === "/dashboard/selected_cls";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "btn-outline btn-md btn-info" : "btn-md"
      }
      target={isExternalLink ? "_blank" : undefined}
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
