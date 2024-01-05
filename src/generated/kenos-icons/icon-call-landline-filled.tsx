/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconCallLandlineFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.553 4.063l-1.382-1.375c-.898-.882-2.305-.922-3.134-.084l-2.08 2.088c-.381.39-.594.91-.594 1.472 0 .61.261 1.219.714 1.664l1.455 1.43c.236.237.356.562.364.96.008 1.021-.745 2.405-2.008 3.671-1.266 1.26-2.64 2.01-3.662 2.01h-.009c-.404 0-.72-.121-.957-.366l-1.431-1.455a2.345 2.345 0 00-1.663-.714h-.008c-.561 0-1.074.213-1.455.594l-2.1 2.084c-.838.83-.797 2.233.088 3.136l1.375 1.39c.918.927 2.176 1.424 3.63 1.432h.033c2.793 0 6.188-1.78 9.326-4.9l.048-.047C20.229 13.9 22.008 10.486 22 7.69c-.016-1.447-.513-2.71-1.447-3.628z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCallLandlineFilled;