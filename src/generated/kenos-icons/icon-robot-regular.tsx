/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRobotRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.302 9.103l-1.489-1.588h-1.628a1.77 1.77 0 00-.278-.38l-2.832-2.942C14.932 2.953 13.89 2 12.645 2c-.89 0-1.672.468-2.093 1.24l-4.799 8.392a2.972 2.972 0 00-1.554 2.607v3.993c-.973.159-1.698.997-1.698 2.043V22h9.158v-1.725c0-1.041-.72-1.88-1.698-2.043v-3.9l3.778-6.702 1.859 1.888c.039.04.086.088.139.128v2.352l1.628 1.24c.29.22.734.154.95-.137a.694.694 0 00-.134-.966l-1.085-.83v-1.31a1.655 1.655 0 001.216-1.103h.916l1.124 1.173a.7.7 0 00.956 0 .69.69 0 00-.005-.962zM4.537 19.583h5.089c.386 0 .677.295.677.688v.344H3.86v-.345c0-.392.291-.688.678-.688zM8.61 18.2H5.557v-3.96c0-.843.7-1.553 1.529-1.553s1.524.71 1.524 1.553v3.962zm-1.095-6.86l4.234-7.444c.178-.309.539-.516.895-.516.59 0 1.085.503 1.085 1.103a.94.94 0 01-.16.52l-4.152 7.528a2.879 2.879 0 00-1.902-1.192zm9.436-3.235c.07.07.105.15.105.239 0 .145-.144.308-.34.308a.322.322 0 01-.234-.105l-2.088-2.123.36-.613 2.197 2.294z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRobotRegular;
