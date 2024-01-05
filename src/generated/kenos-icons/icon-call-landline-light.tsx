/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconCallLandlineLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.068 21.012a.353.353 0 00.338.276.352.352 0 00.085-.016c2.482-.6 5.01-2.18 7.302-4.57 3.024-3.14 4.75-6.529 4.735-9.281-.008-1.377-.462-2.557-1.303-3.425l-1.373-1.4c-.745-.753-1.9-.8-2.575-.097l-2.055 2.137c-.31.316-.477.756-.477 1.224 0 .524.22 1.044.597 1.425l1.435 1.464c.314.316.469.736.469 1.256.008 1.164-.764 2.633-2.098 4.025-1.993 2.073-4.099 2.785-5.126 1.74l-1.435-1.464c-.745-.752-1.9-.8-2.575-.096l-2.055 2.137c-.31.316-.477.756-.477 1.224 0 .524.221 1.044.597 1.424l1.373 1.4c.225.22.47.429.744.6.163.109.377.06.477-.111a.356.356 0 00-.108-.492 3.844 3.844 0 01-.62-.505L3.57 18.495a1.325 1.325 0 01-.392-.924c0-.284.093-.532.275-.72l2.048-2.145c.407-.424 1.124-.372 1.593.104l1.435 1.465c1.319 1.344 3.832.624 6.108-1.749 1.465-1.532 2.307-3.184 2.3-4.537 0-.704-.237-1.312-.675-1.756l-1.435-1.465a1.306 1.306 0 01-.392-.916c0-.284.093-.532.275-.72l2.056-2.136c.407-.425 1.124-.373 1.593.104l1.373 1.4c.73.744 1.098 1.732 1.105 2.933.008 2.564-1.64 5.765-4.537 8.778-2.206 2.292-4.618 3.797-6.972 4.373a.352.352 0 00-.26.428z" /><path fill="currentColor" d="M7.335 22c.381 0 .69-.319.69-.712a.701.701 0 00-.69-.712.701.701 0 00-.69.712c0 .393.309.712.69.712z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCallLandlineLight;