/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconUserSupportFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.352 2c-5.086 0-9.188 4.297-9.188 9.63 0 1.443.282 2.779.847 3.998l-1.518 5.928c-.034.112 0 .26.073.332a.311.311 0 00.248.112h.072l5.646-1.591a8.759 8.759 0 003.812.851c5.086 0 9.184-4.297 9.184-9.63 0-5.333-4.09-9.63-9.176-9.63zm0 15.075c-.355 0-.637-.296-.637-.668 0-.371.282-.667.637-.667.354 0 .636.296.636.667-.003.372-.286.668-.636.668zm1.444-5.369a3.333 3.333 0 00-.918 2.335c0 .296-.248.555-.53.555-.282 0-.53-.26-.53-.555 0-1.184.423-2.295 1.235-3.11l1.026-1.076c.457-.48.388-1.519 0-2.034a1.895 1.895 0 00-1.556-.816h-.175c-.637 0-1.201.332-1.517.927-.141.26-.458.372-.706.184a.52.52 0 01-.175-.74c.496-.887 1.449-1.482 2.436-1.482h.175c.92 0 1.8.443 2.368 1.223.67.92.777 2.586-.107 3.514l-1.025 1.075z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconUserSupportFilled;
