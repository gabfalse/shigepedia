import { Route } from "react-router-dom";
import LandingPage from "../Pages/VisitorPage/LandingPage";
import LoginPage from "../Pages/VisitorPage/LoginPage";
import RegisterPage from "../Pages/VisitorPage/RegisterPage";



const VisitorRoute = () => {
  return (
    <>
      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />
     
      
    </>
  );
};

export default VisitorRoute;

