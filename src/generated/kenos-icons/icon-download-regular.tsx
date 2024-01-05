/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconDownloadRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M6.143 13.214L12 19.071l5.857-5.857c.464-.464.607-1.214.357-1.857-.25-.607-.785-.964-1.393-.964H14.68V2.714A.716.716 0 0013.964 2a.716.716 0 00-.714.714v9.107h3.571s.036 0 .072.072c.036.107.036.25-.036.321L12 17.071l-4.857-4.857c-.072-.071-.072-.214-.036-.321.036-.072.072-.072.072-.072h3.571V2.714A.716.716 0 0010.036 2a.716.716 0 00-.715.714v7.679H7.18c-.608 0-1.143.357-1.393.964-.25.643-.107 1.393.357 1.857z" /><path fill="currentColor" d="M4.143 22h15.714A2.15 2.15 0 0022 19.857V12a.716.716 0 00-.714-.714.716.716 0 00-.715.714v7.857a.716.716 0 01-.714.714H4.143a.716.716 0 01-.714-.714V12a.716.716 0 00-.715-.714A.716.716 0 002 12v7.857A2.15 2.15 0 004.143 22z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDownloadRegular;
