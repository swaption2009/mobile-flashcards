import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from './commons/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textStyle: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

navigateDeck = (componentName, props) => {
  props.navigation.navigate(componentName, props);
};

const ShowDetail = (props) => {
  const { title } = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
      <Button
        style={styles.buttonStyle}
        onPress={() => this.navigateDeck('AddQuestions', props)}
      >
        Add Q&A Cards
      </Button>
      <Button
        style={styles.buttonStyle}
        onPress={() => this.navigateDeck('StartQuiz', props)}
      >
        Start Quiz
      </Button>
    </View>
  );
};

export default ShowDetail;
