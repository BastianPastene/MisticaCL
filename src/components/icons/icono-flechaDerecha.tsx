import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoFlechaDerecha({ color, size, style }: IconProps) {
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

                d="M21.707 12.7073L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.586 13.0003H3C2.447 13.0003 2 12.5533 2 12.0003C2 11.4473 2.447 11.0003 3 11.0003H18.586L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.707 11.2933C22.098 11.6842 22.098 12.3163 21.707 12.7073Z"
            />
        </Svg>
    );
}

export default IconoFlechaDerecha;

