/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRewindRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12zm1.43 0c0-4.726 3.844-8.57 8.57-8.57 4.726 0 8.57 3.844 8.57 8.57 0 4.726-3.844 8.57-8.57 8.57-4.726 0-8.57-3.844-8.57-8.57zm13.716 5.146a.715.715 0 000-1.01L13.01 12l4.136-4.136a.715.715 0 00-1.01-1.01l-4.639 4.643a.714.714 0 000 1.01l4.644 4.644a.702.702 0 001.005-.005zm-6.07-1.01a.714.714 0 010 1.01.718.718 0 01-.507.215.695.695 0 01-.502-.21l-4.644-4.644a.714.714 0 010-1.01l4.644-4.643a.714.714 0 011.01 1.01L6.94 12l4.136 4.136z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRewindRegular;
