import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

import iconosJson from '../icons/iconos-json/iconos.json'
import dataIconos from '../icons/iconos-json/dataIconos.json'

type tipado = keyof typeof dataIconos


export interface iconosProps extends IconProps {
    nombreIcono: tipado
  };

export const IconosDefault = ({ color, size, style, nombreIcono }: iconosProps)=>{

    const iconos: {}[] = [];
    iconos.push(dataIconos);
    
    let svgCodigo = '';

    iconos.forEach(element => {
        console.log(element)
        if (element === nombreIcono) {
            // svgCodigo = element
        }

    });


    return (
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
    );
}

// export default IconosDefault;
