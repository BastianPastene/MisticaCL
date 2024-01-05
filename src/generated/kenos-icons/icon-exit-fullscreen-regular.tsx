/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconExitFullscreenRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.366 2.155c.465 0 .843.378.843.843v5.353a.844.844 0 01-.843.843H3.013a.845.845 0 010-1.689H7.52V2.998c0-.465.378-.843.846-.843zm.843 13.49a.844.844 0 00-.843-.843H3.013a.845.845 0 00-.812.812.84.84 0 00.812.874h4.51v4.51a.845.845 0 001.686 0v-5.353zm12.614.034a.845.845 0 00-.813-.877h-5.353a.842.842 0 00-.843.843v5.356a.844.844 0 001.69 0v-4.51h4.506a.846.846 0 00.813-.812zM14.817 8.35c0 .465.378.843.843.843h5.353a.846.846 0 000-1.689h-4.51V2.998a.845.845 0 00-1.686 0v5.353z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconExitFullscreenRegular;
