/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconChipSimCardRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M7.482 18.88h9.93v-8.511c0-.78-.639-1.419-1.42-1.419h-7.09c-.78 0-1.419.639-1.419 1.419v8.51zm8.51-1.419h-7.09v-7.092h7.092v7.092z" /><path fill="currentColor" d="M5 21.858h14.894V7.922c0-.567-.237-1.1-.61-1.49l-3.621-3.794A1.855 1.855 0 0014.24 2H7.03C5.914 2 5 2.957 5 4.128v17.73zm13.54-1.418H6.354V4.128c0-.39.305-.71.677-.71h7.21c.203 0 .372.071.508.213l3.588 3.795a.716.716 0 01.203.496V20.44z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChipSimCardRegular;
