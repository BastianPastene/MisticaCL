/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPostpayRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.408 19.208c.193.2.479.306.82.306.342 0 .636-.11.827-.306.19-.196.288-.467.288-.81 0-.697-.414-1.114-1.112-1.114-.697 0-1.112.417-1.112 1.115 0 .339.096.61.289.81zm5.179-8.425h3.286a.42.42 0 100-.84h-3.286a.42.42 0 100 .84zm0 1.638h3.286a.42.42 0 100-.84h-3.286a.42.42 0 100 .84zm3.286 1.639h-3.286a.42.42 0 110-.84h3.286a.42.42 0 110 .84z" /><path fill="currentColor" d="M6.951 21.847h6.555c1.106 0 1.91-.266 2.465-.812.555-.552.826-1.365.826-2.48v-2.45l1.113-.001h1.56c.523 0 .873-.352.873-.876V8.444a.55.55 0 00-.165-.395l-2.731-2.732a.55.55 0 00-.395-.165h-.262c-.045-.939-.313-1.645-.816-2.154-.563-.566-1.37-.843-2.468-.843H6.95c-1.109 0-1.919.272-2.47.826-.552.555-.821 1.362-.821 2.465v13.11c0 1.114.269 1.924.826 2.479.552.546 1.359.812 2.465.812zm8.717-16.695h-2.66c-.533 0-.889.356-.889.885v9.177c0 .532.356.89.888.89h2.67v2.452c0 1.582-.588 2.17-2.171 2.17H6.95c-1.582 0-2.17-.588-2.17-2.17V5.446c0-.792.159-1.341.492-1.675.334-.333.883-.496 1.678-.496h6.555c1.438 0 2.083.55 2.162 1.877zm-2.428 9.83v-8.71h2.983v.813c0 1.398.801 2.199 2.199 2.199h.798v5.697h-5.98zm4.103-8.183l1.364 1.364h-.285c-.39 0-.67-.084-.832-.246-.163-.163-.247-.443-.247-.832v-.286z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPostpayRegular;
