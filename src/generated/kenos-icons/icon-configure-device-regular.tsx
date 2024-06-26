/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconConfigureDeviceRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.244 8.206h-.252a3.167 3.167 0 00-.32-.713l.178-.179a.705.705 0 00.216-.498.705.705 0 00-.216-.499l-1.04-1.07a.675.675 0 00-.5-.215.676.676 0 00-.499.215l-.179.179a4.307 4.307 0 00-.715-.284v-.284a.715.715 0 00-.714-.713h-.252l-.18-.357A3.485 3.485 0 0012.73 2H6.534C4.636 2 3.06 3.573 3.06 5.467v13.066A3.474 3.474 0 006.534 22h6.3a3.474 3.474 0 003.474-3.467v-3.325c.142-.036.252-.105.357-.178a.705.705 0 00.216-.499v-.251c.252-.073.467-.178.715-.32l.178.178a.698.698 0 001.004 0l1.072-1.07c.284-.284.284-.714 0-1.038l-.178-.179c.105-.215.215-.466.284-.713h.284c.394 0 .715-.32.715-.714V8.961c.004-.435-.317-.755-.71-.755zm-9.275-.892l.18.179a4.287 4.287 0 00-.285.713h-.289a.715.715 0 00-.715.714v1.463c0 .394.321.714.715.714h.252c.074.251.179.466.321.713l-.179.179a.673.673 0 00-.215.498c0 .142.037.32.215.499l1.073 1.07a.742.742 0 001.04 0l.179-.179c.215.106.467.215.715.284v.32c0 .393.32.714.714.714h.18v2.858H4.49V5.92h6.837l-.358.356a.673.673 0 00-.215.499.76.76 0 00.215.54zm1.76-3.896c.646 0 1.219.283 1.613.786-.252.106-.394.357-.394.645H4.6a2.04 2.04 0 011.934-1.431h6.195zm.106 17.15H6.534c-.93 0-1.682-.608-1.934-1.426h10.205c-.289.818-1.077 1.427-1.97 1.427zm6.3-10.505l-.105.43c-.105.43-.252.855-.5 1.18l-.215.357.536.498-.572.572-.5-.499-.362.215c-.43.252-.788.43-1.182.499l-.431.073v.75h-.788v-.75l-.431-.105c-.43-.105-.825-.252-1.182-.499l-.358-.215-.5.499-.572-.572.5-.498-.216-.357c-.252-.43-.43-.787-.5-1.18l-.068-.434h-.752V9.24h.752l.105-.43c.106-.43.252-.823.5-1.18l.215-.357-.5-.498.573-.572.5.499.357-.215c.431-.252.788-.43 1.183-.499l.43-.073V5.2h.789v.755l.43.105c.431.105.825.252 1.183.499l.357.215.5-.535.572.571-.5.499.216.357c.252.43.431.786.5 1.18l.073.43h.715v.786h-.752zm-4.76-2.895c.998-.425 2.144-.215 2.9.576.751.782.967 1.962.573 2.964-.431 1.002-1.398 1.678-2.47 1.678-1.467 0-2.649-1.216-2.649-2.716a2.73 2.73 0 011.645-2.502zm1.035 4.148c.641 0 1.214-.393 1.466-1.001.252-.645.11-1.359-.357-1.82-.468-.463-1.146-.609-1.719-.357-.573.251-.967.86-.967 1.536 0 .892.715 1.642 1.577 1.642z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconConfigureDeviceRegular;
