/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWinnerPoundRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.96 12.81c0-.396.318-.72.708-.72.18 0 .283-.144.318-.324v-1.334H9.74a.716.716 0 01-.709-.72c0-.395.319-.719.709-.719h.247V7.77c0-1.227.925-2.162 2.13-2.162.354 0 .92.036 1.416.508.319.252.319.72.07 1.007-.247.324-.708.324-.99.072-.107-.108-.213-.144-.497-.144-.425 0-.708.252-.708.72v1.222h1.204c.39 0 .708.324.708.72a.716.716 0 01-.708.719h-1.204v1.334c0 .054-.009.108-.018.162a1 1 0 00-.017.162h2.553c.39 0 .709.324.709.72a.716.716 0 01-.709.718H9.668a.716.716 0 01-.709-.719z" /><path fill="currentColor" d="M19.922 18.288l-2.058-3.6c1.098-1.335 1.74-3.062 1.74-4.94 0-4.287-3.408-7.748-7.63-7.748C7.75 2 4.347 5.46 4.347 9.748c0 1.874.638 3.569 1.704 4.9l-1.987 3.676c-.106.18-.07.431.036.615.141.18.354.252.566.18l3.014-.935.921 3.42a.58.58 0 00.46.396h.072a.552.552 0 00.46-.288l2.377-4.215 2.377 4.251c.106.18.283.252.46.252h.07c.213-.036.39-.18.426-.396l.92-3.42 3.086.935a.5.5 0 00.566-.18.583.583 0 00.047-.651zM11.974 3.443c3.407 0 6.21 2.845 6.21 6.305 0 3.46-2.803 6.302-6.21 6.302-3.408 0-6.206-2.845-6.206-6.302 0-3.456 2.802-6.305 6.206-6.305zm-3.369 13.91a.573.573 0 00-.248-.324.584.584 0 00-.425-.036l-2.306.683 1.205-2.197a7.598 7.598 0 003.939 1.946l-1.456 2.629-.709-2.701zm7.414-.364a.584.584 0 00-.425.036.464.464 0 00-.248.324l-.744 2.737-1.558-2.665a7.297 7.297 0 004.01-1.946l1.243 2.197-2.278-.683z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWinnerPoundRegular;
