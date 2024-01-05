/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const Icon4GRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2.4 18v2A1.6 1.6 0 004 21.6h1A1.6 1.6 0 006.6 20v-2A1.6 1.6 0 005 16.4H4A1.6 1.6 0 002.4 18zm1.6-.4h1c.22 0 .4.18.4.4v2a.4.4 0 01-.4.4H4a.4.4 0 01-.4-.4v-2c0-.22.18-.4.4-.4zM7.4 14A1.6 1.6 0 019 12.4h1a1.6 1.6 0 011.6 1.6v6a1.6 1.6 0 01-1.6 1.6H9A1.6 1.6 0 017.4 20v-6zm1.6-.4a.4.4 0 00-.4.4v6c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-6a.4.4 0 00-.4-.4H9zm3.4-2.6v9a1.6 1.6 0 001.6 1.6h1a1.6 1.6 0 001.6-1.6v-9A1.6 1.6 0 0015 9.4h-1a1.6 1.6 0 00-1.6 1.6zm1.6-.4h1c.22 0 .4.18.4.4v9a.4.4 0 01-.4.4h-1a.4.4 0 01-.4-.4v-9c0-.22.18-.4.4-.4zM17.4 6A1.6 1.6 0 0119 4.4h1A1.6 1.6 0 0121.6 6v14a1.6 1.6 0 01-1.6 1.6h-1a1.6 1.6 0 01-1.6-1.6V6zm1.6-.4a.4.4 0 00-.4.4v14c0 .22.18.4.4.4h1a.4.4 0 00.4-.4V6a.4.4 0 00-.4-.4h-1zM5 8.432h1.626V7.274h.762V5.842h-.762V2.104H4.38L2 6.004v1.27h3v1.158zm0-4.905v2.315H3.57L5 3.527zm2.832 1.746c0 2.01 1.523 3.272 3.394 3.272 1.185 0 2.097-.483 2.774-1.233V4.836h-3.028v1.357h1.439v.531c-.254.209-.696.38-1.185.38-1.025 0-1.749-.797-1.749-1.831 0-1.034.724-1.831 1.75-1.831.591 0 1.071.332 1.325.75l1.354-.722c-.46-.787-1.307-1.47-2.68-1.47-1.871 0-3.394 1.262-3.394 3.273z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default Icon4GRegular;