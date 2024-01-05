/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconLossTheftDevicesLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M13.359 18.66c0-.568.327-.834.832-.834.504 0 .832.266.832.834 0 .275-.076.477-.21.614-.146.148-.362.221-.622.221s-.477-.073-.622-.221c-.135-.137-.21-.339-.21-.614zm-5.734-6.938c0 .154.126.28.28.28a.28.28 0 00.28-.28v-.546c0-.18.345-.462.597-.667l.09-.074a4.95 4.95 0 00.167-.142l.004-.003c.204-.181.67-.595.778-1.254a1.593 1.593 0 00-.348-1.317c-.352-.417-.91-.647-1.565-.647-.575 0-1.062.196-1.412.569-.328.344-.507.826-.507 1.35v.118c0 .154.126.28.28.28a.28.28 0 00.28-.28V8.99c0-.381.126-.726.356-.966.24-.258.588-.393 1.003-.393.487 0 .893.16 1.14.451.199.236.274.533.221.863-.076.465-.429.779-.6.927-.072.062-.154.13-.24.2-.378.307-.804.655-.804 1.103v.546zm.322 1.761a.342.342 0 100-.683.342.342 0 000 .683z" /><path fill="currentColor" d="M17.737 21.834h-7.101c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28v-4.094c-1.347-.046-2.4-.428-3.138-1.139-.817-.787-1.232-1.966-1.232-3.507 0-1.54.415-2.72 1.232-3.507.737-.71 1.791-1.091 3.135-1.138v-.27c0-1.009.244-1.746.742-2.25.51-.512 1.252-.762 2.272-.762h7.1c1.032 0 1.774.244 2.273.745.498.502.739 1.241.739 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731zM8.182 5.438c1.346.046 2.403.427 3.14 1.138.818.788 1.233 1.967 1.233 3.507 0 1.541-.415 2.72-1.233 3.507-.736.71-1.792 1.093-3.137 1.139v4.094c0 1.742.711 2.45 2.451 2.45h7.1c1.743 0 2.452-.708 2.452-2.45V5.167c0-.87-.188-1.484-.575-1.87-.386-.387-1.002-.58-1.876-.58h-7.101c-.863 0-1.473.193-1.871.593-.392.395-.583 1.003-.583 1.857v.271zm-.28.556c-1.329 0-2.348.33-3.028.986-.703.678-1.062 1.722-1.062 3.103 0 1.381.356 2.426 1.06 3.104.677.655 1.697.986 3.03.986 1.333 0 2.35-.33 3.028-.986.703-.678 1.059-1.723 1.059-3.104 0-1.38-.356-2.425-1.059-3.103-.675-.656-1.695-.986-3.025-.986h-.002z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLossTheftDevicesLight;
