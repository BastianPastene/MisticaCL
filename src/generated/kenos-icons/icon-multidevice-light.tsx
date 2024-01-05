/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMultideviceLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M14.963 2h5.277c.986 0 1.76.786 1.76 1.787v10.352c0 1-.774 1.787-1.76 1.787h-5.277c-.986 0-1.76-.786-1.76-1.787V7.356H3.706v11.787H12.5c.212 0 .351.142.351.357s-.14.357-.351.357H3.707v.356c0 .603.455 1.07 1.053 1.07h10.56c.594 0 1.053-.462 1.053-1.07v-2.857c0-.214.14-.356.351-.356.212 0 .351.142.351.357v2.856c0 1-.774 1.787-1.76 1.787H4.76C3.774 22 3 21.214 3 20.213V6.287c0-1 .774-1.787 1.76-1.787h8.442v-.713c0-1 .775-1.787 1.76-1.787zm6.335 3.218h-7.389v7.5h7.389v-7.5zm-6.335-2.5c-.599 0-1.054.461-1.054 1.069V4.5h7.384v-.713c0-.603-.455-1.07-1.053-1.07h-5.277zM3.707 6.287v.357h9.495V5.218H4.76c-.594 0-1.053.461-1.053 1.069zm16.533 8.926c.598 0 1.053-.462 1.058-1.07v-.713h-7.389v.713c0 .604.455 1.07 1.054 1.07h5.277zm-5.628 5a.709.709 0 01-.703-.713c0-.393.315-.713.703-.713.387 0 .702.32.702.713a.709.709 0 01-.702.713z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMultideviceLight;