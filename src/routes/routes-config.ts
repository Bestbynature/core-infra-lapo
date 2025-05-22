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

const DashboardCreateProfile = lazy(
  () => import("../pages/dashboard/create-profile")
);

const DashboardCardRequest = lazy(
  () => import("../pages/dashboard/card-request")
);

const DashboardRequestDetails = lazy(
  () => import("../pages/dashboard/request-details")
);

const DashboardStock = lazy(() => import("../pages/dashboard/stock"));

const DashboardBlockCard = lazy(
  () => import("../pages/dashboard/block-unblock-card")
);

const DashboardGenerateReissuePin = lazy(
  () => import("../pages/dashboard/generate-reissue-pin")
);

const DashboardCards = lazy(() => import("../pages/dashboard/cards"));

const DashboardAuthList = lazy(
  () => import("../pages/dashboard/authorization-list")
);

const DashboardAuthQueue = lazy(
  () => import("../pages/dashboard/authorization-queue")
);

const DashboardTrail = lazy(() => import("../pages/dashboard/trail"));

const DashboardAccount = lazy(() => import("../pages/dashboard/account"));

const DashboardCreateRole = lazy(
  () => import("../pages/dashboard/create-role")
);

export const routeComponents = {
  login: Login,
  dashboard: DashboardOverview,
  branches: DashboardBranches,
  roles: DashboardRoles,
  createRole: DashboardCreateRole,
  users: DashboardUsers,
  cardScheme: DashboardCardScheme,
  cardProfile: DashboardCardProfile,
  createProfile: DashboardCreateProfile,
  cardRequest: DashboardCardRequest,
  requestDetails: DashboardRequestDetails,
  blockCard: DashboardBlockCard,
  generateReissuePin: DashboardGenerateReissuePin,
  stock: DashboardStock,
  cards: DashboardCards,
  authList: DashboardAuthList,
  authQueue: DashboardAuthQueue,
  trail: DashboardTrail,
  account: DashboardAccount,
} as const;

export const routePaths = {
  login: "/",
  dashboard: "/dashboard",
  branches: "/dashboard/branches",
  roles: "/dashboard/roles",
  createRole: "/dashboard/create-role",
  users: "/dashboard/users",
  cardScheme: "/dashboard/card-scheme",
  cardProfile: "/dashboard/card-profile",
  createProfile: "/dashboard/create-profile",
  cardRequest: "/dashboard/card-request",
  requestDetails: "/dashboard/request-details",
  stock: "/dashboard/stock",
  blockCard: "/dashboard/block-unblock-card",
  generateReissuePin: "/dashboard/generate-reissue-pin",
  cards: "/dashboard/cards",
  authList: "/dashboard/authorization-list",
  authQueue: "/dashboard/authorization-queue",
  trail: "/dashboard/trail",
  account: "/dashboard/account",
  notFound: "*",
};
