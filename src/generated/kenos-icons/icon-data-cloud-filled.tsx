/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconDataCloudFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.182 9.255a.74.74 0 001.023.279.77.77 0 00.268-1.047 3.73 3.73 0 00-1.224-1.29c.564-2.146 2.486-3.672 4.684-3.672 2.175 0 4.102 1.501 4.68 3.642.11.406.52.646.918.533a.766.766 0 00.52-.938C18.297 3.96 15.783 2 12.935 2c-2.82 0-5.297 1.921-6.085 4.644a3.463 3.463 0 00-.636-.063c-2.06 0-3.733 1.71-3.733 3.818 0 2.107 1.673 3.818 3.733 3.818a.755.755 0 00.746-.763.755.755 0 00-.746-.762c-1.238 0-2.242-1.027-2.242-2.293 0-1.266 1.009-2.293 2.242-2.293.817 0 1.568.44 1.97 1.149zm6.845.034a.36.36 0 01.301 0l5.588 2.503-5.74 2.938-5.741-2.938 5.592-2.503zm-6.195 9.514c0 .146.082.278.206.342L14.62 22v-6.282L8.832 12.76v6.043zm6.907-3.085l5.789-2.958v6.043a.384.384 0 01-.206.342L15.74 22v-6.282z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDataCloudFilled;
