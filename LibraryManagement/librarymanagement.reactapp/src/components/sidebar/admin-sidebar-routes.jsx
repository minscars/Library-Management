import React from "react";

// Admin Imports
import Home from "views/admin/home";
import Categories from "views/admin/categories";
import Books from "views/admin/books";
import BorrowAndReturn from "views/admin/borrowreturn";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import DashBoard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
  MdOutlineMenuBook,
} from "react-icons/md";

const routes = [
  {
    name: "Home Page",
    layout: "/admin",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Category Management",
    layout: "/admin",
    path: "categories",
    icon: <MdHome className="h-6 w-6" />,
    component: <Categories />,
  },
  {
    name: "Book Management",
    layout: "/admin",
    path: "books",
    icon: <MdOutlineMenuBook className="h-6 w-6" />,
    component: <Books />,
  },
  {
    name: "Borrowing - Returning",
    layout: "/admin",
    path: "borrow-and-return",
    icon: <MdHome className="h-6 w-6" />,
    component: <BorrowAndReturn />,
  },
  {
    name: "Data table",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdPerson className="h-6 w-6" />,
    component: <DashBoard />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];

export default routes;