import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ScrollView, View } from 'react-native';
import { Boton } from './boton';

export default {
  title: 'components/Botonera',
  component: Boton,
} as ComponentMeta<typeof Boton>;

export const Basic: ComponentStory<typeof Boton> = args => {
  
  return (
    <ScrollView>
      <View style={{ gap: 16, margin: 16, width: 143 }}>
       
          <React.Fragment>
            {/* <Button loadingText="" type={aButtonType} onPress={onPress}>
              Send
            </Button> */}
            <Boton>
                hola
            </Boton>

          </React.Fragment>
      </View>
    </ScrollView>
  );
};

Basic.args = {
  showSpinner: false,
  disabled: false,
  children: 'hola',
  loadingText: 'envio file',
};

Basic.storyName = 'Botonera'