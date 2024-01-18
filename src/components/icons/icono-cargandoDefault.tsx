import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoCargandoDefault({ color, size, style }: IconProps) {
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

                d="M14.5716 2.57136C14.5716 3.99148 13.4204 5.14271 12.0003 5.14271C10.5802 5.14271 9.42894 3.99148 9.42894 2.57136C9.42894 1.15124 10.5802 0 12.0003 0C13.4204 0 14.5716 1.15124 14.5716 2.57136ZM20.4861 3.51476C19.4819 2.51058 17.8539 2.51058 16.8497 3.51476C15.8455 4.51893 15.8455 6.14703 16.8497 7.1512C17.8539 8.15538 19.4819 8.15538 20.4861 7.1512C21.4903 6.14703 21.4903 4.51893 20.4861 3.51476ZM3.51603 7.15172C2.51185 6.14754 2.51185 4.51945 3.51603 3.51527C4.52021 2.5111 6.1483 2.5111 7.15248 3.51527C8.15666 4.51945 8.15666 6.14754 7.15248 7.15172C6.1483 8.1559 4.52021 8.1559 3.51603 7.15172ZM21.4287 14.5721C20.0086 14.5721 18.8573 13.4209 18.8573 12.0008C18.8573 10.5806 20.0086 9.4294 21.4287 9.4294C22.8488 9.4294 24 10.5806 24 12.0008C24 13.4209 22.8488 14.5721 21.4287 14.5721ZM14.5716 21.4287C14.5716 22.8488 13.4204 24 12.0003 24C10.5802 24 9.42894 22.8488 9.42894 21.4287C9.42894 20.0086 10.5802 18.8573 12.0003 18.8573C13.4204 18.8573 14.5716 20.0086 14.5716 21.4287ZM16.849 16.8487C15.8449 17.8528 15.8449 19.4809 16.849 20.4851C17.8532 21.4893 19.4813 21.4893 20.4855 20.4851C21.4897 19.4809 21.4897 17.8528 20.4855 16.8487C19.4813 15.8445 17.8532 15.8445 16.849 16.8487ZM7.15137 16.8495C6.14719 15.8453 4.5191 15.8453 3.51492 16.8495C2.51075 17.8537 2.51075 19.4818 3.51492 20.486C4.5191 21.4901 6.14719 21.4901 7.15137 20.486C8.15555 19.4818 8.15555 17.8537 7.15137 16.8495ZM2.57136 14.5721C1.15124 14.5721 0 13.4209 0 12.0008C0 10.5806 1.15124 9.4294 2.57136 9.4294C3.99148 9.4294 5.14271 10.5806 5.14271 12.0008C5.14271 13.4209 3.99148 14.5721 2.57136 14.5721Z"
            />
        </Svg>
    );
}

export default IconoCargandoDefault;