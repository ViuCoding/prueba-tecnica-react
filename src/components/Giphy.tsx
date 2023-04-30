import useFetch from "../hooks/useFetch";

interface GiphyProps {
  catFact: string;
  page: number;
}

export const Giphy: React.FC<GiphyProps> = ({ catFact, page }) => {
  //const { isLoading, cats, error } = useFetch(url);

  let threeWords = catFact.split(" ").slice(0, 3).join(" ");
  let url = `https://api.giphy.com/v1/gifs/search?q=${threeWords}&api_key=Do6ZLGQ9ZZpTv4AJOwCEqrTwbHwQhdFv`;

  const { cats } = useFetch(url, page);

  console.log(cats);

  return (
    <div> {cats && <img src={cats} alt='' style={{ width: "100%" }} />} </div>
  );
};
