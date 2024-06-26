/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconUserSupportRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.893 14.69c-.38 0-.693-.327-.693-.727a4.29 4.29 0 011.177-2.983l.933-.98c.347-.363.278-1.163 0-1.563-.278-.4-.762-.655-1.211-.655h-.175c-.484 0-.934.292-1.178.727-.205.364-.624.472-.933.256a.71.71 0 01-.244-.98 2.732 2.732 0 012.389-1.455h.175c.903 0 1.768.436 2.32 1.2.66.907.762 2.543-.103 3.454l-.933.98a2.82 2.82 0 00-.762 1.963c-.069.436-.381.764-.762.764zm.659 1.384c0 .402-.31.728-.693.728-.383 0-.694-.326-.694-.728 0-.402.31-.727.694-.727.383 0 .693.325.693.727z" /><path fill="currentColor" d="M3.165 22a.664.664 0 01-.484-.216.718.718 0 01-.175-.692l1.455-5.565a9.948 9.948 0 01-.796-3.89C3.165 6.326 7.287 2 12.346 2c5.06 0 9.182 4.326 9.182 9.636s-4.122 9.636-9.182 9.636c-1.283 0-2.53-.292-3.706-.8l-5.303 1.492C3.302 22 3.234 22 3.165 22zm9.178-18.545c-4.298 0-7.795 3.675-7.795 8.181 0 1.236.244 2.4.762 3.49.069.145.069.329.034.508l-1.211 4.623 4.362-1.24c.175-.036.347-.036.484.036 1.04.508 2.183.8 3.326.8 4.331-.036 7.828-3.707 7.828-8.217 0-4.51-3.497-8.18-7.79-8.18z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconUserSupportRegular;
