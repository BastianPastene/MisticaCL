/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconAlarmClockLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.687 2.71a10.293 10.293 0 014.129 3.674c.076.112.187.189.298.189.075 0 .15-.036.186-.077.187-.112.223-.336.112-.524-1.08-1.69-2.605-3.078-4.427-3.943-.187-.076-.409 0-.485.188-.075.192 0 .417.187.493zm-5.066 3.903v5.628H8.274c-.222 0-.373.152-.373.376s.151.376.373.376h4.094v-6.38c0-.225-.151-.377-.373-.377-.219 0-.374.148-.374.377zm-8.928-.095L2.657 6.5c-.187-.116-.227-.34-.115-.524 1.08-1.69 2.604-3.078 4.43-3.943.187-.076.41 0 .485.188.075.188 0 .413-.187.489a10.33 10.33 0 00-4.129 3.678c-.036.112-.187.189-.298.189a.508.508 0 01-.15-.059zm17.492 10.975a.75.75 0 01-.747.752.75.75 0 01-.746-.752.75.75 0 01.746-.753.75.75 0 01.747.753z" /><path fill="currentColor" d="M11.995 2.822h.186c5.249.112 9.417 4.463 9.346 9.759a9 9 0 01-.56 3.114c-.075.188-.298.3-.484.224-.187-.076-.298-.3-.223-.488.334-.937.52-1.913.52-2.89.072-4.84-3.76-8.89-8.599-8.967-4.836-.076-8.818 3.791-8.893 8.667a8.753 8.753 0 008.631 8.966 8.625 8.625 0 005.733-2.025.354.354 0 01.108-.119.692.692 0 00.078-.07l.485.57 1.786 1.8a.36.36 0 010 .525.398.398 0 01-.262.112.398.398 0 01-.262-.112l-1.822-1.837a9.408 9.408 0 01-5.697 1.913h-.187a9.319 9.319 0 01-5.546-1.953l-1.858 1.873a.398.398 0 01-.262.112.398.398 0 01-.262-.112.36.36 0 010-.524l1.787-1.802a9.636 9.636 0 01-3.2-7.317c.079-5.216 4.32-9.42 9.457-9.42z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAlarmClockLight;