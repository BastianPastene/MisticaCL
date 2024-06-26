/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const Icon4GFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M3 18a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm5-4a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7zm5-3a1 1 0 011-1h1a1 1 0 011 1v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V11zm5-5a1 1 0 011-1h1a1 1 0 011 1v15a1 1 0 01-1 1h-1a1 1 0 01-1-1V6zM5 8.432h1.626V7.274h.762V5.842h-.762V2.104H4.38L2 6.004v1.27h3v1.158zm0-4.905v2.315H3.57L5 3.527zm2.832 1.746c0 2.01 1.523 3.272 3.394 3.272 1.185 0 2.097-.483 2.774-1.233V4.836h-3.028v1.357h1.439v.531c-.254.209-.696.38-1.185.38-1.025 0-1.749-.797-1.749-1.831 0-1.034.724-1.831 1.75-1.831.591 0 1.071.332 1.325.75l1.354-.722c-.46-.787-1.307-1.47-2.68-1.47-1.871 0-3.394 1.262-3.394 3.273z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default Icon4GFilled;
