import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import NetworkScreen from './screens/Network';
import { View, StyleSheet, Platform } from 'react-native';

const Navigation = createAppContainer(
  createStackNavigator({
    Home: { screen: HomeScreen },
    Network: { screen: NetworkScreen }
  })
);

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />

      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
