import Papa from "papaparse";

export function fetchSheet(url) {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: ({ data }) => resolve(data),

      error: reject,
    });
  });
}