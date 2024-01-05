/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconClickAndCollectLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.856 7V5.572a3.573 3.573 0 00-7.144 0V7H6.856v3.928l.002.035.002.029-5.98 1.564a.345.345 0 00-.264.292.348.348 0 00.168.356l2.284 1.372-1.784 1.784a.259.259 0 00-.036.032l-.968.968 2.292 2.292.932-.936a.259.259 0 00.036-.032l1.82-1.82 1.372 2.284a.359.359 0 00.308.172c.02 0 .032 0 .056.004a.367.367 0 00.292-.264l2.144-8.216a.354.354 0 00-.436-.436l-1.524.396V7.708H19v12.148a1.07 1.07 0 01-1.068 1.068H9.36a.357.357 0 000 .712h8.572c.984 0 1.784-.8 1.788-1.784V7h-2.864zm-8.172 4.252l-1.772 6.804-1.172-1.952a.353.353 0 00-.26-.168.365.365 0 00-.296.1l-2.112 2.112a.259.259 0 00-.036.032l-.46.456-1.28-1.28.424-.424a.259.259 0 00.036-.032L3.9 14.756a.352.352 0 00.1-.296.349.349 0 00-.168-.26L1.88 13.028l6.804-1.776zM10.428 7V5.572a2.858 2.858 0 012.856-2.856 2.858 2.858 0 012.856 2.856V7h-5.712z" /><path fill="currentColor" d="M7.928 21.288a.712.712 0 11-1.424 0 .712.712 0 011.424 0z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconClickAndCollectLight;
