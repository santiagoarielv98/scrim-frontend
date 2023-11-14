import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

export const IndexPage = lazy(() => import("../pages/app"));
export const NotFoundPage = lazy(() => import("../pages/404"));

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <Suspense>
          <Outlet />
        </Suspense>
      ),
      children: [{ element: <IndexPage />, index: true }],
    },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
};

export default Router;
