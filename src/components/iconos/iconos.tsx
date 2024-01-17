import React from 'react'
import { View } from 'react-native'

import iconosJson from '../icons/iconos-json/iconos.json'
import dataIconos from '../icons/iconos-json/dataIconos.json'
import { IconProps } from '../icons/type';
import Svg, { Path } from 'react-native-svg';
import { IconosDefault } from '../icons/iconosDefault';


type tipado = keyof typeof dataIconos

export interface iconosProps extends IconProps {
  nombreIcono: tipado
};


export const Iconos = ({ color, size, style, nombreIcono }: iconosProps) => {

  const iconos: [] = [];
  iconos.push(dataIconos as never);
  // console.log(iconos)

  let svgCodigo = '';
  // console.log(nombreIcono)
  const nombresIconos : string[] = []
  iconos.forEach(element => {
    console.log("elementos: ", element)
      if (element) {
          nombresIconos.push(element);
      }

      nombresIconos.forEach(element => {
        // console.log("elementosssss: ", element.IconoAgregar)

      });

  });

  console.log("nombres: ", nombresIconos)

  nombresIconos.forEach(element => {
    
  });

  return (
    <View >
      {/* <IconosDefault nombreIcono={nombreIcono}/> */}
        <Svg
            style={style}
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMinYMin slice">
            <Path
                fill={color}
                d=""
            />
        </Svg>      
    </View>
  )
}
