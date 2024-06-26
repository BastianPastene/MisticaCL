/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSendFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.328 2.217a.682.682 0 01.998 0 .76.76 0 01.194.62c-.005.025-4.945 18.893-4.945 18.893a.363.363 0 01-.311.27h-.027a.352.352 0 01-.321-.213l-3.866-8.79-.962 1.01a.67.67 0 01-.496.218.67.67 0 01-.497-.218.767.767 0 010-1.048L20.328 2.217zM2.685 7.892l7.378 3.574 8.264-8.675L2.743 7.195a.37.37 0 00-.262.327.374.374 0 00.204.37z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSendFilled;
