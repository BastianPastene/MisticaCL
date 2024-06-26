/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconParkingLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.889 20.91a.36.36 0 01.352.364c0 .2-.158.363-.357.368H4.245c-.975 0-1.765-.82-1.765-1.82V3.82C2.48 2.815 3.275 2 4.245 2h15.517c.976 0 1.766.82 1.766 1.82v16.002c0 .824-.542 1.55-1.323 1.754a.35.35 0 01-.43-.26.362.362 0 01.254-.442 1.08 1.08 0 00.794-1.052V3.82c0-.6-.474-1.09-1.056-1.09H4.245c-.582 0-1.056.49-1.056 1.09v16.002c0 .6.474 1.089 1.056 1.089H15.89zM18.002 22a.716.716 0 00.704-.726c0-.4-.316-.726-.704-.726a.716.716 0 00-.705.726c0 .4.316.726.705.726zm-8.466-4.361v-4.73h3.174c1.946 0 3.526-1.628 3.526-3.634 0-2.006-1.58-3.635-3.526-3.635H8.832v11.999c0 .2.158.363.352.363a.358.358 0 00.352-.363zM12.71 6.366c1.558 0 2.822 1.303 2.822 2.909 0 1.606-1.264 2.909-2.822 2.909H9.536V6.366h3.174z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconParkingLight;
