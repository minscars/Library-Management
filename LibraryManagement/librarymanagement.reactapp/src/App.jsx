import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import UserLayout from "layouts/user";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="user/*" element={<UserLayout />} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default App;
