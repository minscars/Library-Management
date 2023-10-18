import React from "react";

// Admin Imports
import Home from "views/user/home";
import Request from "views/user/request";
import Books from "views/user/books";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdOutlineMenuBook,
} from "react-icons/md";

const routes = [
  {
    name: "Home",
    layout: "/user",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Request",
    layout: "/user",
    path: "request",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Request />,
  },
  {
    name: "Books",
    layout: "/user",
    path: "books",
    icon: <MdOutlineMenuBook className="h-6 w-6" />,
    component: <Books />,
  },
];

export default routes;