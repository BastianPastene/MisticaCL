/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRocketRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.151 3.887l.634-.634a.734.734 0 00-1.038-1.038l-.615.615a3.686 3.686 0 00-2.085-.62 3.76 3.76 0 00-2.621 1.109L9.555 9.186 4.947 7.983l-2.921 2.391 3.095 3.241-.756.757 5.265 5.265.714-.714 3.057 3.04 2.616-2.88-1.202-4.636 5.871-5.872a3.727 3.727 0 00.465-4.688zm-4.105 4.35c.705 0 1.282-.573 1.282-1.283 0-.704-.577-1.282-1.282-1.282-.704 0-1.282.578-1.282 1.282 0 .705.578 1.283 1.282 1.283zM6.16 12.577l-1.977-2.071L5.3 9.594l3.053.794-2.193 2.19zm5.223 5.308l2.23-2.236.79 3.035-1.052 1.155-1.968-1.954zm8.261-13.528a2.248 2.248 0 010 3.18L9.63 17.561l-3.19-3.19L16.465 4.358a2.28 2.28 0 011.597-.677 2.17 2.17 0 011.366.456l.216.22zM5.463 17.758a.55.55 0 11.78.78l-3.3 3.302a.547.547 0 01-.39.16.55.55 0 01-.39-.94l3.302-3.302zm-2.911.573c.14 0 .282-.051.39-.16l1.465-1.47a.55.55 0 000-.78.55.55 0 00-.78 0l-1.465 1.466a.55.55 0 000 .78.533.533 0 00.39.164zm3.283 2.73L7.3 19.595a.55.55 0 01.78 0 .55.55 0 010 .78L6.615 21.84a.547.547 0 01-.39.16.55.55 0 01-.39-.94z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRocketRegular;
