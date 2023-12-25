import React from "react";

// User Imports
import Home from "views/user/home";
import Request from "views/user/request";
import Books from "views/user/books";
import History from "views/user/history";
import Forum from "views/user/forum";
// Icon Imports
import {
  MdHome,
  MdPerson,
  MdOutlineMenuBook,
  MdHistory,
  MdForum,
  MdOutlineLanguage,
  MdDiversity3,
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
    name: "Books",
    layout: "/user",
    path: "books",
    icon: <MdOutlineMenuBook className="h-6 w-6" />,
    component: <Books />,
  },
  {
    name: "Request",
    layout: "/user",
    path: "request",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Request />,
  },
  {
    name: "History",
    layout: "/user",
    path: "history",
    icon: <MdHistory className="h-6 w-6" />,
    component: <History />,
  },
  {
    name: "Forum",
    layout: "/user",
    path: "forum",
    icon: <MdDiversity3 className="h-6 w-6" />,
    component: <Forum />,
  },
];

export default routes;
