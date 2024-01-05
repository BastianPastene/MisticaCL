/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconLanguageLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.013 18.679a.743.743 0 01-.741.74.743.743 0 01-.741-.74.74.74 0 111.482 0zm-.934-6.943a5.828 5.828 0 01-5.82 5.82 5.828 5.828 0 01-5.82-5.82 5.828 5.828 0 015.82-5.82 5.828 5.828 0 015.82 5.82zm-4.146-4.79c.708.978 1.175 2.567 1.23 4.42h2.157a5.088 5.088 0 00-3.387-4.42zm-3.838 4.42h1.793v-4.62c-.87.403-1.715 2.174-1.793 4.62zm0 .74c.078 2.446.922 4.216 1.793 4.62v-4.62h-1.793zm4.327 0H12.63v4.62c.87-.404 1.716-2.174 1.793-4.62zm0-.74c-.078-2.446-.922-4.217-1.793-4.62v4.62h1.793zm-7.224 0h2.156c.056-1.853.526-3.442 1.23-4.42a5.088 5.088 0 00-3.386 4.42zm3.386 5.16c-.708-.978-1.174-2.567-1.23-4.42H7.198a5.092 5.092 0 003.386 4.42zm6.736-4.42h-2.157c-.055 1.853-.526 3.442-1.23 4.42a5.092 5.092 0 003.387-4.42zm-4.954-10.11c-5.313 0-9.633 4.32-9.633 9.632 0 1.42.3 2.786.897 4.06l-1.623 5.843a.36.36 0 00.097.36.373.373 0 00.363.092l5.842-1.622a9.563 9.563 0 004.06.896 9.5 9.5 0 004.247-.985.37.37 0 00.082-.612.371.371 0 00-.409-.055 8.783 8.783 0 01-3.92.908 8.787 8.787 0 01-3.863-.882.351.351 0 00-.26-.022l-5.35 1.489 1.486-5.346a.37.37 0 00-.022-.26 8.81 8.81 0 01-.882-3.864c0-4.901 3.99-8.891 8.892-8.891 4.901 0 8.891 3.99 8.891 8.891a8.812 8.812 0 01-1.726 5.265.372.372 0 00.596.44 9.56 9.56 0 001.868-5.7c0-5.317-4.32-9.637-9.633-9.637z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLanguageLight;
