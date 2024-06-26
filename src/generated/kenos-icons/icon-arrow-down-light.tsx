/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconArrowDownLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.163 3.423a.707.707 0 01-.698-.711c0-.396.318-.712.698-.712.38 0 .698.316.698.712 0 .388-.31.711-.698.711zM2.987 12.992L12.002 22l9.023-9.008c.498-.512.643-1.264.357-1.96-.286-.703-.937-1.155-1.659-1.155h-4.207v-5.01a.353.353 0 00-.35-.356.353.353 0 00-.348.356v5.722h4.921c.533 0 .867.363 1.008.711.133.332.149.808-.208 1.172l-8.525 8.52L3.49 12.48c-.357-.364-.341-.848-.208-1.18.134-.34.475-.711 1.008-.711h4.898v-8.23a.353.353 0 00-.35-.355.353.353 0 00-.348.356v7.517H4.28c-.721 0-1.372.452-1.658 1.155-.279.696-.146 1.44.364 1.96z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowDownLight;
