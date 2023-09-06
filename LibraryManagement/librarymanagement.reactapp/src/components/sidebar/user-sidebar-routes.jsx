import React from "react";

// Admin Imports
import Home from "views/user/home";
import Request from "views/user/request";

// Icon Imports
import {
  MdHome,
} from "react-icons/md";

const routes = [
  {
    name: "Home Page",
    layout: "/user",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Request",
    layout: "/user",
    path: "request",
    icon: <MdHome className="h-6 w-6" />,
    component: <Request />,
  },
];

export default routes;