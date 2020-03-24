import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = url => {
  const [data, updateData] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      console.log("je load les data url: " + url)
      const resp = await axios.get("https://improparis.com/gestion/postulant/AjaxLevelAppreciation.php");

      updateData(resp.data);
    }
    fetchData();
  }, [url]);
  return data;
};
