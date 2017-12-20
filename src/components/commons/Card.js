import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDetail from './CardDetail';

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

showData = (data, navigation) => {
  return data.map(e => {
    return (
      <CardDetail
        key={e.title}
        title={e.title}
        numCards={e.questions.length}
        navigation={navigation}
      />
    );
  });
};

const Card = (props) => {
  const { data, navigation } = props;
  console.log(navigation);

  return (
    <View style={styles.containerStyle}>
      {this.showData(data, navigation)}
    </View>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.Array,
  })).isRequired,
};

export default Card;
