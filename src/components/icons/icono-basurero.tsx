import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoBasurero({ color, size, style }: IconProps) {
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
                d="M9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V5H9V4C9 3.73478 9.10536 3.48043 9.29289 3.29289ZM7 5V4C7 3.20435 7.31607 2.44129 7.87868 1.87868C8.44129 1.31607 9.20435 1 10 1H14C14.7956 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V5H19H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H20V20C20 20.7957 19.6839 21.5587 19.1213 22.1213C18.5587 22.6839 17.7957 23 17 23H7C6.20435 23 5.44129 22.6839 4.87868 22.1213C4.31607 21.5587 4 20.7957 4 20V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H5H7ZM8 7H16H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H7C6.73478 21 6.48043 20.8946 6.29289 20.7071C6.10536 20.5196 6 20.2652 6 20V7H8ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM15 17V11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17Z"
            />
        </Svg>
    );
}

export default IconoBasurero;
