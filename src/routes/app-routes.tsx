import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { PageLoadingSpinner } from "../components";
import { routePaths, routeComponents } from "./routes-config";
import UnprotectedLayout from "../layout.tsx/unprotected-layout";
import ProtectedLayout from "../layout.tsx/protected-layout";

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Routes>
        <Route path={routePaths.login} element={<UnprotectedLayout />}>
          <Route index element={React.createElement(routeComponents.login)} />
        </Route>
        <Route path={routePaths.dashboard} element={<ProtectedLayout />}>
          <Route
            index
            element={React.createElement(routeComponents.dashboard)}
          />
          {pathElements.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

const pathElements = [
  {
    path: routePaths.branches,
    element: React.createElement(routeComponents.branches),
  },
];
