import { useEffect, useState } from "react";
import { SHEETS } from "../constants/sheets";
import { fetchSheet } from "../services/googleSheets";

export default function useTeam() {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchSheet(SHEETS.TEAM);
        setTeam(data[0]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    team,
    loading,
  };
}