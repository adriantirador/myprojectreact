import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import SidePanel from '../features/sidePanel/SidePanel';
import { useSelector } from 'react-redux';
import Header from './Header';
import './App.css';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <Router>
      <Header />
      <div style={{ paddingTop: 64 }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <div className="main-layout">
                  <SidePanel />
                  <DashboardPage />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/*"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
