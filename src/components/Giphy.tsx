import React from "react";
import useFetch from "../hooks/useFetch";

interface GiphyProps {
  catFact: string;
}

export const Giphy: React.FC<GiphyProps> = ({ catFact }) => {
  //const { isLoading, cats, error } = useFetch(url);

  let lmao = catFact.split(" ").slice(0, 3).join(" ");

  return <>{lmao}</>;
};
