import { useEffect, useState } from "react";
import { getFaq } from "../services/faqService";

export default function useFAQ() {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaq()
      .then(setFaq)
      .finally(() => setLoading(false));
  }, []);

  return { faq, loading };
}