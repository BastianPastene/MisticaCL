/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSettingsRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 17.716c-3 0-5.448-2.568-5.448-5.716S9 6.284 12 6.284c3 0 5.447 2.568 5.447 5.716S15 17.716 12 17.716zm0-10c-2.253 0-4.083 1.92-4.083 4.284s1.83 4.284 4.083 4.284c2.252 0 4.082-1.92 4.082-4.284S14.252 7.716 12 7.716z" /><path fill="currentColor" d="M13.357 22H10.63c-.377 0-.678-.316-.678-.712V20.3a7.896 7.896 0 01-2.108-.916l-.664.696a.665.665 0 01-.964 0l-1.929-2.016a.73.73 0 010-1.008l.664-.696a8.681 8.681 0 01-.873-2.212h-.93c-.378-.008-.679-.332-.679-.728v-2.86c0-.388.301-.712.679-.712h.941a8.74 8.74 0 01.873-2.212l-.667-.688a.73.73 0 010-1.008l1.929-2.02a.663.663 0 01.48-.212.64.64 0 01.48.212l.663.696a8.217 8.217 0 012.11-.916v-.988A.7.7 0 0110.644 2h2.725c.377 0 .678.316.678.712V3.7a7.88 7.88 0 012.108.916l.66-.696a.663.663 0 01.48-.212c.18 0 .355.072.48.212l1.922 2.024a.748.748 0 010 1.012l-.664.696c.393.688.679 1.432.873 2.212h.934c.378 0 .679.316.679.712v2.86c0 .396-.302.712-.679.712h-.934a8.74 8.74 0 01-.873 2.212l.664.696a.748.748 0 010 1.012l-1.918 2.012a.665.665 0 01-.964 0l-.663-.696a7.843 7.843 0 01-2.108.916v.988a.699.699 0 01-.686.712zm-2.036-1.424h1.353v-.844c0-.348.233-.64.557-.704a6.576 6.576 0 002.615-1.14.657.657 0 01.865.08l.572.6.964-1.012-.572-.6a.736.736 0 01-.076-.908 7.276 7.276 0 001.087-2.744.689.689 0 01.67-.584h.805v-1.424h-.805a.689.689 0 01-.67-.584 7.27 7.27 0 00-1.087-2.744.741.741 0 01.076-.908l.572-.6-.964-1.012-.572.6a.653.653 0 01-.865.08 6.58 6.58 0 00-2.615-1.14.704.704 0 01-.557-.704v-.86h-1.357v.852c0 .348-.232.64-.556.704-.95.188-1.83.568-2.615 1.14a.657.657 0 01-.865-.08l-.572-.6-.972 1.004.572.6a.736.736 0 01.076.908 7.124 7.124 0 00-1.079 2.752.689.689 0 01-.67.584h-.809v1.424h.812c.332 0 .61.244.67.584a7.27 7.27 0 001.087 2.744.741.741 0 01-.076.908l-.572.6.965 1.012.571-.6a.653.653 0 01.866-.08 6.58 6.58 0 002.614 1.14.704.704 0 01.557.704v.852z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSettingsRegular;
