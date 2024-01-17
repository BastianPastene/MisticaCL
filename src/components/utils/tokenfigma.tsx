import {token} from '../skins/constants';
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

