/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBriefcaseBusinessLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.147 5.853h-4.133C15.626 3.893 13.986 2.5 12 2.5c-2.019 0-3.796 1.45-4.199 3.353H3.853A1.862 1.862 0 002 7.717v11.551c0 1.025.83 1.865 1.853 1.865h11.479a.371.371 0 000-.744H3.853c-.611 0-1.109-.5-1.109-1.116V7.717c0-.615.498-1.116 1.11-1.116h16.293c.611 0 1.109.501 1.109 1.116v11.551c0 .615-.498 1.116-1.11 1.116h-.369a.371.371 0 000 .744h.37A1.862 1.862 0 0022 19.263V7.717a1.865 1.865 0 00-1.853-1.864zm-11.588 0C8.948 4.36 10.384 3.244 12 3.244c1.578 0 2.891 1.073 3.26 2.609h-6.7zM17.555 21.5a.743.743 0 00.739-.744.743.743 0 00-.74-.744.743.743 0 00-.739.744c0 .41.332.744.74.744zm-10.74-6.004c.228 0 .417.186.417.42v1.487c0 .23-.185.42-.417.42a.416.416 0 01-.417-.42v-1.492c0-.23.19-.415.417-.415zm3.934-2.003a.42.42 0 00-.417-.42.422.422 0 00-.417.42v3.91a.416.416 0 10.834 0v-3.91zm3.104-3.029c.228 0 .417.186.417.42v6.52a.42.42 0 01-.417.419.416.416 0 01-.417-.42v-6.519c0-.234.185-.42.417-.42zm3.284 6.94c0 .233.19.419.418.419.227 0 .417-.19.417-.42V8.461a.416.416 0 00-.418-.42.419.419 0 00-.417.42v8.942z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBriefcaseBusinessLight;
