/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconControlsFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.523 13.995V2.528c0-.28-.24-.528-.52-.528a.537.537 0 00-.522.528v11.467a2.281 2.281 0 00-1.733 2.211 2.28 2.28 0 001.733 2.211v3.051c0 .28.24.528.521.528a.537.537 0 00.521-.528v-3.05a2.281 2.281 0 001.733-2.212 2.28 2.28 0 00-1.733-2.21zm6.924-4.806a2.253 2.253 0 00-1.733-2.211v-4.45c0-.28-.24-.528-.52-.528a.537.537 0 00-.522.528v4.454a2.281 2.281 0 00-1.733 2.211 2.28 2.28 0 001.733 2.211v10.068c0 .28.241.528.521.528a.537.537 0 00.521-.528V11.4a2.253 2.253 0 001.733-2.21zm-10.379 0a2.253 2.253 0 00-1.733-2.211v-4.45c0-.28-.24-.528-.521-.528a.537.537 0 00-.521.528v4.454A2.281 2.281 0 004.56 9.193a2.28 2.28 0 001.733 2.211v10.068c0 .28.24.528.521.528a.537.537 0 00.521-.528V11.4a2.253 2.253 0 001.733-2.21z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconControlsFilled;