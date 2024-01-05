/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTrendUpRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.841 5.63v3.577c0 .327-.28.599-.622.599a.612.612 0 01-.622-.6V7.383l-5.47 7.54a.621.621 0 01-.754.208l-7.199-3.062-3.86 6.603a.613.613 0 01-.537.302.701.701 0 01-.308-.073.592.592 0 01-.244-.8c.006-.01.008-.018.014-.023l4.132-7.065a.625.625 0 01.787-.255l7.246 3.079 5.524-7.602h-2.353a.612.612 0 01-.622-.6v-.003c0-.336.275-.602.622-.602h3.644a.61.61 0 01.622.6z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTrendUpRegular;
