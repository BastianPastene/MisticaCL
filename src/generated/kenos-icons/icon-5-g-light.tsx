/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const Icon5GLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10a9.925 9.925 0 01-1.536 5.32c-.108.18-.324.216-.5.108-.18-.108-.216-.324-.108-.5a9.256 9.256 0 001.428-4.964c0-5.072-4.176-9.248-9.284-9.248-5.108 0-9.284 4.176-9.284 9.284 0 5.108 4.176 9.284 9.284 9.284a9.43 9.43 0 004.964-1.428c.18-.108.396-.072.5.108.104.18.072.396-.108.5A10.14 10.14 0 0112 22z" /><path fill="currentColor" d="M19.5 18.784a.716.716 0 11-1.432 0 .716.716 0 011.432 0zM10.932 12a3.2 3.2 0 003.212 3.212A3.2 3.2 0 0017.356 12c0-.212-.14-.356-.356-.356h-2.284a.338.338 0 00-.356.356c0 .212.14.356.356.356h1.892a2.498 2.498 0 01-2.464 2.144 2.486 2.486 0 01-2.5-2.5c0-1.392 1.108-2.5 2.5-2.5.644 0 1.288.252 1.752.716a.343.343 0 00.5 0 .343.343 0 000-.5 3.151 3.151 0 00-2.252-.928A3.2 3.2 0 0010.932 12zM7 15.212h1.428c1.036 0 1.82-.82 1.828-1.924 0-1.104-.788-2-1.824-2H7.36V9.504h2.496c.212 0 .356-.14.356-.356 0-.212-.14-.356-.356-.356H6.644v3.212h1.784c.68 0 1.108.64 1.108 1.284 0 .712-.464 1.212-1.108 1.212H7a.338.338 0 00-.356.356c0 .212.14.356.356.356z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default Icon5GLight;
