import { Route } from "react-router-dom";
import LandingPage from "../Pages/VisitorPage/LandingPage";
import LoginPage from "../Pages/VisitorPage/LoginPage";
import RegisterPage from "../Pages/VisitorPage/RegisterPage";
import AboutPage from "../Pages/VisitorPage/About";



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
    <Route
        path="/about"
        element={<AboutPage />}
      />
   
      
    </>
  );
};

export default VisitorRoute;

