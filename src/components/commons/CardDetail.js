import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  containerStyle: {
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

onCardDetailPress = (navigation, title) => {
  // console.log(navigation);
  navigation.navigate('AddQuestion', { title });
}

const CardDetail = (props) => {
  return (
    <TouchableOpacity onPress={() => this.onCardDetailPress(props.navigation, props.title)}>
      <View style={styles.containerStyle}>
        <Text>
          Deck title: {props.title}{'\n'}
          Number of cards: {props.numCards}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CardDetail.propTypes = {
  title: PropTypes.string.isRequired,
  numCards: PropTypes.number.isRequired,
};

export default CardDetail;

