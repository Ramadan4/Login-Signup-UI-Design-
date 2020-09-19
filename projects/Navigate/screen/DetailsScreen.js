import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go To Details screen .... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go To Home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go To first Screen"
        onPress={() => navigation.popToTop('Details')}
      />
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
