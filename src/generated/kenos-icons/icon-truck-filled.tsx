/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTruckFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.072 2.356H2v7.32h3.216a.536.536 0 010 1.072H2v2.5h6.428a.536.536 0 010 1.072H2v5.536h9.284V5.572a3.228 3.228 0 00-3.212-3.216zm7.08 3.572h-2.796v13.928h1.428a1.285 1.285 0 01-.004-.234c.002-.04.004-.08.004-.122A3.221 3.221 0 0117 16.284a3.221 3.221 0 013.216 3.216c0 .124-.012.252-.024.372H22v-7.136l-6.848-6.808z" /><path fill="currentColor" d="M19.144 19.5a2.144 2.144 0 10-4.288 0 2.144 2.144 0 004.288 0z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTruckFilled;
