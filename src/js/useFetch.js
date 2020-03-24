import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = url => {
  const [data, updateData] = useState("oo");
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("https://improparis.com/gestion/postulant/AjaxLevelAppreciation.php");
      updateData(resp.data);
    }
    fetchData();
  }, []);
  return data;
};
