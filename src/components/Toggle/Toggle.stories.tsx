import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from './Toggle'

export default {
  title: 'components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Basic: ComponentStory<typeof Toggle> = () => <Toggle />;

Basic.storyName = 'Toggle';
