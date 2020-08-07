import { lazy } from "react";

const Dashboard = lazy(() => import("../modules/dashboard/Dashboard"));
const Requests = lazy(() => import("../modules/requests/Requests"));
var AppRoutes = [
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
    icon: "send",
    component: Dashboard,
  },
  {
    path: "/documents",
    name: "Documents",
    icon: "file",
    component: Dashboard,
  },
  {
    collapse: true,
    path: "/dashboard",
    name: "Admin",
    state: "dashboardpages",
    icon: "lock",
    child: [
      {
        path: "/settings",
        name: "Settings",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Requests,
      },
      {
        path: "/users",
        name: "Users",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Dashboard,
      },
    ],
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true },
];
export default AppRoutes;
