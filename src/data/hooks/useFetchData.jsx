import { useState, useEffect } from "react";

// Custom hook for fetching data
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetchData;
