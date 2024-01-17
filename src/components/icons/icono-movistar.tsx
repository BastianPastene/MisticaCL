import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoMovistar({ color, size, style }: IconProps) {
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
                d="M23.4299 11.808C23.463 12.9919 23.3511 14.1754 23.0965 15.332C23.0647 15.6477 22.9572 15.9511 22.7831 16.2164C22.609 16.4817 22.3735 16.7011 22.0965 16.856C21.9462 16.9367 21.7795 16.982 21.609 16.9886C21.4385 16.9952 21.2688 16.9629 21.1127 16.8941C20.9566 16.8252 20.8182 16.7217 20.7081 16.5914C20.598 16.4611 20.519 16.3074 20.4772 16.142C20.3426 15.5316 20.3265 14.9011 20.4299 14.2847C20.5961 13.1339 20.6439 11.9692 20.5725 10.8087C20.5782 10.5259 20.4936 10.2488 20.3309 10.0175C20.1681 9.7862 19.9359 9.61286 19.6679 9.52268C19.4905 9.47065 19.3035 9.46079 19.1216 9.4939C18.9398 9.527 18.7682 9.60215 18.6205 9.71334C18.1108 10.1025 17.7023 10.6088 17.4299 11.1893C16.9797 12.1126 16.5978 13.0676 16.2872 14.0467C15.9539 15.0467 15.7159 16.094 15.2872 17.0467C15.0738 17.6113 14.7295 18.1173 14.2825 18.5229C13.8354 18.9286 13.2985 19.2223 12.7159 19.38C11.2399 19.7607 9.8112 19.7607 8.5252 18.7607C7.95126 18.2911 7.48111 17.7074 7.14454 17.0467C6.38254 15.7133 5.62054 14.4273 4.85854 13.142C4.6891 12.8463 4.46247 12.5872 4.19187 12.38C4.08391 12.3074 3.96003 12.2618 3.83074 12.2472C3.70145 12.2326 3.57053 12.2494 3.44908 12.2961C3.32763 12.3428 3.21922 12.418 3.13302 12.5155C3.04682 12.613 2.98537 12.7298 2.95387 12.856C2.80282 13.452 2.8192 14.0781 3.0012 14.6653C3.2392 15.808 3.66787 16.9033 3.95387 18.046C4.0715 18.4313 4.1198 18.8345 4.09654 19.2367C4.0696 19.4519 3.9777 19.6537 3.8331 19.8154C3.68851 19.977 3.49808 20.0907 3.2872 20.1413C3.0359 20.2102 2.76965 20.2017 2.5233 20.1167C2.27695 20.0318 2.06199 19.8745 1.90654 19.6653C1.52639 19.1116 1.23697 18.5009 1.0492 17.856C0.704186 17.0285 0.448732 16.1665 0.287204 15.2847C0.0170898 14.0018 -0.0630999 12.6862 0.0492037 11.38C0.128776 10.2916 0.352969 9.21858 0.71587 8.18934C1.03895 7.14008 1.68992 6.22204 2.5732 5.57001C3.17373 5.16543 3.89063 4.96955 4.61345 5.01256C5.33627 5.05557 6.02489 5.33507 6.5732 5.80801C7.40653 6.65929 8.14137 7.60167 8.76387 8.61734C9.13771 9.24613 9.55121 9.85046 10.0019 10.4267C10.4093 10.9524 11.0087 11.295 11.6685 11.3793C12.0124 11.4098 12.358 11.3461 12.6684 11.195C12.9788 11.044 13.2423 10.8114 13.4305 10.522C13.7412 10.0108 13.9966 9.46793 14.1925 8.90268C14.6685 7.76001 15.0972 6.61667 15.6212 5.52201C15.8617 4.98224 16.2095 4.49703 16.6434 4.0959C17.0773 3.69477 17.5882 3.3861 18.1452 3.18867C18.7595 2.96001 19.4318 2.93859 20.0594 3.1277C20.687 3.3168 21.2355 3.70603 21.6212 4.23601C22.1874 5.08029 22.6058 6.01473 22.8585 6.99934C23.2444 8.57292 23.4363 10.1878 23.4299 11.808Z"
            />
        </Svg>
    );
}

export default IconoMovistar;