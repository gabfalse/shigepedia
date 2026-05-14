import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import VisitorRoute from "./VisitorRoute";

import HomePage from "../Pages/UserPage/HomePage";
import ProfilePage from "../Pages/UserPage/ProfilePage";
import SupportPage from "../Pages/UserPage/SupportPage"


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

    </Routes>
  );
}