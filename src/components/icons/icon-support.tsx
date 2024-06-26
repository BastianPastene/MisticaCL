import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

function IconSupport({color = 'white', size = 24}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M19.98 10.004c0-9.3-7.98-9.97-9.58-10-.28 0-.61-.01-.91 0C7.9.024 0 .554 0 9.964s7.96 9.99 9.55 10.01h.88c1.6-.03 9.55-.65 9.55-9.96v-.01zm-1.22 0c0 7.97-6.39 8.7-8.35 8.74h-.84c-1.96-.03-8.35-.74-8.35-8.8s6.34-8.72 8.28-8.74h.87c1.97.05 8.39.82 8.39 8.78v.02zm-9.21 4.59c.54 0 .89.35.89.86 0 .56-.34.9-.86.9-.55 0-.89-.34-.89-.84v-.07c0-.51.35-.86.86-.86v.01zm3.73-7.94c0-1.02-.33-1.74-1.04-2.27-.55-.42-1.31-.63-2.27-.63-.91 0-1.85.19-2.23.37a.39.39 0 00-.22.44l.07.35v.03a.4.4 0 00.49.29c.55-.15 1.12-.22 1.69-.22 1.05 0 1.43.2 1.65.38.38.3.54.67.54 1.24 0 .8-.27 1.27-1.7 2.96l-.16.2c-.87 1.04-1.25 1.69-1.25 2.79 0 .22.02.43.06.64.04.19.21.33.4.33h.45c.22 0 .41-.18.41-.41 0-1.47.05-1.53 1.41-3.1 1.19-1.4 1.7-2.14 1.7-3.39z"
        fill={color}
      />
    </Svg>
  );
}

export default IconSupport;
