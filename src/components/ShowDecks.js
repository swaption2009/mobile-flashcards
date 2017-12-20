import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Card from './commons/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

const ShowDecks = (props) => {
  return (
    <View style={styles.container}>
      { !props.decks ? (
        <Text style={styles.text}>Please create a deck</Text>
      ) : (
        <View>
          <Card data={props.decks} />
        </View>
      )}
    </View>
  );
};

function mapStateToProps(state) {
  const decks = _.toArray(state);
  return { decks };
}

export default connect(mapStateToProps)(ShowDecks);
