/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRobotLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.395 9.246L19.954 7.71h-1.76a1.527 1.527 0 00-.316-.499l-3.026-3.14C14.78 2.928 13.83 2 12.672 2c-.774 0-1.477.393-1.864 1.106l-5.034 8.787A2.719 2.719 0 004.26 14.32v4.466c-.986 0-1.761.787-1.761 1.788V22h8.794v-1.426c0-1.001-.774-1.788-1.76-1.788V14.32c0-1.463-1.198-2.679-2.639-2.679h-.14l4.683-8.215c.248-.43.739-.713 1.23-.713.81 0 1.477.677 1.477 1.5 0 .251-.072.498-.212.713L11.3 9.712a.364.364 0 00.14.498c.175.105.387.037.49-.141l1.793-3.178 2.251 2.286c.086.087.149.151.248.188v2.454L17.77 13c.063.05.135.073.211.073a.36.36 0 00.284-.142.357.357 0 00-.072-.498l-1.265-.965V9.611c.666 0 1.23-.498 1.337-1.179h1.374l1.265 1.321a.369.369 0 00.248.105.392.392 0 00.247-.105.364.364 0 00-.004-.507zM9.538 19.499c.6 0 1.054.467 1.054 1.07v.713H3.207v-.713c0-.608.46-1.07 1.054-1.07h5.277zm-.702-5.179v4.466H4.963V14.32c0-1.074.883-1.966 1.936-1.966 1.054 0 1.937.892 1.937 1.966zm8.056-5.43a.69.69 0 01-.491-.216l-2.36-2.39.563-.965a1.05 1.05 0 00.14-.357l2.639 2.752a.71.71 0 01.211.499c0 .356-.315.676-.702.676zm-6.295 3.464c.387 0 .702-.32.702-.713a.709.709 0 00-.702-.713.709.709 0 00-.703.713c0 .393.315.713.703.713z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRobotLight;
