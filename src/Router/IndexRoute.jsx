import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import VisitorRoute from "./VisitorRoute";

import HomePage from "../Pages/UserPage/HomePage";
import ProfilePage from "../Pages/UserPage/ProfilePage";
import SupportPage from "../Pages/UserPage/SupportPage"
import LeaderboardPage from "../Pages/UserPage/LeaderboardPage";
import ShopPage from "../Pages/UserPage/ShopPage";


export default function IndexRoute() {

  return (
    <Routes>

      {/* Visitor Routes */}
      {VisitorRoute()}

 

      {/* Protected Routes */}
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
        path="/shop"
        element={
          <ProtectedRoute>
            <ShopPage />
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

    </Routes>
  );
}