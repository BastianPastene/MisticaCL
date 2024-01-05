/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconDocumentsFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.77 9.892a.8.8 0 01.207.358.678.678 0 01.048.247v10.08c0 .687-.583 1.264-1.277 1.264H9.802c-.694 0-1.28-.577-1.28-1.263v-2.613h-4.29c-.668 0-1.253-.58-1.253-1.239V3.396c0-.672.574-1.241 1.255-1.241h9.563c.68 0 1.255.569 1.255 1.24v2.057h.804a.84.84 0 01.588.238l4.325 4.202zm-6.97-4.44V3.396l-9.568.017-.003 13.313 4.294-.016V6.715c0-.672.597-1.263 1.28-1.263h3.998zm4.216 4.633h1.152L16.26 7.259v1.137c0 .501.16.927.468 1.224.31.305.756.465 1.288.465z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDocumentsFilled;