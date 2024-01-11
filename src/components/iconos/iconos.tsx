import React, { Children } from 'react'
import { View } from 'react-native'

export type iconosProps = {
    children?: React.JSX.Element;
  };

export const Iconos = ({children}: iconosProps) => {
  return (
    <View style={{width: 40, height:40}}>
        {children}
    </View>
  )
}
