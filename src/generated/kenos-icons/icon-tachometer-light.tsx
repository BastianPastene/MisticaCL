/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTachometerLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M22 14.422c0 .962-.128 1.915-.375 2.834a.352.352 0 01-.439.258.371.371 0 01-.246-.458 9.986 9.986 0 00.347-2.634 9.904 9.904 0 00-1.956-5.935l-4.488 8.126a3.398 3.398 0 01-.334.414 3.45 3.45 0 01-2.5 1.077 3.46 3.46 0 01-2.504-1.076c-1.38-1.439-1.38-3.778 0-5.216a3.267 3.267 0 01.397-.348l5.014-3.01a6.214 6.214 0 00-2.911-.734c-3.542 0-6.426 3.006-6.426 6.697 0 1.868.763 3.668 2.093 4.935a.381.381 0 01.023.524.34.34 0 01-.265.12.346.346 0 01-.243-.1 7.612 7.612 0 01-2.326-5.483c0-4.106 3.204-7.44 7.139-7.44 1.303 0 2.55.366 3.638 1.038l-.443.266 2.495-1.495a8.996 8.996 0 00-5.695-2.039c-5.118 0-9.282 4.34-9.282 9.674 0 1.772.466 3.511 1.344 5.016a.38.38 0 01-.12.51.335.335 0 01-.182.052.353.353 0 01-.306-.18A10.678 10.678 0 012 14.421C2 8.678 6.484 4 12 4c2.413 0 4.63.896 6.357 2.386l2.034-1.219a.342.342 0 01.43.057.38.38 0 01.055.448l-1.17 2.12A10.652 10.652 0 0122 14.422zm-.718 4.835c0 .41-.32.743-.712.743-.394 0-.713-.333-.713-.743s.32-.743.713-.743c.392 0 .712.333.712.743zm-11.014-7.16a2.142 2.142 0 00-.265.244c-1.102 1.148-1.102 3.015 0 4.163a2.747 2.747 0 003.994 0c.087-.09.165-.181.233-.277l5.37-9.726-9.332 5.597z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTachometerLight;