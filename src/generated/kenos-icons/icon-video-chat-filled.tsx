/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconVideoChatFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.347 21.279c5.072 0 9.18-4.315 9.18-9.64S17.415 2 12.343 2s-9.181 4.314-9.181 9.64c0 1.433.303 2.79.836 4.014L2.492 21.56a.356.356 0 00.086.337.33.33 0 00.235.104.271.271 0 00.086-.014l5.632-1.58a8.759 8.759 0 003.816.873zM17.468 9.83l-1.722 1.808 1.722 1.809V9.83zm1.058-1.343v6.303a.554.554 0 01-.325.512.518.518 0 01-.579-.119l-2.274-2.387v2.364H7.225V8.118h8.123v2.363l2.274-2.387a.519.519 0 01.579-.119c.194.086.325.29.325.513zM14.29 14.05H8.287V9.228h6.003v4.822z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconVideoChatFilled;
