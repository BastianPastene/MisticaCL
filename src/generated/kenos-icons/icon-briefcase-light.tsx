/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBriefcaseLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.076 5.27c1.08 0 1.924.873 1.924 1.98v11.875c0 1.111-.848 1.98-1.924 1.98-.228 0-.384-.16-.384-.395 0-.235.152-.395.384-.395.656 0 1.156-.52 1.156-1.19V12H2.768v7.12c0 .676.504 1.19 1.156 1.19h11.54c.228 0 .384.161.384.396 0 .234-.152.395-.384.395H3.924C2.844 21.1 2 20.228 2 19.12V7.25c0-1.111.844-1.98 1.924-1.98h4.652C8.768 3.727 10.228 2.5 12 2.5s3.192 1.227 3.424 2.77h4.652zm-5.42.004c-.232-1.111-1.308-1.98-2.656-1.98s-2.424.869-2.656 1.98h5.312zM2.768 11.206h18.468v-3.96c0-.675-.504-1.19-1.156-1.19H3.924c-.656 0-1.156.519-1.156 1.19v3.96z" /><path fill="currentColor" d="M17.768 21.5a.783.783 0 00.772-.794.783.783 0 00-.772-.795.783.783 0 00-.772.795c0 .438.346.794.772.794z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBriefcaseLight;
