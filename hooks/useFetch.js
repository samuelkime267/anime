import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [url, setUrl] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!isInView || url.length < 0 || fetchData.length > 0) return;

    setIsLoading(true);
    const getData = async function (url) {
      try {
        const data = url.map(async ({ title, link }) => {
          try {
            const { data } = await axios(link);
            return { title, data };
          } catch (error) {
            console.log(error);
          }
        });
        const response = await axios.all(data);
        setFetchData(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => getData(url), 1100);
  }, [url, isInView, fetchData]);

  return [isLoading, fetchData, setIsInView, setUrl];
};

export default useFetch;
