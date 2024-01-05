/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRewindFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm-1.051 14.264a.535.535 0 11-.759.759l-4.639-4.644a.535.535 0 010-.758l4.644-4.644a.535.535 0 11.759.759L6.688 12l4.26 4.264zm6.07.759a.532.532 0 01-.38.155.532.532 0 01-.38-.155l-4.638-4.644a.535.535 0 010-.758l4.643-4.644a.536.536 0 11.759.759L12.759 12l4.26 4.264c.21.21.21.549 0 .759z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRewindFilled;
