import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import IconChevronRightSvg from '../icons/icon-chevron'
import IconCamera from '../icons/icon-camera';
import { useTheme } from '../../hooks/ThemeContextProvider';
import { Text1, Text2 } from '../Text/Text';

const List = () => {
    const { skin } = useTheme();
    const { colors } = skin;
  const tirpsDriversArray = [
    {
      Title: "Title",
      Subtitle: "Subtitle",
    },
    {
      Title: "Title",
      Subtitle: "Subtitle",
    },
    {
      Title: "Title",
      Subtitle: "Subtitle",
    },
    {
      Title: "Title",
      Subtitle: "Subtitle",
    },
    {
      Title: "Title",
      Subtitle: "Subtitle",
    },
    {
      Title: "Title",
      Subtitle: "Subtitle",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {tirpsDriversArray.map((driver, index) => (
          <View style={styles.row} key={index}>
            <IconCamera color={colors.brand} size={24}/>
            <View>
                <Text2 medium>{driver.Title}</Text2>
                <Text1 light>{driver.Subtitle}</Text1>
            </View>
            <IconChevronRightSvg/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:50,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  }
});

export default List;