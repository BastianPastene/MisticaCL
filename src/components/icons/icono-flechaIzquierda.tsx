import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoFlechaIzquierda({ color, size }: IconProps) {
    return (
        <Svg
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMinYMin slice">
            <Path
                fill={color}
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.29203 12.707L9.29203 19.707C9.48703 19.902 9.743 20 9.999 20C10.255 20 10.511 19.902 10.706 19.707C11.097 19.316 11.097 18.684 10.706 18.293L5.413 13L20.999 13C21.552 13 21.999 12.553 21.999 12C21.999 11.447 21.552 11 20.999 11L5.413 11L10.706 5.70703C11.097 5.31603 11.097 4.68397 10.706 4.29297C10.315 3.90197 9.68303 3.90197 9.29203 4.29297L2.29203 11.293C1.90103 11.684 1.90103 12.316 2.29203 12.707Z"
            />
        </Svg>
    );
}

export default IconoFlechaIzquierda;
