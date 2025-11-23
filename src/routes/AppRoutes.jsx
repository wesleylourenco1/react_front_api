import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

// Componente para proteger rotas
const ProtectedRoute = ({ children }) => {
  const { userToken } = useContext(AuthContext);
  return userToken ? children : <Navigate to="/" replace />;
};

// Componente para rotas públicas (como login)
const PublicRoute = ({ children }) => {
  const { userToken } = useContext(AuthContext);
  return !userToken ? children : <Navigate to="/home" replace />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />

      {/* Rota protegida */}
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

      {/* Outras rotas protegidas podem ser adicionadas assim */}
      {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
      {/* <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} /> */}

      {/* Redirecionamento para "/" caso a rota não exista */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
