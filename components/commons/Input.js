import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 15,
    flex: 4,
  },
  labelStyle: {
    fontSize: 14,
    paddingLeft: 10,
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};


const Input = ({ label, value, onChangeText, placeholder }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
