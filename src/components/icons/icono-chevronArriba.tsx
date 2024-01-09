import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoChevronArriba({ color, size }: IconProps) {
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
                d="M21.8497 17.3487C21.3811 17.8174 20.6213 17.8174 20.1526 17.3487L12.0012 9.19725L3.8497 17.3487C3.38107 17.8174 2.62127 17.8174 2.15264 17.3487C1.68401 16.8801 1.68401 16.1203 2.15264 15.6517L11.1526 6.65167C11.6213 6.18304 12.3811 6.18304 12.8497 6.65167L21.8497 15.6517C22.3183 16.1203 22.3183 16.8801 21.8497 17.3487Z"
            />
        </Svg>
    );
}

export default IconoChevronArriba;