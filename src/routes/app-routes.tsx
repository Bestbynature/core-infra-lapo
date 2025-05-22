import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { PageLoadingSpinner } from "../components";
import { routePaths, routeComponents } from "./routes-config";
import UnprotectedLayout from "../layout.tsx/unprotected-layout";
import ProtectedLayout from "../layout.tsx/protected-layout";
import useModal from "../utils/context/use-modal";
import ModalBox from "../components/modals";

const AppRoutes: React.FC = () => {
  const { isModalOpen } = useModal();

  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      {isModalOpen && <ModalBox />}
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
  {
    path: routePaths.roles,
    element: React.createElement(routeComponents.roles),
  },
  {
    path: routePaths.createRole,
    element: React.createElement(routeComponents.createRole),
  },
  {
    path: routePaths.users,
    element: React.createElement(routeComponents.users),
  },
  {
    path: routePaths.cardScheme,
    element: React.createElement(routeComponents.cardScheme),
  },
  {
    path: routePaths.cardProfile,
    element: React.createElement(routeComponents.cardProfile),
  },
  {
    path: routePaths.createProfile,
    element: React.createElement(routeComponents.createProfile),
  },
  {
    path: routePaths.cardRequest,
    element: React.createElement(routeComponents.cardRequest),
  },
  {
    path: routePaths.requestDetails,
    element: React.createElement(routeComponents.requestDetails),
  },
  {
    path: routePaths.stock,
    element: React.createElement(routeComponents.stock),
  },
  {
    path: routePaths.blockCard,
    element: React.createElement(routeComponents.blockCard),
  },
  {
    path: routePaths.generateReissuePin,
    element: React.createElement(routeComponents.generateReissuePin),
  },
  {
    path: routePaths.complaintsLog,
    element: React.createElement(routeComponents.complaintsLog),
  },
  {
    path: routePaths.complaintsResolve,
    element: React.createElement(routeComponents.complaintsResolve),
  },
  {
    path: routePaths.cards,
    element: React.createElement(routeComponents.cards),
  },
  {
    path: routePaths.authList,
    element: React.createElement(routeComponents.authList),
  },
  {
    path: routePaths.authQueue,
    element: React.createElement(routeComponents.authQueue),
  },
  {
    path: routePaths.trail,
    element: React.createElement(routeComponents.trail),
  },
  {
    path: routePaths.account,
    element: React.createElement(routeComponents.account),
  },
];
