/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconUserSupportLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2.125 21.888a.333.333 0 00.26.112c.04 0 .076 0 .116-.004l5.883-1.629a9.78 9.78 0 003.995.852c1.775 0 3.515-.444 4.994-1.368a.395.395 0 00.112-.517c-.108-.148-.332-.224-.516-.112a8.69 8.69 0 01-4.59 1.297c-1.332 0-2.592-.3-3.775-.816-.076-.036-.184-.036-.26-.036h-.036L2.905 21.11l1.448-5.443c.04-.112 0-.22-.036-.296-.52-1.189-.816-2.445-.816-3.742 0-4.891 3.995-8.89 8.882-8.89 4.886 0 8.881 4.003 8.881 8.89a8.699 8.699 0 01-1.295 4.594c-.112.18-.072.405.111.517.18.112.404.072.516-.112a9.545 9.545 0 001.404-5C22 6.336 17.67 2 12.379 2c-5.29 0-9.622 4.335-9.622 9.63 0 1.409.292 2.741.848 3.962l-1.592 5.924c-.036.148 0 .26.112.372z" /><path fill="currentColor" d="M12.007 14.596c-.224 0-.372-.149-.372-.373 0-1.076.48-2.185 1.296-3.002l1.075-1.076c.556-.556.48-1.705.036-2.293a2.21 2.21 0 00-1.775-.889h-.184c-.704 0-1.368.372-1.74 1-.112.185-.336.225-.516.149-.184-.112-.224-.337-.148-.517.48-.852 1.404-1.368 2.404-1.368h.184c.923 0 1.775.444 2.331 1.148.628.853.776 2.406-.112 3.258L13.41 11.71c-.627.704-1.035 1.629-1.035 2.517.004.216-.144.369-.368.369zm0 2.589a.556.556 0 100-1.112.556.556 0 000 1.112zm6.882 1.705a.74.74 0 100-1.48.74.74 0 000 1.48z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconUserSupportLight;
