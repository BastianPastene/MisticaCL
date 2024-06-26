/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconHomeRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M13.577 14.289v3.2h-3.2v-3.2h3.2z" /><path fill="currentColor" d="M11.977 2l10.001 10-.481 1.162h-1.916v5.378c0 1.33-1.082 2.41-2.411 2.41H6.784a2.414 2.414 0 01-2.411-2.41v-5.378H2.457L1.976 12 11.977 2zm6.243 9.802h1.635l-7.878-7.879-7.879 7.879h1.635v6.738c0 .58.472 1.05 1.051 1.05H17.17c.579 0 1.05-.47 1.05-1.05v-6.738z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHomeRegular;
