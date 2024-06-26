/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconShoppingCartFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.043 17.353H8.537l-.632-2.5h11.406L22 4.14H5.209l-.136-.532A2.116 2.116 0 003.028 2h-.324A.707.707 0 002 2.71a.71.71 0 00.704.715h.324c.32 0 .604.219.684.54L7.11 17.458a2.312 2.312 0 00-1.636 2.22A2.32 2.32 0 007.785 22a2.315 2.315 0 002.133-3.214h5.985A2.32 2.32 0 0018.035 22a2.315 2.315 0 002.313-2.321 2.306 2.306 0 00-2.305-2.326z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconShoppingCartFilled;
