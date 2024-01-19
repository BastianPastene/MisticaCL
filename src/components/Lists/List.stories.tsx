import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from './List'

export default {
  title: 'components/List',
  component: List,
} as ComponentMeta<typeof List>;

export const Basic: ComponentStory<typeof List> = () => <List />;

Basic.storyName = 'List';
