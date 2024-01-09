import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoCarritoCompra({ color, size }: IconProps) {
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
                d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H4.18032L5.01195 6.15508C5.01638 6.18353 5.02201 6.21159 5.02879 6.2392L6.69916 14.5848L6.69933 14.5857C6.83664 15.2759 7.21225 15.8959 7.76048 16.3373C8.3062 16.7766 8.98837 17.011 9.68864 17H19.3914C20.0916 17.011 20.7738 16.7766 21.3195 16.3373C21.868 15.8958 22.2437 15.2754 22.3808 14.5848L22.3809 14.5848L22.3823 14.5773L23.9823 6.18733C24.0381 5.89458 23.9605 5.59218 23.7705 5.36256C23.5805 5.13293 23.298 5 23 5H6.82043L5.98055 0.803743C5.88701 0.336385 5.47663 0 5 0H1ZM8.66055 14.1937L7.22073 7H21.7913L20.4185 14.1984C20.3723 14.4273 20.2474 14.6328 20.0654 14.7793C19.8826 14.9265 19.6538 15.0047 19.4192 15.0002L19.4 15H9.68L9.66084 15.0002C9.42619 15.0047 9.19743 14.9265 9.01461 14.7793C8.83179 14.6322 8.70656 14.4254 8.66084 14.1952L8.66055 14.1937ZM7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21ZM18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z"
            />
        </Svg>
    );
}

export default IconoCarritoCompra;
