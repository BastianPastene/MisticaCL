/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconArrowLineLeftLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.529 11.62H5.518l6.448-6.783a.47.47 0 00-.208-.829.477.477 0 00-.473.19L4.084 11.77a.128.128 0 00-.048.066.414.414 0 000 .075.463.463 0 000 .357.414.414 0 000 .075.263.263 0 00.048.075l7.069 7.43a.453.453 0 00.35.15.46.46 0 00.33-.79l-6.315-6.65h14.01a.47.47 0 00.472-.47.472.472 0 00-.471-.469c0 .003 0 .003 0 0z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowLineLeftLight;
