/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTechServiceFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.035 6.752l-.374-1.004-4.791 5.02a.609.609 0 01-.882 0l-1.833-1.92a.657.657 0 01-.183-.46c0-.172.065-.34.183-.46l4.792-5.02-.959-.392c-2.646-1.084-5.654-.428-7.662 1.676C7.42 6.188 6.76 9.116 7.577 11.78L2.48 17.124 7.054 22l5.139-5.384c2.539.856 5.341.164 7.243-1.832 2.008-2.108 2.634-5.256 1.6-8.032z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTechServiceFilled;