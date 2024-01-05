/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSendEuroLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M22 11.742c0 .451-.256.838-.675 1.01a1.08 1.08 0 01-1.187-.237l-2.458-2.46-1.91 1.91a.357.357 0 01-.511 0 .361.361 0 010-.512l2.425-2.426 2.97 2.97a.355.355 0 00.396.08.361.361 0 00.224-.335v-9.01h-9.009a.361.361 0 00-.335.223.355.355 0 00.08.395l2.97 2.971-3.995 4a.357.357 0 01-.512 0 .357.357 0 010-.512l3.478-3.488-2.458-2.458a1.074 1.074 0 01-.238-1.188A1.079 1.079 0 0112.265 2H22v9.742zm-7.998.81a.727.727 0 000 1.453.727.727 0 000-1.453zm-3.105.689a4.355 4.355 0 00-2.351-.69 4.378 4.378 0 00-4.111 2.902h3.743a.364.364 0 010 .726H4.244c-.037.238-.065.48-.065.727s.023.489.065.726h3.938a.364.364 0 010 .727H4.435a4.367 4.367 0 004.11 2.91c.834 0 1.649-.238 2.352-.69a.367.367 0 01.502.113.367.367 0 01-.111.502A5.081 5.081 0 018.546 22a5.1 5.1 0 01-4.88-3.637H2.364a.364.364 0 010-.726h1.15a5.334 5.334 0 01-.056-.727c0-.246.023-.489.056-.726h-1.15a.364.364 0 010-.727h1.304a5.104 5.104 0 014.879-3.636c.973 0 1.918.28 2.742.805a.363.363 0 01.111.503.363.363 0 01-.502.112z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSendEuroLight;