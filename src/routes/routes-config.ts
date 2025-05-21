import { lazy } from "react";

const Login = lazy(() => import("../pages/login"));
const DashboardOverview = lazy(
  () => import("../pages/dashboard/dashboard-overview")
);

const DashboardBranches = lazy(() => import("../pages/dashboard/branches"));

export const routeComponents = {
  login: Login,
  dashboard: DashboardOverview,
  branches: DashboardBranches,
} as const;

export const routePaths = {
  login: "/",
  dashboard: "/dashboard",
  branches: "/dashboard/branches",
  roles: "/dashboard/roles",
  users: "/dashboard/users",
  cardScheme: "/dashboard/card-scheme",
  cardProfile: "/dashboard/card-profile",
  cardRequest: "/dashboard/card-request",
  stock: "/dashboard/stock",
  cards: "/dashboard/cards",
  authList: "/dashboard/authorization-list",
  authQueue: "/dashboard/authorization-queue",
  trail: "/dashboard/trail",
  account: "/dashboard/account",
  notFound: "*",
};
