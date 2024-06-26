/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWifiLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2.108 11.49c.072.076.18.114.252.114.108 0 .18-.034.216-.11 2.427-2.724 5.75-4.236 9.39-4.236 2.748 0 5.319.864 7.53 2.571.145.115.392.076.5-.076.108-.186.072-.415-.072-.53C17.604 7.45 14.89 6.5 11.998 6.5c-3.82 0-7.355 1.588-9.89 4.46a.379.379 0 000 .53zm19.176.305c.392 0 .716-.34.716-.759 0-.415-.324-.754-.716-.758-.392 0-.716.34-.716.758 0 .415.324.759.716.759z" /><path fill="currentColor" d="M4.787 14.514c.072.076.18.114.252.114a.312.312 0 00.248-.11c1.824-2.008 4.18-3.105 6.715-3.105s4.927 1.097 6.715 3.1a.33.33 0 00.5 0 .379.379 0 000-.529c-1.932-2.155-4.503-3.329-7.215-3.329-2.715 0-5.287 1.174-7.215 3.33a.379.379 0 000 .529zm11.498 2.952a.319.319 0 01-.252-.114c-1.072-1.135-2.5-1.78-3.999-1.78h-.036c-1.5 0-2.963.645-4.035 1.814a.33.33 0 01-.5 0 .378.378 0 010-.53c1.212-1.283 2.855-2.003 4.535-2.003h.036c1.712 0 3.283.72 4.5 2.003a.378.378 0 010 .53.438.438 0 01-.249.08z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWifiLight;
