import { useEffect, useState } from "react";

export default function useFetch(URL: string, page: number = 0) {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState(null);
  const [error, setError] = useState("I am error");

  useEffect(() => {
    fetchCat();
  }, [URL, page]);

  async function fetchCat() {
    setIsLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();

      if (res.ok) {
        if (URL.includes("giphy")) {
          setCats(data.data[page].images.original.url);
        } else {
          setCats(data.fact);
        }
      } else {
        throw new Error("FAILED TO FETCH");
      }
    } catch (err: any) {
      console.log(err);
      setError(err);
    }
  }

  return { isLoading, cats, error };
}
