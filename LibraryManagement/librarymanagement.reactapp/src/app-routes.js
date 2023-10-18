import React from "react";

// Admin Imports
import AdminHome from "views/admin/home";
import AdminCategories from "views/admin/categories";
import AdminCategoriesCreate from "views/admin/categories/create";
import AdminCategoriesEdit from "views/admin/categories/edit";
import AdminCategoriesDelete from "views/admin/categories/delete";

import AdminBooks from "views/admin/books";
import AdminBookCreate from "views/admin/books/create";
import AdminBookEdit from "views/admin/books/edit";
import AdminBookDelete from "views/admin/books/delete";

import AdminBorrowAndReturn from "views/admin/borrowreturn";
import AdminProfile from "views/admin/profile";
import AdminDataTables from "views/admin/tables";
import AdminDashBoard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

//User Imports
import UserHome from "views/user/home";
import UserRequest from "views/user/request";
import UserBooks from "views/user/books";
import UserBooksByCate from "views/user/books/bookbycate";
import UserBooksDetail from "views/user/books/detail";


const routes = [
  { layout: "/admin", path: "home", component: <AdminHome />},
  
  { layout: "/admin", path: "categories", component: <AdminCategories />},
  { layout: "/admin", path: "categories/create", component: <AdminCategoriesCreate />},
  { layout: "/admin", path: "categories/edit/:id", component: <AdminCategoriesEdit />},
  { layout: "/admin", path: "categories/delete/:id", component: <AdminCategoriesDelete />},

  { layout: "/admin", path: "books", component: <AdminBooks />},
  { layout: "/admin", path: "books/create", component: <AdminBookCreate />},
  { layout: "/admin", path: "books/edit/:id", component: <AdminBookEdit />},
  { layout: "/admin", path: "books/delete/:id", component: <AdminBookDelete />},

  { layout: "/admin", path: "borrow-and-return", component: <AdminBorrowAndReturn />},
  { layout: "/admin", path: "data-tables", component: <AdminDataTables />},
  { layout: "/admin", path: "profile", component: <AdminProfile />},
  { layout: "/admin", path: "dashboard", component: <AdminDashBoard />},

  { layout: "/auth", path: "sign-in", component: <SignIn />},

  { layout: "/user", path: "home", component: <UserHome />},
  { layout: "/user", path: "request", component: <UserRequest />},
  { layout: "/user", path: "books", component: <UserBooks />},
  { layout: "/user", path: "books/bookbycate/:id", component: <UserBooksByCate />},
  { layout: "/user", path: "books/detail/:id", component: <UserBooksDetail />},
];

export default routes;