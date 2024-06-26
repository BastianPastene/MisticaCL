/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconIntranetLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10a9.871 9.871 0 01-1.572 5.356c-.104.18-.32.216-.5.108-.18-.104-.216-.32-.108-.5a9.588 9.588 0 001.428-4.608H17.32c-.036 3.824-1.216 7.036-2.928 8.608.892-.252 1.752-.608 2.536-1.108.176-.108.392-.072.5.108.108.176.072.392-.108.5A9.925 9.925 0 0112 22C6.5 22 2 17.5 2 12zm5.464-5.356c.5-1.536 1.248-2.784 2.144-3.608C5.752 4.072 2.856 7.5 2.716 11.644h3.928c0-.536.036-1.036.108-1.536a1.823 1.823 0 01-1.18-1.68c0-1 .784-1.784 1.784-1.784h.108zm.964 1.784c0-.608-.468-1.068-1.072-1.072-.608 0-1.072.464-1.072 1.072 0 .608.468 1.072 1.072 1.072.608 0 1.072-.464 1.072-1.072zM6.64 12.356H2.716c.14 4.144 3.036 7.572 6.888 8.608-1.712-1.572-2.892-4.788-2.964-8.608zm5.004 8.928v-8.928H7.36c.104 4.716 1.96 8.572 4.284 8.928zm-4.284-9.64h4.284l.004-8.924c-1.428.212-2.712 1.856-3.464 4.14.568.288.964.892.964 1.572 0 .96-.752 1.748-1.68 1.784a9.186 9.186 0 00-.108 1.428zm4.996 9.64c2.32-.356 4.18-4.216 4.284-8.928h-4.284v8.928zm0-18.568v8.928h4.284c-.104-4.716-1.96-8.572-4.284-8.928zm5 8.928h3.928c-.144-4.144-3.036-7.572-6.892-8.608 1.712 1.572 2.892 4.788 2.964 8.608z" /><path fill="currentColor" d="M18.784 19.5a.716.716 0 100-1.432.716.716 0 000 1.432z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconIntranetLight;
