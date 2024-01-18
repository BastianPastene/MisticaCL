import {token} from '../components/skins/constants';
export const tokenfigma = () => {
  const getData = async () => {
    try {
      const response = await fetch(token);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getData
  }
};

export const getColores = async() => {
  const jsonToken = await tokenfigma().getData();
  const colores = jsonToken.Color;
  const tipografia = jsonToken['Tipografía App'];
  return {
    colores,
    tipografia
  };
};
