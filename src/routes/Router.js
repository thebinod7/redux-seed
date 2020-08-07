import { lazy } from "react";

const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const Requests = lazy(() => import("../views/requests/Requests"));
var ThemeRoutes = [
  // {
  //   navlabel: true,
  //   name: "Personal",
  //   icon: "mdi mdi-dots-horizontal",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "home",
    component: Dashboard,
  },
  {
    path: "/inbox",
    name: "Request Inbox",
    icon: "inbox",
    component: Requests,
  },
  {
    path: "/outbox",
    name: "Request Sent",
    icon: "inbox",
    component: Dashboard,
  },
  {
    path: "/documents",
    name: "Documents",
    icon: "file",
    component: Dashboard,
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default ThemeRoutes;
