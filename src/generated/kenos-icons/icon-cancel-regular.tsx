/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconCancelRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 20.637c-4.601 0-8.637-4.036-8.637-8.637 0-4.601 4.036-8.637 8.637-8.637 4.6 0 8.637 4.036 8.637 8.637 0 4.6-4.036 8.637-8.637 8.637zM12 2C6.673 2 2 6.673 2 12s4.673 10 10 10 10-4.673 10-10S17.327 2 12 2zm-.678 10.038L8.9 9.616a.506.506 0 11.716-.716l2.422 2.422L14.459 8.9a.506.506 0 11.716.716l-2.421 2.422 2.421 2.422a.506.506 0 01-.716.716l-2.421-2.422-2.423 2.422a.506.506 0 11-.716-.716l2.423-2.422z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCancelRegular;
