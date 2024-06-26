/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconQuestionLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12c0 5.5 4.5 10 10 10a10.14 10.14 0 005.356-1.536c.18-.108.216-.32.108-.5s-.32-.216-.5-.108A9.43 9.43 0 0112 21.284c-5.108 0-9.284-4.176-9.284-9.284 0-5.108 4.18-9.284 9.284-9.284 5.104 0 9.284 4.176 9.284 9.248 0 1.784-.5 3.5-1.428 4.964-.108.18-.072.392.108.5.18.108.392.072.5-.108A9.925 9.925 0 0022 12c0-5.5-4.5-10-10-10S2 6.5 2 12z" /><path fill="currentColor" d="M18.784 19.5a.716.716 0 100-1.432.716.716 0 000 1.432zm-6.248-2.68a.536.536 0 11-1.072 0 .536.536 0 011.072 0zm-.892-2.32c0 .212.14.356.356.356.216 0 .356-.14.352-.352 0-.892.356-1.748.928-2.392l1.036-1.036c.86-.824.716-2.324.108-3.144a2.866 2.866 0 00-2.248-1.108h-.18c-.964 0-1.856.5-2.32 1.32-.072.18-.036.392.144.5.18.072.392.036.5-.144.36-.608 1-.964 1.68-.964h.18c.68 0 1.324.32 1.716.856.428.572.5 1.68-.036 2.216l-1.036 1.036a4.041 4.041 0 00-1.18 2.856z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconQuestionLight;
