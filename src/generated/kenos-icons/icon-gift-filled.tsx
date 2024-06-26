/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconGiftFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.422 10.334v1.294h-7.86V8.3h2.62c1.446 0 2.62-1.161 2.62-2.593s-1.174-2.593-2.62-2.593c-1.385 0-2.534 1.071-2.616 2.441-.004.052-.004.1-.004.152V8.3h-1.117v3.333H3.58v-1.294c0-1.124.925-2.039 2.06-2.039h1.878a2.742 2.742 0 01-.566-1.669c0-1.53 1.26-2.777 2.807-2.777.719 0 1.37.27 1.868.71A3.74 3.74 0 0115.188 2c2.064 0 3.74 1.66 3.74 3.702a3.68 3.68 0 01-1.072 2.593h.512c1.13.005 2.055.915 2.055 2.039zM11.441 8.3V6.636a1.68 1.68 0 00-1.686-1.668c-.93 0-1.682.744-1.682 1.663 0 .92.757 1.67 1.686 1.67h1.682zM3.58 21.445c0 .308.248.555.56.555h7.295v-9.258H3.58v8.703zM19.856 22h-7.295v-9.258h7.855v8.703a.555.555 0 01-.56.555z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconGiftFilled;
