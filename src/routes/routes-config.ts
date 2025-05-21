import { lazy } from "react";

const Login = lazy(() => import("../pages/login"));
const DashboardOverview = lazy(
  () => import("../pages/dashboard/dashboard-overview")
);

const DashboardBranches = lazy(() => import("../pages/dashboard/branches"));

const DashboardRoles = lazy(() => import("../pages/dashboard/roles"));

const DashboardUsers = lazy(() => import("../pages/dashboard/users"));

const DashboardCardScheme = lazy(
  () => import("../pages/dashboard/card-scheme")
);

const DashboardCardProfile = lazy(
  () => import("../pages/dashboard/card-profile")
);

const DashboardCardRequest = lazy(
  () => import("../pages/dashboard/card-request")
);

const DashboardStock = lazy(() => import("../pages/dashboard/stock"));

const DashboardBlockCard = lazy(
  () => import("../pages/dashboard/block-unblock-card")
);

export const routeComponents = {
  login: Login,
  dashboard: DashboardOverview,
  branches: DashboardBranches,
  roles: DashboardRoles,
  users: DashboardUsers,
  cardScheme: DashboardCardScheme,
  cardProfile: DashboardCardProfile,
  cardRequest: DashboardCardRequest,
  blockCard: DashboardBlockCard,
  stock: DashboardStock,
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
  blockCard: "/dashboard/block-unblock-card",
  cards: "/dashboard/cards",
  authList: "/dashboard/authorization-list",
  authQueue: "/dashboard/authorization-queue",
  trail: "/dashboard/trail",
  account: "/dashboard/account",
  notFound: "*",
};
