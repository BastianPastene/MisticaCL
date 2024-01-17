import { useEffect, useState } from "react";
import { token } from "../components/skins/constants";

export const tokenfigma = () => {
    const [colores, setColores] = useState([]);
    
    useEffect(() => {
      getData();
    }, []);
    
    const getData = async () => {
      try {
        const response = await fetch(token);
        const result = await response.json();
        setColores(result);
        return result;
      } catch (error) {
        console.log(error);
      }
    };
    return {
      colores
    }
  };