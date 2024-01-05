/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTrashCanRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.534 7.355a.713.713 0 00-.707.716v10.354c0 .392.316.716.707.716a.71.71 0 00.706-.716V8.07a.716.716 0 00-.707-.716zm4.229.715v10.355c0 .392.316.716.707.716a.71.71 0 00.707-.716V8.07a.713.713 0 00-.707-.716.713.713 0 00-.707.716z" /><path fill="currentColor" d="M15.177 4.5h5.64a.713.713 0 01.004 1.427h-1.41v13.93c0 1.18-.952 2.143-2.117 2.143H6.714c-1.165 0-2.117-.964-2.117-2.144V5.931h-1.41a.71.71 0 01-.707-.716c0-.396.32-.715.707-.715h5.64v-.356c0-1.18.951-2.144 2.116-2.144h2.117c1.165 0 2.117.964 2.117 2.144V4.5zm-4.23-1.072a.713.713 0 00-.707.716h.004V4.5h3.527v-.356a.713.713 0 00-.707-.716h-2.117zm7.05 16.424V5.927H6.007v13.925c0 .396.32.716.707.716H17.29a.713.713 0 00.707-.716z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTrashCanRegular;