import { useEffect, useState } from "react";
import { getPriceRules } from "../Services/PriceRules";

export default function usePriceRules() {
  const [priceRules, setPriceRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPriceRules() {
      try {
        console.log("🔄 Fetching price rules...");

        const data = await getPriceRules();

        console.log("💰 Price Rules:", data);

        setPriceRules(data ?? []);
      } catch (err) {
        console.error("❌ usePriceRules:", err);

        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPriceRules();
  }, []);

  return {
    priceRules,
    loading,
    error,
  };
}