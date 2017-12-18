import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/commons/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Mobile Flashcard" />
      </View>
    );
  }
}

export default App;
