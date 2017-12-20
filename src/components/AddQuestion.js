import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AddQuestion = (props) => {
  console.log('Title clicked for AddQuestion: ', props.navigation.state.params.title);
  return (
    <View style={styles.container}>
      <Text>AddQuestion</Text>
    </View>
  );
};

export default AddQuestion;
