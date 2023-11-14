import React from "react";

import Loader from "./Loader";

const Loadable =
  <T extends object>(Component: React.ComponentType<T>) =>
  (props: T) =>
    (
      <React.Suspense fallback={<Loader />}>
        <Component {...props} />
      </React.Suspense>
    );

export default Loadable;
