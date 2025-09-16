import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginPage from '../features/auth/LoginPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import CreateUser from '../features/user/CreateUser';
import SidePanel from '../features/sidePanel/SidePanel';
import Header from './Header';

import './App.css';

// Replace 'any' with your actual RootState type
const useAuth = () => useSelector((state: any) => state.auth.isLoggedIn);

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <>{element}</> : <Navigate to="/login" replace />;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="main-layout">
    <SidePanel />
    {children}
  </div>
);

const App: React.FC = () => {
  const isLoggedIn = useAuth();

  return (
    <Router>
      <Header />
      <div style={{ paddingTop: 64 }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute element={<Layout><DashboardPage /></Layout>} />
            }
          />
          <Route
            path="/create-user"
            element={
              <ProtectedRoute element={<Layout><CreateUser /></Layout>} />
            }
          />
          <Route
            path="/*"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
