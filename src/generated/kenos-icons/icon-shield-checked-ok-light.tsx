/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconShieldCheckedOkLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.89 21.981a.29.29 0 00.108.019.424.424 0 00.108-.014c4.885-1.645 7.26-4.041 7.26-7.325V5.484a.36.36 0 00-.35-.366c-3.812 0-6.744-2.984-6.77-3.012a.341.341 0 00-.495 0l-.008.008c-.178.175-3.051 3.004-6.763 3.004a.36.36 0 00-.35.366v9.172c0 3.284 2.375 5.68 7.26 7.325zm-6.555-7.32V5.84c3.318-.14 5.878-2.25 6.663-2.979.786.724 3.346 2.838 6.664 2.98v8.819c0 2.899-2.178 5.055-6.664 6.587-4.48-1.527-6.663-3.684-6.663-6.587zm9.191-3.459a.377.377 0 00-.004-.517.338.338 0 00-.494.005l-3.785 4.004-2.03-2.124a.334.334 0 00-.494 0 .377.377 0 000 .517l2.528 2.645 4.28-4.53zm1.33-.949c-.387 0-.701-.329-.701-.733 0-.404.314-.733.7-.733.387 0 .701.33.701.733 0 .404-.314.733-.7.733z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconShieldCheckedOkLight;
