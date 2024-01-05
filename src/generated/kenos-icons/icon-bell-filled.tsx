/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBellFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.993 11.644c0 2.144.7 4.284 1.957 6 .173.212.177.504.07.752-.105.248-.351.392-.63.392H3.613c-.282 0-.524-.14-.63-.392-.106-.252-.106-.536.07-.752a10.251 10.251 0 001.958-6v-2.5C5.01 5.216 8.157 2 12 2c3.845 0 6.992 3.216 6.992 7.144v2.5zM12.006 22c-1.296 0-2.38-.928-2.694-2.144H14.7C14.382 21.072 13.3 22 12.005 22z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBellFilled;
