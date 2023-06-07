import Activelink from "./Activelink";

const Links = () => {
  return (
    <>
      <li className="text-lg">
        <Activelink to="/">Home</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">Instructors</Activelink>
      </li>
      <li className="text-lg" tabIndex={0}>
        <details>
          <summary>Classes</summary>
          <ul className="p-2 ">
            <li className="text-lg">
              <Activelink to="/">Itmes 1</Activelink>
            </li>
            <li className="text-lg">
              <Activelink to="/">Itmes 2</Activelink>
            </li>
          </ul>
        </details>
      </li>
      <li className="text-lg">
        <Activelink to="/blog">Dashboard</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">SignIn</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">SignUp</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/">LogOut</Activelink>
      </li>
    </>
  );
};

export default Links;
