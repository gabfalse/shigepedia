import { Route } from "react-router-dom";

import AboutPage from "../Pages/VisitorPage/About";
import  Home  from "../Pages/VisitorPage/Home";
import JokiMobileLegend from "../Pages/VisitorPage/JokiMobileLegend";



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
        element={<JokiMobileLegend />}
      />
   
      
    </>
  );
};

export default VisitorRoute;

