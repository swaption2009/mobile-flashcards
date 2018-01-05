import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
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
  iconStyle: {
    height: 100,
    position: 'absolute',
    flexDirection: 'row',
    right: 20,
    bottom: 30,
    justifyContent: 'space-between',
  },
});

const ShowDecks = (props) => {
  addDeck = () => {
    props.navigation.navigate('AddDeck');
  };

  return (
    <View style={styles.container}>
      { !props.decks ? (
        <Text style={styles.text}>Please create a deck</Text>
      ) : (
        <View>
          <Card
            data={props.decks}
            navigation={props.navigation}
          />
        </View>
      )}
      <Icon
        name="add-circle"
        size={70}
        style={styles.iconStyle}
        color="#900"
        onPress={this.addDeck}
      />
    </View>
  );
};

function mapStateToProps(state) {
  const decks = _.toArray(state);
  return { decks };
}

ShowDecks.propTypes = {
  navigation: PropTypes.funct,
  decks: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ShowDecks);
