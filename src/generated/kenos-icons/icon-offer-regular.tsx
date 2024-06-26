/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOfferRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.37 21.633a.712.712 0 001.244.005l1.587-2.824 2.937 1.348a.714.714 0 001.006-.733l-.37-3.219 3.17-.637a.706.706 0 00.54-.481.725.725 0 00-.156-.706l-2.191-2.384 2.19-2.383a.712.712 0 00.156-.706.72.72 0 00-.54-.482l-3.17-.637.371-3.218a.704.704 0 00-.288-.66.712.712 0 00-.718-.073L14.2 5.19l-1.587-2.823a.711.711 0 00-1.245 0L9.782 5.19 6.845 3.843a.722.722 0 00-.718.073.724.724 0 00-.288.66l.375 3.218-3.17.637a.706.706 0 00-.54.482.725.725 0 00.156.706l2.191 2.383-2.191 2.384a.712.712 0 00-.156.706.72.72 0 00.54.481l3.17.637-.375 3.218a.708.708 0 00.288.66.7.7 0 00.718.074l2.937-1.352 1.587 2.823zm-.664-4.093a.708.708 0 00-.92-.303l-2.382 1.096.301-2.608a.71.71 0 00-.567-.784l-2.57-.518 1.774-1.935a.72.72 0 000-.972L4.567 9.582l2.571-.518a.717.717 0 00.567-.784l-.301-2.608 2.383 1.095a.71.71 0 00.92-.298l1.284-2.287 1.286 2.292c.183.32.58.454.92.298l2.383-1.096-.302 2.609a.71.71 0 00.567.784l2.57.518-1.774 1.934a.72.72 0 000 .972l1.775 1.934-2.571.518a.717.717 0 00-.567.784l.302 2.608-2.384-1.095a.71.71 0 00-.92.298l-1.284 2.287-1.286-2.287z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOfferRegular;
