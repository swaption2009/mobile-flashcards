import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import Card from './commons/Card';
import data from './helpers/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ShowDecks extends Component {
  render() {
    const dataArr = _.toArray(data);

    return (
      <View style={styles.container}>
        { !dataArr ? (
          <Text>Please create a deck</Text>
        ) : (
          <View style={styles.container}>
            <Text>Learning Decks</Text>
            <Card data={dataArr} />
          </View>
        )}
      </View>
    );
  }
}

export default ShowDecks;
