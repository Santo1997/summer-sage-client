import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Instractor from "../pages/instractor/Instractor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instractor",
        element: <Instractor></Instractor>,
      },
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
