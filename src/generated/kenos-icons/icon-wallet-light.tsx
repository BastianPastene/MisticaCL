/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWalletLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17 7.164h3.214A1.786 1.786 0 0122 8.95v10.893a1.786 1.786 0 01-1.786 1.785h-1.428a.357.357 0 010-.714h1.428a1.072 1.072 0 001.072-1.071v-8.34H4.857a.357.357 0 010-.714h2.5L5.54 8.964a1.164 1.164 0 01-.357-.828c.002-.087.012-.173.032-.258H3.786A1.071 1.071 0 002.714 8.95v10.893a1.072 1.072 0 001.072 1.071H14.5a.357.357 0 110 .714H3.786A1.786 1.786 0 012 19.843V8.95a1.786 1.786 0 011.786-1.786H5.66l4.832-4.821a1.207 1.207 0 011.664 0L17 7.164zm-11.11.972c0 .121.049.238.135.325l2.329 2.314h2.31a1.808 1.808 0 00-2.571-2.543.357.357 0 11-.504-.507 2.521 2.521 0 012.772-.532 1.71 1.71 0 112.885.864 1.692 1.692 0 01-1.178.518c-.12 0-.24-.012-.357-.036.131.312.199.647.2.986a2.5 2.5 0 01-.357 1.264h1.953l-.157-.153a.358.358 0 11.507-.508l.66.665h1.59L14.59 9.278a.358.358 0 11.507-.507l2.011 2.018h2.5l-7.953-7.953a.472.472 0 00-.654 0L6.025 7.807a.471.471 0 00-.136.329zm6.147-.287c.263 0 .515-.1.706-.281a1 1 0 10-1.41 0c.19.18.442.281.704.281zm5.677.03l2.904 2.903.668.007V8.95a1.072 1.072 0 00-1.072-1.07h-2.5z" /><path fill="currentColor" d="M17.396 21.278a.714.714 0 11-1.428 0 .714.714 0 011.428 0z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWalletLight;
