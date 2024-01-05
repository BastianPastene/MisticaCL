/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconHotlineFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.685 8.888l.65 2.538a.705.705 0 01-.188.683.652.652 0 01-.654.187l-2.428-.679c-.57.25-1.18.374-1.808.374-2.633 0-4.777-2.237-4.777-4.993C2.48 4.24 4.633 2 7.265 2c2.633 0 4.777 2.237 4.777 4.993a5.17 5.17 0 01-.357 1.895zM4.502 20.615C5.387 21.531 6.568 22 7.937 22c.675 0 1.403-.114 2.157-.346 2.197-.68 4.541-2.287 6.773-4.643 2.223-2.341 3.726-4.797 4.35-7.098.649-2.391.274-4.464-1.051-5.836l-1.32-1.366c-.85-.88-2.184-.92-2.969-.091l-1.974 2.086c-.388.41-.584.966-.553 1.567.03.574.27 1.116.67 1.536l1.382 1.43c.829.857.17 2.811-1.569 4.647-1.743 1.84-3.613 2.556-4.44 1.7L8.01 14.154c-.85-.88-2.184-.92-2.968-.091L3.064 16.15c-.388.41-.584.966-.554 1.568a2.39 2.39 0 00.672 1.53l1.32 1.367zM7.758 9.308v-2.32a.52.52 0 00-.51-.532.52.52 0 00-.51.533v2.319a.52.52 0 00.51.533.52.52 0 00.51-.533zm-1.02-4.456a.52.52 0 00.51.533c.283 0 .51-.242.51-.533a.52.52 0 00-.51-.533.52.52 0 00-.51.533z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHotlineFilled;