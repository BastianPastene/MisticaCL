/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRestaurantRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17 21.282c0 .393-.31.713-.689.713a.702.702 0 01-.688-.713v-8.571h-1.378a.702.702 0 01-.689-.713v-7.14C13.556 3.28 14.793 2 16.316 2c.375-.005.684.315.684.713v18.57zM12.514 3.07a.706.706 0 00-.693-.713c-.38 0-.688.32-.688.713v5.357a.704.704 0 01-.68.714V3.07a.702.702 0 00-.69-.713.702.702 0 00-.688.713v6.07h-.009a.702.702 0 01-.689-.713V3.07a.702.702 0 00-.688-.713c-.38 0-.689.32-.689.713v5.357c0 1.184.932 2.144 2.07 2.144h.01v10.716c0 .393.309.713.688.713.38 0 .689-.32.689-.713V10.57c1.135-.009 2.057-.964 2.057-2.144V3.07zm2.415 1.787v6.428h.69V3.618a1.44 1.44 0 00-.69 1.24z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRestaurantRegular;
