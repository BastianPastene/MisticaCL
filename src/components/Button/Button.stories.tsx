import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonType } from './Button';
import { Alert, ScrollView, View } from 'react-native';
import IconCamera from '../icons/icon-camera';
import IconoCorazon from '../icons/icono-corazon';

export default {
  title: 'components/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => {
  const buttonTypes: Array<ButtonType> = ['primary', 'secondary', 'danger'];
  const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');
  
  return (
    <ScrollView>
      <View style={{ gap: 16, margin: 16, width: 143 }}>
        {buttonTypes.map((aButtonType, index) => (
          <React.Fragment key={`button-${aButtonType}-${index}`}>
            <Button loadingText="" type={aButtonType} onPress={onPress}>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              leftIcon={IconoCorazon({color: 'red', size: 24})}
              onPress={onPress}>
              otro
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              rightIcon={IconCamera({color: 'blue', size: 24})}
              onPress={onPress}
              style={{ color: "red" }}
            >
              Se
            </Button>
            <Button loadingText="" type={aButtonType} disabled>
              Send
            </Button>
            <Button loadingText="Sending file" type={aButtonType} showSpinner>
              Sends
            </Button>
            <Button loadingText="" type={aButtonType} showSpinner>
              Send
            </Button>
            <Button loadingText="" type={aButtonType} small onPress={onPress}>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              small
              leftIcon={IconCamera({color: 'blue', size: 24})}
              onPress={onPress}>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              small
              rightIcon={IconCamera({color: 'blue', size: 24})}
              onPress={onPress}>
              Send
            </Button>
            <Button loadingText="" type={aButtonType} small disabled>
              Send
            </Button>
            <Button
              loadingText="Sending file"
              type={aButtonType}
              small
              showSpinner>
              Send
            </Button>
            <Button
              loadingText="Sending file"
              type={aButtonType}
              small
              disabled
              showSpinner>
              Send
            </Button>
            <Button
              loadingText=""
              type={aButtonType}
              small
              disabled
              showSpinner>
              Send
            </Button>
            <Button loadingText="" type={aButtonType} showSpinner small>
              Send
            </Button>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

Basic.args = {
  showSpinner: false,
  disabled: false,
  children: 'Send',
  loadingText: 'Sending file',
  type: 'primary',
};

Basic.storyName = 'Buttons'