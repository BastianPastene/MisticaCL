/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPenRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.37 5.633l-1.456 1.453-2.033-2.03 1.455-1.453a.842.842 0 011.154 0l.88.878a.815.815 0 010 1.152zM8.411 17.57l-2.033-2.03 9.535-9.518 2.033 2.03-9.535 9.518zM4.35 19.624L5.504 16.6l1.865 1.863-3.02 1.161zm16.988-16.11l-.879-.877A2.17 2.17 0 0018.914 2c-.585 0-1.134.226-1.546.637L4.443 15.542 1.976 22l6.435-2.496L21.337 6.599a2.18 2.18 0 000-3.085z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPenRegular;
