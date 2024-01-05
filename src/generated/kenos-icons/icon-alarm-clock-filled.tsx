/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconAlarmClockFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M3.18 7.122a.742.742 0 01-.385-.112.736.736 0 01-.21-1.006A10.785 10.785 0 017.003 2.07a.718.718 0 01.957.34.73.73 0 01-.337.966A9.361 9.361 0 003.792 6.79a.734.734 0 01-.612.333zm17.626 0a.702.702 0 01-.603-.333 9.373 9.373 0 00-3.831-3.409.73.73 0 01-.337-.965.71.71 0 01.956-.34 10.861 10.861 0 014.41 3.93c.22.332.12.788-.218.997a.659.659 0 01-.377.12z" /><path fill="currentColor" d="M18.337 19.052a9.234 9.234 0 002.803-6.642c0-5.084-4.105-9.226-9.143-9.226-5.037 0-9.146 4.142-9.146 9.226a9.252 9.252 0 002.803 6.642l-1.7 1.714A.723.723 0 004.463 22a.713.713 0 00.508-.212l1.794-1.811a9.005 9.005 0 005.224 1.666 9.005 9.005 0 005.225-1.666l1.794 1.81a.712.712 0 001.016 0 .723.723 0 000-1.02l-1.687-1.715zm-5.804-5.921H8.405a.543.543 0 01-.54-.545c0-.3.242-.545.54-.545h3.048V6.805c0-.3.243-.544.54-.544.298 0 .54.244.54.544v6.326z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAlarmClockFilled;