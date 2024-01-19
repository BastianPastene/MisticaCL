// import React from 'react';
// import {RadioButton} from './RadioButton';
// import {useColors} from '../Themes';
// import {RadioButtonItem} from './RadioButtonItem';
// import {Stack} from '../Utils';
// import { useTheme } from '../../hooks/ThemeContextProvider';

// const Story = () => {
//   const [state, setState] = React.useState('First');
//   const { skin } = useTheme();
//   const { colors } = skin;
//   return (
//     <RadioButton.Group
//       onValueChange={(value) => {
//         setState(value);
//       }}
//       value={state}>
//       <Stack space="xsmall">
//         <RadioButton value="First" />
//         <RadioButton value="Second" color={colors} />
//         <RadioButton value="Third" disabled />
//         <RadioButtonItem label="First" value="First" />
//         <RadioButtonItem label="Second" value="Second" color={colors} />
//         <RadioButtonItem label="Third" value="Third" disabled />
//       </Stack>
//     </RadioButton.Group>
//   );
// };

// export const light = () => <Story />;

// export const dark = () => <Story />;

// light.story = {
//   decorators: [LightThemeDecorator],
// };

// dark.story = {
//   decorators: [DarkThemeDecorator],
// };

// export default {
//   title: 'RadioButtons/RadioButton',
// };
