/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconArrowLineRightLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M4.471 12.38h14.011l-6.448 6.783a.47.47 0 00.208.829.477.477 0 00.473-.19l7.201-7.573a.128.128 0 00.048-.066.41.41 0 000-.075.462.462 0 000-.357.41.41 0 000-.075.261.261 0 00-.048-.075l-7.069-7.43a.454.454 0 00-.35-.15.46.46 0 00-.33.79l6.315 6.65H4.472a.47.47 0 00-.472.47c0 .257.212.469.471.469 0-.003 0-.003 0 0z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowLineRightLight;
