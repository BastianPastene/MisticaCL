/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTrainFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.5 9.638V22h-1.398a.1.1 0 01-.014-.023l-2.834-2.89A1.804 1.804 0 0017 17.27v-.465a1.067 1.067 0 01-.713.284 1.08 1.08 0 01-1.07-1.09c0-.6.48-1.089 1.07-1.089.274 0 .526.107.713.284V13.46H7v1.736c.192-.172.439-.284.713-.284.59 0 1.07.489 1.07 1.09 0 .6-.48 1.089-1.07 1.089-.274 0-.526-.107-.713-.284v.465c0 .987.782 1.792 1.746 1.815l-2.843 2.89L5.89 22H4.5V9.638C4.5 5.426 7.864 2 12 2s7.5 3.426 7.5 7.638zm-5.759 9.453L16.593 22H7.398l2.86-2.909h3.483zM17 8.911c0-1-.8-1.82-1.787-1.82H8.787C7.804 7.092 7 7.907 7 8.912v3.454h10V8.912z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTrainFilled;
