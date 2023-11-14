import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);

  const handleFetchData = useRef({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);

  handleFetchData.current = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setData(() => res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMessage(`the error happened ${error}`);
    }
  };

  useEffect(() => {
    console.log("🚀 ~ file: HackNews.js:58 ~ useEffect ~ url:", url);
    handleFetchData.current();
  }, [url]);

  return { data, isLoading, errorMessage, setUrl };
}
