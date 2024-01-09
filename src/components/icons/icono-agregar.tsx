import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoAgregar({ color, size }: IconProps) {
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
                d="M13 3.51472C13 2.96243 12.5522 2.51472 12 2.51472C11.4477 2.51472 11 2.96243 11 3.51472L11 11L3.51468 11C2.96239 11 2.51468 11.4477 2.51468 12C2.51468 12.5523 2.96239 13 3.51468 13L11 13L11 20.4853C11 21.0376 11.4477 21.4853 12 21.4853C12.5522 21.4853 13 21.0376 13 20.4853L13 13H20.4852C21.0375 13 21.4852 12.5523 21.4852 12C21.4852 11.4477 21.0375 11 20.4852 11H13L13 3.51472Z"
            />
        </Svg>
    );
}

export default IconoAgregar;
