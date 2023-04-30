import { useEffect, useState } from "react";

export default function useFetch(URL: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState(null);
  const [error, setError] = useState("I am error");

  useEffect(() => {
    fetchCat();
  }, [URL]);

  async function fetchCat() {
    setIsLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();

      if (res.ok) {
        setCats(data.fact);
      }
    } catch (err) {}
  }

  return { isLoading, cats, error };
}
