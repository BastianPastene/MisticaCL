/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOfferFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.338 14.383a.725.725 0 01.155.706.706.706 0 01-.54.481l-3.17.637.37 3.217a.713.713 0 01-1.005.734L14.21 18.81l-1.587 2.823a.711.711 0 01-1.244 0L9.791 18.81l-2.937 1.348a.701.701 0 01-.718-.074.708.708 0 01-.288-.66l.375-3.217-3.17-.637a.72.72 0 01-.54-.481.711.711 0 01.156-.706L4.86 12 2.67 9.617a.724.724 0 01-.156-.706.706.706 0 01.54-.481l3.17-.637-.375-3.217a.723.723 0 01.288-.66.723.723 0 01.718-.074L9.792 5.19l1.587-2.823a.711.711 0 011.244 0l1.588 2.823 2.937-1.348a.712.712 0 01.718.074c.21.15.32.403.288.66l-.37 3.217 3.17.637a.72.72 0 01.54.481.712.712 0 01-.156.706L19.147 12l2.19 2.383z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOfferFilled;