import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddDeck</Text>
      </View>
    );
  }
}

export default AddDeck;