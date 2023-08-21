import React from "react";

// Admin Imports
import AdminHome from "views/admin/home";
import AdminCategories from "views/admin/categories";

import AdminBooks from "views/admin/books";
import AdminBookCreate from "views/admin/books/create";

import AdminBorrowAndReturn from "views/admin/borrowreturn";
import AdminProfile from "views/admin/profile";
import AdminDataTables from "views/admin/tables";
import AdminDashBoard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

const routes = [
  { layout: "/admin", path: "home", component: <AdminHome />},
  { layout: "/admin", path: "categories", component: <AdminCategories />},
  { layout: "/admin", path: "books", component: <AdminBooks />},
  { layout: "/admin", path: "books/create", component: <AdminBookCreate />},
  { layout: "/admin", path: "borrow-and-return", component: <AdminBorrowAndReturn />},
  { layout: "/admin", path: "data-tables", component: <AdminDataTables />},
  { layout: "/admin", path: "profile", component: <AdminProfile />},
  { layout: "/admin", path: "dashboard", component: <AdminDashBoard />},

  { layout: "/auth", path: "sign-in", component: <SignIn />},
];

export default routes;