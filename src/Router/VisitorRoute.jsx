import { Route } from "react-router-dom";

import AboutPage from "../Pages/VisitorPage/About";
import JokiPage from "../Pages/VisitorPage/JokiPage";
import  Home  from "../Pages/VisitorPage/Home";



const VisitorRoute = () => {
  return (
    <>
      <Route
        path="/"
        element={<Home />}
      />

      
    <Route
        path="/about"
        element={<AboutPage />}
      />

       <Route
        path="/joki"
        element={<JokiPage />}
      />
   
      
    </>
  );
};

export default VisitorRoute;

