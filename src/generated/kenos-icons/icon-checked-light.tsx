/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconCheckedLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.998 2C6.488 2 2 6.488 2 12s4.487 10 9.998 10a9.97 9.97 0 005.33-1.544.353.353 0 00.113-.496.36.36 0 00-.496-.112 9.257 9.257 0 01-4.951 1.432c-5.119 0-9.282-4.164-9.282-9.284 0-5.12 4.167-9.288 9.286-9.288s9.282 4.164 9.282 9.284a9.261 9.261 0 01-1.432 4.952.36.36 0 00.608.384A9.965 9.965 0 0022 11.996C21.996 6.488 17.513 2 11.998 2z" /><path fill="currentColor" d="M10.928 16l-3.834-4.267a.336.336 0 010-.467.292.292 0 01.44 0l3.394 3.732L17.466 8.1a.292.292 0 01.44 0 .336.336 0 010 .466L10.928 16zm7.861 3.504a.716.716 0 100-1.432.716.716 0 000 1.432z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCheckedLight;
