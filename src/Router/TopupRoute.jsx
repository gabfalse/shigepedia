import { Route } from "react-router-dom";

import ShopPage from "../Pages/UserPage/ShopPage";
import MobileLegend from "../Pages/TopupPage/MobileLegend";
import VerificationPage from "../Pages/TopupPage/VerificationPage";

const VisitorRoute = () => {
  return (
    <>
      <Route path="/shop" element={<ShopPage />} />

      <Route
        path="/topup/mobilelegend"
        element={<MobileLegend />}
      />

      {/* 🔥 ONLY THIS ONE (DYNAMIC ROUTE) */}
      <Route
        path="/topup/verification/:invoice"
        element={<VerificationPage />}
      />
    </>
  );
};

export default VisitorRoute;