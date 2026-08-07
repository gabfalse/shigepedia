import { useEffect, useState } from "react";
import { getBenefits } from "../services/benefitService";

export default function useBenefits() {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
   

    async function fetchBenefits() {
      try {
        

        const data = await getBenefits();

      
        setBenefits(data);
      } catch (err) {
        console.error("❌ useBenefits Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBenefits();
  }, []);

  return { benefits, loading };
}