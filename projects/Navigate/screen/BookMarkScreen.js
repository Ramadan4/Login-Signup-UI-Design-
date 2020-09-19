import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const BookMarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BookMark Screen </Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};
export default BookMarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
