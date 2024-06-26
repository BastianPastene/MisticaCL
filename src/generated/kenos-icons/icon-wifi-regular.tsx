/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWifiRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.286 12.356a.702.702 0 01-.5-.215C18.392 9.748 15.288 8.428 12 8.428c-3.288 0-6.392 1.323-8.786 3.713a.69.69 0 01-1 0 .69.69 0 010-1C4.856 8.463 8.321 7 12 7c3.679 0 7.144 1.465 9.786 4.142.285.285.285.75 0 1a.707.707 0 01-.5.214z" /><path fill="currentColor" d="M5.213 14.855a.703.703 0 01-.5-.214.69.69 0 010-1 10.175 10.175 0 0114.57 0c.286.286.286.751 0 1-.285.285-.75.285-1 0A8.696 8.696 0 0012 11.999c-2.39 0-4.607.928-6.284 2.642-.108.143-.323.214-.503.214z" /><path fill="currentColor" d="M7.213 17.174c.143.109.32.18.5.18s.394-.071.534-.18c.928-1 2.285-1.57 3.75-1.57 1.428 0 2.82.57 3.785 1.57.248.286.714.286 1 0 .285-.248.285-.714 0-1-1.214-1.285-2.963-1.999-4.785-1.999-1.894 0-3.607.714-4.821 2a.725.725 0 00.037 1z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWifiRegular;
