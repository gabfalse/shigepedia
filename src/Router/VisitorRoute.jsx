import { Route } from "react-router-dom";

import AboutPage from "../Pages/VisitorPage/About";
import  Home  from "../Pages/VisitorPage/Home";

import ProductPage from "../Pages/VisitorPage/ProductPage";



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
        element={<ProductPage />}
      />
   
      
    </>
  );
};

export default VisitorRoute;

