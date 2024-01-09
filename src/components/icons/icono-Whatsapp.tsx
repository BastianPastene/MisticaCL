import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './type';

function IconoWhatsapp({ color, size }: IconProps) {
    return (
        <Svg
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMinYMin slice">
            <g clip-path="url(#clip0_1_1062)">

                <Path
                    fill={color}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.45717 17.4008C1.24739 15.3016 0.76397 12.8618 1.08186 10.4599C1.39975 8.05792 2.50119 5.82794 4.21541 4.11566C5.92963 2.40338 8.16086 1.30447 10.5632 0.989299C12.9655 0.674131 15.4047 1.16032 17.5026 2.37247C19.6005 3.58463 21.2398 5.45504 22.1665 7.69371C23.0933 9.93239 23.2555 12.4143 22.6282 14.7545C22.0008 17.0948 20.6189 19.1627 18.6967 20.6377C16.7745 22.1127 14.4194 22.9123 11.9965 22.9126C10.1584 22.9125 8.34961 22.4518 6.73536 21.5727L0.895386 23.1041L2.45717 17.4008ZM7.33546 19.78C8.74527 20.6147 10.3536 21.0549 11.9919 21.0546C14.0204 21.0549 15.9914 20.381 17.5952 19.139C19.1989 17.8969 20.3444 16.1571 20.8515 14.193C21.3586 12.229 21.1987 10.1521 20.3968 8.28888C19.5948 6.42566 18.1965 4.88178 16.4214 3.89996C14.6464 2.91813 12.5954 2.55404 10.591 2.86493C8.58646 3.17582 6.74212 4.14406 5.3479 5.61742C3.95368 7.09078 3.08864 8.98571 2.88878 11.0043C2.68892 13.0229 3.16557 15.0507 4.2438 16.7688L4.46105 17.1152L3.53887 20.494L7.00123 19.5825L7.33546 19.78ZM13.7922 17.0317C13.2598 16.8664 12.7365 16.6732 12.2244 16.4528C10.3246 15.4995 8.7053 14.0687 7.52537 12.3007C6.88231 11.4822 6.49212 10.4938 6.40265 9.45671C6.39507 9.0284 6.4768 8.60321 6.64264 8.20824C6.80848 7.81326 7.05478 7.45717 7.36585 7.16265C7.45781 7.05834 7.57031 6.97415 7.69632 6.91533C7.82232 6.85651 7.95911 6.82433 8.09812 6.82082C8.28195 6.82082 8.46578 6.82082 8.6253 6.82993H8.68759C8.84711 6.82993 9.04765 6.82993 9.24515 7.3009C9.47456 7.85087 10.0245 9.20451 10.0929 9.34276C10.1365 9.4148 10.1614 9.49658 10.1653 9.58067C10.1693 9.66477 10.1523 9.74853 10.1157 9.82436C10.0462 9.98859 9.95357 10.1421 9.84069 10.2801C9.70244 10.4412 9.55204 10.6387 9.42746 10.7617C9.30288 10.8848 9.1464 11.0474 9.30744 11.3223C9.72036 12.03 10.2359 12.6725 10.8373 13.229C11.4897 13.8093 12.2382 14.2715 13.0493 14.5948C13.3243 14.733 13.4854 14.7087 13.6449 14.5264C13.8044 14.3441 14.3331 13.7243 14.5154 13.4478C14.6977 13.1713 14.8815 13.2184 15.1337 13.3095C15.3859 13.4007 16.7381 14.0691 17.013 14.2043C17.288 14.3396 17.4688 14.411 17.5402 14.5249C17.6154 14.9673 17.5594 15.422 17.3792 15.833C17.1768 16.1673 16.9073 16.4561 16.5878 16.6813C16.2683 16.9064 15.9056 17.0629 15.5227 17.141C15.302 17.1753 15.079 17.1931 14.8557 17.1942C14.495 17.1953 14.1362 17.1404 13.7922 17.0317Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_1062">
                    <rect width={size} height={size} fill="green" transform="translate(0.00354004)" />
                </clipPath>
            </defs>
        </Svg>
    );
}

export default IconoWhatsapp;