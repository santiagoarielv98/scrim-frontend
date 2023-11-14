import React from "react";
import type { RouteObject } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

export const IndexPage = React.lazy(() => import("../pages/app"));

const MainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <IndexPage />,
    },
  ],
};
export default MainRoutes;
