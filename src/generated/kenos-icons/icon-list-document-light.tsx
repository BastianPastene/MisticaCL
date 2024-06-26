/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconListDocumentLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.283 22H5V3.854C5 2.834 5.804 2 6.797 2h10.057c.988 0 1.797.83 1.797 1.854v13.33c0 .203-.161.37-.359.37a.365.365 0 01-.358-.37V3.854c0-.612-.483-1.11-1.076-1.11H6.793c-.593 0-1.076.498-1.076 1.11V21.26h12.566c.198 0 .358.165.358.37 0 .203-.16.369-.358.369z" /><path fill="currentColor" d="M17.566 19.407a.73.73 0 01.717-.74.73.73 0 01.717.74.73.73 0 01-.717.74.726.726 0 01-.717-.74zM7.257 6.707l1.87 1.93 3.659-3.783a.376.376 0 000-.522.345.345 0 00-.506 0L9.123 7.59l-1.36-1.403a.349.349 0 00-.506 0 .371.371 0 000 .521zm1.87 7.04l-1.87-1.93a.372.372 0 010-.521.349.349 0 01.505 0l1.36 1.403 3.158-3.256a.345.345 0 01.506 0 .376.376 0 010 .521l-3.659 3.783zm-1.87 3.333l1.87 1.929 3.659-3.783a.376.376 0 000-.522.345.345 0 00-.506 0l-3.157 3.257-1.36-1.403a.349.349 0 00-.506 0 .371.371 0 000 .521z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconListDocumentLight;
