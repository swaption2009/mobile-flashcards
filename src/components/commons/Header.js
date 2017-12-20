import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLUE, WHITE } from 'react-native-material-color';

const styles = {
  viewStyle: {
    backgroundColor: BLUE[400],
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: WHITE,
  },
};

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
