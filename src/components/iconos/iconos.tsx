import React from 'react'
import { View } from 'react-native'

import { IconProps } from '../icons/type';
import Svg, { Path } from 'react-native-svg';

import { iconosData } from '../icons/iconos-json/iconosData';
import { nombresIconos } from '../icons/iconos-json/nombresIconos';


type tipadoIconos = keyof typeof nombresIconos

export interface IconosProps extends IconProps {
  nombreIcono: tipadoIconos
};


export const Iconos = ({ color, size, style, nombreIcono }: IconosProps) => {

  const iconosDatos = iconosData ;

  let svg: string = '';

  iconosDatos.iconos.forEach(icono => {

    if(icono.nombreIcono === nombreIcono) {
      svg = icono.d
    }
  });

  return (
    <View >
        <Svg
            style={style}
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMinYMin slice"
            >
            <Path
                fill={color}
                fillRule="evenodd" 
                clipRule="evenodd"
                d={svg}
            />
        </Svg>      
    </View>
  )
}
