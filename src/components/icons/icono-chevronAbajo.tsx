import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoChevronAbajo({ color, size }: IconProps) {
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
                d="M2.15225 6.65176C2.62088 6.18314 3.38068 6.18314 3.84931 6.65176L12.0008 14.8032L20.1523 6.65176C20.6209 6.18314 21.3807 6.18314 21.8493 6.65177C22.3179 7.12039 22.3179 7.88019 21.8493 8.34882L12.8493 17.3488C12.3807 17.8175 11.6209 17.8175 11.1523 17.3488L2.15225 8.34882C1.68362 7.88019 1.68362 7.12039 2.15225 6.65176Z"
            />
        </Svg>
    );
}

export default IconoChevronAbajo;
