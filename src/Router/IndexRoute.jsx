import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

import VisitorRoute from "./VisitorRoute";
import TopupRoute from "./TopupRoute";

import HomePage from "../Pages/UserPage/HomePage";
import ProfilePage from "../Pages/UserPage/ProfilePage";
import SupportPage from "../Pages/UserPage/SupportPage";
import LeaderboardPage from "../Pages/UserPage/LeaderboardPage";

import InteractiveLivePage from "../Pages/Live/InteractivLivePage";

// ADMIN PAGE
import AdminVerification from "../Pages/AdminPage/AdminVerification";

export default function IndexRoute() {
  return (
    <Routes>

      {/* =========================
          PUBLIC / VISITOR ROUTES
      ========================= */}
      {VisitorRoute()}
      {TopupRoute()}

      {/* =========================
          USER PROTECTED ROUTES
      ========================= */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/support"
        element={
          <ProtectedRoute>
            <SupportPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <ProtectedRoute>
            <LeaderboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/live"
        element={
          <ProtectedRoute>
            <InteractiveLivePage />
          </ProtectedRoute>
        }
      />

      {/* =========================
          ADMIN ROUTES
      ========================= */}
      <Route
        path="/admin/payments"
        element={
          <AdminRoute>
            <AdminVerification />
          </AdminRoute>
        }
      />

    </Routes>
  );
}