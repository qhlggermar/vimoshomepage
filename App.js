import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/HeaderComponent';
import Content from './components/ContentComponent';
import ScannerOptions from './components/ScannerOptionsComponent';
import NavigationBar from './components/NavigationBarComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <ScannerOptions />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBB05',
  },
});

export default App;
