/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconArrowUpLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.498 21.644c0 .196.157.356.35.356.192 0 .349-.16.337-.352v-8.054h-4.91c-.535 0-.868-.364-1.01-.712-.133-.324-.149-.812.208-1.176l8.53-8.694 8.518 8.698c.358.368.342.844.208 1.176-.133.34-.474.712-1.008.712H14.81v5.545c0 .197.157.357.35.357.192 0 .349-.16.349-.357v-4.829h4.212c.722 0 1.373-.456 1.66-1.16.287-.696.145-1.448-.357-1.96L12.004 2l-9.021 9.194a1.797 1.797 0 00-.357 1.96c.286.708.938 1.16 1.66 1.16h4.212v7.33zM15.16 22a.706.706 0 00.698-.712.706.706 0 00-.699-.712.706.706 0 00-.698.712c0 .393.312.712.698.712z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowUpLight;
