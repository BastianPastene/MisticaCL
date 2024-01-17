import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoCargandoAndroid({ color, size, style }: IconProps) {
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
                d="M24.0005 12C24.0005 18.6274 18.6057 24 11.951 24V22.1053C17.555 22.1053 22.0979 17.581 22.0979 12C22.0979 6.41902 17.555 1.89474 11.951 1.89474C6.85427 1.89474 2.56604 5.6592 1.89469 10.6422L0.0090332 10.3902C0.806709 4.46963 5.89822 0 11.951 0C18.6057 0 24.0005 5.37258 24.0005 12Z"
            />
        </Svg>
    );
}

export default IconoCargandoAndroid;
