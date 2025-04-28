import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem('Yt');

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
