/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconHeadphoneBluetoothLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.488 14.5c0-.196.155-.356.345-.356.19 0 .346.16.35.356v4.108c0 1.932-1.343 3.392-3.119 3.392h-1.385v-6.788h1.385c1 0 1.862.464 2.424 1.212V14.5zm-3.118 6.784h.694c1.38 0 2.424-1.148 2.424-2.676 0-1.528-1.043-2.68-2.424-2.68h-.694v5.356zm4.158-8.928a.705.705 0 01-.695.716.705.705 0 01-.694-.716c0-.395.31-.716.694-.716.384 0 .695.32.695.716zM3.17 11.644v4.78a2.988 2.988 0 012.424-1.208h1.389V22H5.598c-1.78 0-3.118-1.456-3.118-3.392l.002-.071.002-.065c-.004-.016-.004-.028-.004-.044v-6.784c0-2.576.97-5 2.738-6.82C6.983 3.004 9.33 2 11.828 2c2.249 0 4.42.836 6.116 2.352a9.726 9.726 0 013.126 5.816.359.359 0 01-.291.408.35.35 0 01-.396-.3c-.643-4.308-4.32-7.56-8.556-7.56-4.77 0-8.657 4.004-8.657 8.928zm2.424 9.64h.695v-5.36h-.695c-1.38 0-2.424 1.152-2.424 2.68 0 1.528 1.044 2.68 2.424 2.68z" /><path fill="currentColor" d="M12.068 9.908l-.004-1.132.55.568-.546.564z" /><path fill="currentColor" d="M9.341 10.508c0-2.712 1-3.424 2.451-3.424s2.448.712 2.448 3.424c0 2.712-.997 3.424-2.448 3.424-1.45 0-2.45-.712-2.45-3.424zm2.234 2.948l1.722-1.776-1.136-1.172 1.136-1.172-1.722-1.776v2.344l-.946-.976-.341.352 1.186 1.232-1.187 1.224.342.356.946-.976v2.34z" /><path fill="currentColor" d="M12.064 12.244l.55-.564-.546-.564-.004 1.128z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHeadphoneBluetoothLight;
