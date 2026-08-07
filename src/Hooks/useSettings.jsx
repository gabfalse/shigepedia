import { useEffect, useState } from "react";
import { getSettings } from "../services/settingService";

export default function useSettings() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    getSettings().then(setSettings);
  }, []);

  return settings;
}