/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMusicFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.518 2.72a.762.762 0 00-.276-.576.647.647 0 00-.622-.108L8.518 5.64A.688.688 0 008 6.324v9.187a3.257 3.257 0 00-2.075-.72c-1.902 0-3.455 1.623-3.455 3.6C2.47 20.37 4.02 22 5.922 22s3.455-1.622 3.455-3.6V6.867l10.722-3.209v8.612a3.257 3.257 0 00-2.075-.72c-1.902 0-3.455 1.623-3.455 3.6 0 1.979 1.557 3.601 3.455 3.601 1.898 0 3.456-1.622 3.456-3.6.038-.036.038-12.432.038-12.432z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMusicFilled;
