/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOpticalFiberRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.383 6.342a1.623 1.623 0 00-1.451 2.328l-4.782 4.832-1.388-1.402 6.934-7.008c.211.102.445.162.692.162.888 0 1.612-.731 1.612-1.63a1.62 1.62 0 00-1.617-1.62 1.623 1.623 0 00-1.451 2.329l-6.93 7.003-1.387-1.403L15.4 5.097a1.6 1.6 0 00.692.161c.889 0 1.612-.73 1.612-1.629 0-.898-.724-1.629-1.612-1.629a1.623 1.623 0 00-1.452 2.328L9.854 9.165l-.146-.148a1.365 1.365 0 00-1.946 0L2 14.863 9.685 22l5.358-5.628a1.405 1.405 0 000-1.967l-.132-.135 4.785-4.837c.211.102.445.162.692.162.888 0 1.612-.73 1.612-1.629 0-.898-.728-1.624-1.617-1.624zm0-3.254a.54.54 0 01.536.541.54.54 0 01-.536.542.542.542 0 010-1.083zm-3.755.541a.54.54 0 01-.536.542.54.54 0 01-.536-.542.54.54 0 01.536-.541.54.54 0 01.536.541zM9.62 19.977l-5.556-5.16 4.672-4.74 5.253 5.313-4.37 4.587zM19.847 7.971c0-.296.243-.542.536-.542a.542.542 0 010 1.083.54.54 0 01-.535-.541z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOpticalFiberRegular;
