/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSearchRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.786 20.786l-5.893-5.893a7.84 7.84 0 001.821-5.036C17.714 5.536 14.18 2 9.857 2 5.536 2 2 5.536 2 9.857c0 4.322 3.536 7.857 7.857 7.857a7.84 7.84 0 005.036-1.821l5.893 5.893a.705.705 0 00.5.214.705.705 0 00.5-.214.69.69 0 000-1zM3.429 9.857c0-3.536 2.892-6.428 6.428-6.428s6.429 2.892 6.429 6.428-2.893 6.429-6.429 6.429c-3.536 0-6.428-2.893-6.428-6.429z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSearchRegular;
