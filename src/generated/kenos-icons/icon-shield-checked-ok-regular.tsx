/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconShieldCheckedOkRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.21 21.967l.007-.002c1.778-.594 7.15-2.388 7.15-7.237V6c0-.4-.315-.726-.701-.726-3.398 0-5.994-2.863-6.14-3.024l-.006-.007A.695.695 0 0011.998 2a.688.688 0 00-.52.242c-.028.033-2.67 3.03-6.147 3.03a.716.716 0 00-.701.727v8.73c0 1.2 0 4.855 7.157 7.238a.692.692 0 00.423 0zm-1.977-5.675L7.46 13.42a.746.746 0 010-1.029.685.685 0 01.992 0l1.793 1.858 5.122-5.14a.685.685 0 01.993.019c.27.288.26.75-.018 1.028l-6.11 6.136zm7.728-9.6v8.036c0 2.547-1.896 4.386-5.967 5.782-4.07-1.396-5.967-3.235-5.967-5.782V6.693c2.822-.261 5.01-2.03 5.967-2.943.957.913 3.145 2.682 5.967 2.943z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconShieldCheckedOkRegular;
