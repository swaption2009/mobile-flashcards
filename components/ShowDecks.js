import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from './commons/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ShowDecks = (props) => {
  const { decks } = props;

  return (
    <View style={styles.container}>
      { !decks ? (
        <Text>Please create a deck</Text>
      ) : (
        <View style={styles.container}>
          <Text>Learning Decks</Text>
          <Card data={decks} />
        </View>
      )}
    </View>
  );
};

function mapStateToProps(state) {
  const decks = _.toArray(state.InitialState);
  return { decks };
}

ShowDecks.PropTypes = {
  decks: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ShowDecks);
