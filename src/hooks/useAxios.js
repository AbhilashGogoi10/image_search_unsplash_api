import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (apiParam) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
 


  axios.defaults.baseURL = "https://api.unsplash.com";
  const product_per_page = 100;

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      console.log(res);
      setResponse(res?.data?.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`https://api.unsplash.com/search/photos?page=1&per_page=${product_per_page}&query=${apiParam}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  }, [apiParam]);

  

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
   
    
  };
};

export default useAxios;
