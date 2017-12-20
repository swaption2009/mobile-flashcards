import React from 'react';
import { View, Text } from 'react-native';
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

const CardDetail = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text>{props.title}</Text>
    </View>
  );
};

CardDetail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardDetail;

