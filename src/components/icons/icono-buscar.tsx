import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoBuscar({ color, size, style }: IconProps) {
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
                d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8863 17.2539 14.5984 16.0406 15.8572C16.0068 15.8833 15.9743 15.9118 15.9433 15.9428C15.9123 15.9738 15.8837 16.0064 15.8576 16.0402C14.5988 17.2537 12.8866 18 11 18C7.13401 18 4 14.866 4 11ZM16.618 18.0317C15.0782 19.2634 13.1251 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.1249 19.2636 15.0778 18.0321 16.6174L21.7075 20.2928C22.098 20.6833 22.098 21.3165 21.7075 21.707C21.317 22.0975 20.6838 22.0975 20.2933 21.707L16.618 18.0317Z"
            />
        </Svg>
    );
}

export default IconoBuscar;
