import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoDescargar({ color, size }: IconProps) {
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
                d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2922 15.7064C11.2946 15.7088 11.297 15.7112 11.2995 15.7136C11.3938 15.8063 11.502 15.8764 11.6172 15.9241C11.7343 15.9727 11.8625 15.9996 11.997 16C11.998 16 11.999 16 12 16C12.001 16 12.002 16 12.003 16C12.2746 15.9992 12.5208 15.8901 12.7005 15.7136C12.703 15.7112 12.7054 15.7088 12.7078 15.7064L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L13 12.5858V3ZM3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V15C2 14.4477 2.44772 14 3 14Z"
            />
        </Svg>
    );
}

export default IconoDescargar;
