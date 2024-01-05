/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconProcessLoadingLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.716 6.151c-.216 0-.356-.147-.356-.364V2.864c0-.22.144-.364.356-.364.216 0 .356.147.356.364v2.923c0 .22-.144.364-.356.364zm0 15.349c-.216 0-.356-.147-.356-.364v-2.923c0-.22.144-.364.356-.364.216 0 .356.147.356.364v2.923c0 .22-.144.364-.356.364zm3.108-.913c.036.148.176.221.32.221.036 0 .072 0 .144-.037.18-.073.252-.29.18-.474L15.36 17.59c-.072-.184-.284-.258-.464-.184-.18.074-.252.29-.18.475l1.108 2.705zm3.212-1.752a.323.323 0 01-.252-.11l-2.036-2.084a.357.357 0 010-.511.338.338 0 01.5 0l2.036 2.083a.357.357 0 010 .512.368.368 0 01-.248.11zm1.784-3c.036.037.108.037.144.037.144 0 .288-.106.32-.221.104-.184 0-.401-.18-.475l-2.644-1.134c-.18-.106-.392 0-.464.185-.104.184 0 .4.18.474l2.644 1.134zM7.108 9.99c-.036 0-.108 0-.144-.037L4.32 8.82c-.18-.074-.284-.29-.18-.475.072-.184.284-.29.464-.184l2.644 1.133c.18.074.284.291.18.475-.072.148-.176.221-.32.221zm11.68 2.374h2.856c.212 0 .356-.143.356-.364 0-.217-.14-.364-.356-.364h-2.856c-.212 0-.356.147-.356.364s.14.364.356.364zm-12.144 0h-2.86c-.216 0-.356-.147-.356-.364s.144-.364.356-.364H6.64c.216 0 .356.147.356.364a.355.355 0 01-.352.364zM18 9.77c.036.147.176.22.32.22.036 0 .108 0 .144-.037l2.644-1.133c.18-.074.252-.29.18-.475-.072-.184-.284-.258-.464-.184L18.18 9.294c-.18.074-.252.291-.18.475zM4.464 15.872c-.144 0-.284-.074-.32-.221-.072-.184 0-.401.18-.475l2.644-1.134c.18-.073.392 0 .464.185.072.184 0 .4-.18.474l-2.644 1.134c-.016.002-.04.01-.063.017a.315.315 0 01-.081.02zM16.748 7.87c.072.074.144.11.252.11a.31.31 0 00.248-.11l2.036-2.083a.357.357 0 000-.512.338.338 0 00-.5 0l-2.036 2.083a.357.357 0 000 .512zM6.392 18.835a.31.31 0 01-.248-.11.357.357 0 010-.512l2-2.046a.338.338 0 01.5 0 .357.357 0 010 .511l-2 2.047a.323.323 0 01-.252.11zm8.5-12.246c.036.037.108.037.144.037.144 0 .284-.07.32-.221l1.108-2.706c.104-.184 0-.4-.18-.475-.212-.07-.392 0-.464.185l-1.108 2.705c-.104.184 0 .401.18.475zM9.284 20.808c-.036 0-.108 0-.144-.037-.18-.073-.284-.29-.18-.474l1.108-2.706c.072-.184.284-.29.464-.184.18.074.284.29.18.475l-1.108 2.705c-.032.148-.176.221-.32.221zM2.716 8.349a.724.724 0 00.716-.733.724.724 0 00-.716-.732.724.724 0 00-.716.732c0 .405.32.733.716.733z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconProcessLoadingLight;
