/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconArrowsLeftAndRightFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.073 4.1c.428-.187.856-.112 1.18.224L22 9.214l-4.747 4.879a.89.89 0 01-.716.336c-.144 0-.284 0-.428-.075a1.16 1.16 0 01-.716-1.074v-1.85H9.678V6.987h5.715v-1.85c0-.444.252-.85.68-1.037z" /><path fill="currentColor" d="M7.927 9.659c.396.182.68.593.68 1.037l.004 1.891h5.714v4.451H8.611v1.85c0 .444-.252.85-.68 1.037l-.012.003c-.14.037-.276.072-.416.072a1.01 1.01 0 01-.752-.336L2 14.774l4.747-4.891c.324-.3.752-.411 1.18-.224z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowsLeftAndRightFilled;
