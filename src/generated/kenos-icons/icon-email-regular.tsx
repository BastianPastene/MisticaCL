/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconEmailRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M3.355 17.984V6.291l7.068 7.087c.42.42.98.653 1.577.654h.002c.596 0 1.156-.232 1.576-.651l7.067-7.063v11.666H3.355zm16.338-12.63l-7.073 7.069a.87.87 0 01-.618.254h-.001a.87.87 0 01-.619-.255L4.334 5.355h15.359zM2 19.34h20V4H2v15.339z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEmailRegular;
