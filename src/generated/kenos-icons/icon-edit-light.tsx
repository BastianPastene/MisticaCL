/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconEditLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.959 6.616c.555.558.885 1.353.882 2.135-.003.778-.31 1.495-.89 2.07-.132.129-.78.714-1.71 1.543l.003.01v5.457c0 1.202-.335 2.168-.997 2.874-.703.75-1.706 1.131-2.977 1.131H6.127c-1.275 0-2.275-.38-2.978-1.131-.658-.706-.994-1.672-.994-2.874V6.21c0-2.504 1.521-4.059 3.972-4.059h9.14c2.288 0 3.77 1.384 3.944 3.62a3.04 3.04 0 011.748.845zm-2.535 11.219h-.003v-4.74a2487.131 2487.131 0 01-5.022 4.46l-.174.154a1.162 1.162 0 01-.403.232l-3.838 1.27a1.153 1.153 0 01-1.185-.284 1.157 1.157 0 01-.277-1.188l1.286-3.837c.067-.196.182-.367.333-.502 3.499-3.092 7.359-6.518 7.622-6.781a2.927 2.927 0 011.63-.846c-.16-1.776-1.277-2.798-3.123-2.798H6.127c-2.003 0-3.151 1.179-3.151 3.238v11.622c0 .986.26 1.764.773 2.313.54.58 1.342.874 2.378.874h9.143c1.036 0 1.837-.294 2.38-.874.513-.549.774-1.327.774-2.313zm-5.566-.897c6.19-5.484 7.364-6.551 7.515-6.703.423-.417.647-.932.65-1.487a2.226 2.226 0 00-.641-1.552 2.22 2.22 0 00-1.448-.639c-.031-.002-.065-.002-.098-.002-.41 0-.972.12-1.493.641-.334.336-5.154 4.608-7.659 6.818a.337.337 0 00-.098.148l-1.285 3.835a.34.34 0 00.428.432l3.838-1.27a.33.33 0 00.117-.067l.174-.154z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEditLight;