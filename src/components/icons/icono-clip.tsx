import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoClip({ color, size, style }: IconProps) {
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

                d="M16.0283 2.69995C15.2321 2.69995 14.4685 3.01626 13.9054 3.57928L4.71544 12.7693C3.77714 13.7076 3.25 14.9802 3.25 16.3072C3.25 17.6341 3.77714 18.9068 4.71544 19.8451C5.65375 20.7834 6.92637 21.3105 8.25334 21.3105C9.5803 21.3105 10.8529 20.7834 11.7912 19.8451L20.9812 10.6551C21.3718 10.2645 22.0049 10.2645 22.3954 10.6551C22.786 11.0456 22.786 11.6788 22.3954 12.0693L13.2054 21.2593C11.8921 22.5727 10.1107 23.3105 8.25334 23.3105C6.39594 23.3105 4.61461 22.5727 3.30123 21.2593C1.98785 19.9459 1.25 18.1646 1.25 16.3072C1.25 14.4498 1.98785 12.6684 3.30123 11.3551L12.4912 2.16507C13.4293 1.22697 14.7017 0.699951 16.0283 0.699951C17.355 0.699951 18.6273 1.22697 19.5654 2.16507C20.5035 3.10317 21.0306 4.3755 21.0306 5.70218C21.0306 7.02885 20.5035 8.30118 19.5654 9.23928L10.3654 18.4293C9.80263 18.9921 9.03928 19.3083 8.24334 19.3083C7.44739 19.3083 6.68405 18.9921 6.12123 18.4293C5.55841 17.8665 5.24222 17.1031 5.24222 16.3072C5.24222 15.5112 5.55841 14.7479 6.12123 14.1851L14.6116 5.70465C15.0024 5.31436 15.6356 5.31473 16.0259 5.70549C16.4162 6.09624 16.4158 6.7294 16.025 7.1197L7.53544 15.5993C7.34796 15.787 7.24222 16.0419 7.24222 16.3072C7.24222 16.5727 7.3477 16.8273 7.53544 17.0151C7.72319 17.2028 7.97783 17.3083 8.24334 17.3083C8.50885 17.3083 8.76348 17.2028 8.95123 17.0151L18.1512 7.82507C18.714 7.26208 19.0306 6.49823 19.0306 5.70218C19.0306 4.90594 18.7143 4.14231 18.1512 3.57928C17.5882 3.01626 16.8246 2.69995 16.0283 2.69995Z"
            />
        </Svg>
    );
}

export default IconoClip;
