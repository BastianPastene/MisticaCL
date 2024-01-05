/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMobileDeviceLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.97 18.785c.4 0 .723-.32.723-.716a.72.72 0 00-.724-.716.72.72 0 00-.723.716.72.72 0 00.723.716z" /><path fill="currentColor" d="M18.496 5.875a.195.195 0 01.004.048c0 .016 0 .032-.004.048v12.814c0 1.775-1.46 3.215-3.25 3.215H8.75c-1.795 0-3.25-1.444-3.25-3.215V5.215C5.5 3.44 6.96 2 8.75 2h6.496c1.795 0 3.25 1.444 3.25 3.215v.66zm-3.25-3.16H8.75c-1.39 0-2.526 1.12-2.526 2.5v.352h11.548v-.352c0-1.38-1.131-2.5-2.526-2.5zm.004 18.565c1.39 0 2.526-1.12 2.522-2.495V6.283H6.224v11.43h7.579c.198 0 .36.16.36.356a.359.359 0 01-.36.356h-7.58v.356c0 1.38 1.132 2.5 2.527 2.5h6.5z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMobileDeviceLight;