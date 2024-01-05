/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTargetLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.42 5.231a.39.39 0 00.081-.412.35.35 0 00-.325-.227H19.06V2.369a.373.373 0 00-.217-.341.343.343 0 00-.384.08l-2.47 2.593a.363.363 0 00-.103.26v2.441l-1.02 1.071c-1.364-1.308-3.12-2.028-4.976-2.028-4.086 0-7.409 3.488-7.409 7.777C2.48 18.512 5.803 22 9.889 22a7.13 7.13 0 003.905-1.166.38.38 0 00.113-.512.343.343 0 00-.487-.118 6.435 6.435 0 01-3.531 1.057c-3.693 0-6.7-3.157-6.7-7.034s3.007-7.033 6.7-7.033c1.67 0 3.246.644 4.479 1.81l-1.874 1.967a3.904 3.904 0 00-2.605-1c-2.235 0-4.054 1.91-4.054 4.256s1.82 4.256 4.054 4.256c2.235 0 4.055-1.91 4.055-4.256a4.368 4.368 0 00-.953-2.735l3.39-3.559h2.326c.095 0 .18-.038.248-.109l2.465-2.593zm-5.54 13.807c0 .407-.316.74-.704.74-.388 0-.704-.333-.704-.74 0-.408.316-.74.704-.74.388 0 .704.332.704.74zm-5.743-4.55l2.353-2.47c.465.602.745 1.37.75 2.214 0 1.938-1.504 3.517-3.351 3.517s-3.35-1.579-3.35-3.517c0-1.939 1.503-3.517 3.35-3.517a3.25 3.25 0 012.104.782l-2.352 2.47a.376.376 0 000 .52.344.344 0 00.248.11c.09 0 .18-.038.248-.11zM20.323 5.34l-1.765 1.853h-1.969V5.127l1.766-1.853v2.067h1.968zm-4.52 5.583a.382.382 0 01.145-.503.344.344 0 01.479.157 8.084 8.084 0 01.867 3.654c0 1.08-.208 2.128-.619 3.109a.352.352 0 01-.325.223.303.303 0 01-.14-.033.38.38 0 01-.18-.489 7.383 7.383 0 00.555-2.815 7.298 7.298 0 00-.781-3.303z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTargetLight;
