/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPauseCircleLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12c0 5.517 4.488 10 10 10a9.97 9.97 0 005.334-1.545.36.36 0 00.11-.493.36.36 0 00-.494-.11 9.247 9.247 0 01-4.95 1.43c-5.119 0-9.282-4.163-9.282-9.282S6.88 2.718 12 2.718s9.282 4.163 9.287 9.277a9.248 9.248 0 01-1.43 4.95.36.36 0 00.11.494.36.36 0 00.493-.11A9.98 9.98 0 0022 12c0-5.512-4.488-10-10-10S2 6.484 2 12zm16.787 6.07a.714.714 0 010 1.425.714.714 0 010-1.425zM9.857 7.356a.357.357 0 00-.713 0v9.283a.357.357 0 00.712.005V7.355zM14.5 7c.197 0 .357.16.357.356v9.287a.357.357 0 01-.713-.005V7.357c0-.196.16-.356.356-.356z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPauseCircleLight;
