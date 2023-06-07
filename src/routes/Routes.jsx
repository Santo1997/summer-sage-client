import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      // {
      //   path: "menu",
      //   element: <Menu></Menu>,
      // },
      // {
      //   path: "order/:category",
      //   element: <Order></Order>,
      // },
      // {
      //   path: "login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "signup",
      //   element: <SignUp></SignUp>,
      // },
      // {
      //   path: "secret",
      //   element: (
      //     <PrivateRoute>
      //       <Secret></Secret>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default router;
