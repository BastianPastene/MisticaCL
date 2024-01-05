/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconConfigureDeviceLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.937 7.211h.363c.325 0 .543.252.655.572v1.394c0 .32-.256.535-.544.535h-.362a4.627 4.627 0 01-.363.86l.256.25a.56.56 0 01.144.357.513.513 0 01-.144.357l-1.017.965a.531.531 0 01-.762 0l-.256-.252a3.115 3.115 0 01-.873.357v.356a.539.539 0 01-.144.393c-.112.069-.256.142-.4.142h-1.417a.531.531 0 01-.543-.535v-.356a4.786 4.786 0 01-.873-.357l-.256.252a.53.53 0 01-.762 0l-1.017-1.002c-.107-.073-.144-.214-.144-.356s.037-.252.144-.357l.255-.251a3.015 3.015 0 01-.362-.86h-.325a.531.531 0 01-.544-.534V7.746c0-.32.256-.535.544-.535h.362c.107-.32.218-.603.363-.854l-.256-.252c-.107-.073-.144-.215-.144-.356 0-.037 0-.106.037-.179H3.785v12.86h7.623c.218 0 .362.141.362.356s-.144.357-.362.357H3.822a2.527 2.527 0 002.504 2.144h6.532c1.416 0 2.54-1.106 2.54-2.5v-3.928c0-.214.145-.356.363-.356s.362.142.362.356v3.927c0 1.788-1.45 3.214-3.266 3.214h-6.53c-1.817 0-3.266-1.426-3.266-3.214V5.214C3.06 3.426 4.51 2 6.326 2h6.532c1.087 0 2.104.535 2.685 1.394h.873c.325 0 .543.247.543.535v.357c.33.105.618.215.874.356l.255-.251a.53.53 0 01.762 0l.98 1.001a.56.56 0 01.145.357.513.513 0 01-.145.356l-.255.252c.181.283.288.571.362.854zm-7.08-4.498h-6.53a2.527 2.527 0 00-2.504 2.144h8.376l.436-.466a.53.53 0 01.762 0l.256.251c.293-.178.585-.283.873-.356v-.32a.51.51 0 01.219-.43 2.535 2.535 0 00-1.886-.823zm7.262 6.25V7.924h-.725l-.074-.284a3.34 3.34 0 00-.474-1.143l-.144-.251.506-.498-.725-.714-.506.499-.256-.142c-.325-.215-.724-.361-1.161-.466l-.288-.073v-.714h-1.017v.714l-.288.073a3.46 3.46 0 00-1.162.466l-.255.142-.507-.499-.724.714.506.498-.144.251c-.218.32-.367.713-.474 1.143l-.074.284h-.725v1h.725l.074.32c.074.357.218.75.474 1.144l.144.251-.506.498.724.713.507-.498.255.142c.325.215.725.361 1.162.466l.288.073v.713h1.017v-.75l.288-.036a3.459 3.459 0 001.161-.466l.256-.142.506.498.725-.713-.506-.498.144-.251c.218-.32.367-.714.474-1.143l.074-.284h.725zm-7.261-.536c0-1.179.692-2.249 1.779-2.715a2.915 2.915 0 013.191.613c.837.854 1.055 2.107.618 3.213a2.863 2.863 0 01-2.685 1.82c-1.598 0-2.903-1.321-2.903-2.93zm4.9.855c.363-.818.182-1.783-.473-2.46-.618-.607-1.561-.822-2.36-.465a2.292 2.292 0 00-1.343 2.07c0 1.212.98 2.213 2.179 2.213.873 0 1.672-.535 1.998-1.358zm-3.446 9.5a.72.72 0 00-.725-.713.717.717 0 00-.725.713.72.72 0 00.725.713c.4 0 .725-.32.725-.713z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconConfigureDeviceLight;
