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

navigateDeck = (componentName, props, title) => {
  props.navigation.navigate(componentName, props, title);
};

const ShowDetail = (props) => {
  const checkTitle = props.navigation.state.params.title;
  let title;
  if (!checkTitle) {
    title = props.navigation.state.params;
  } else {
    title = checkTitle;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
      <Button
        style={styles.buttonStyle}
        onPress={() => this.navigateDeck('AddQuestions', props, title)}
      >
        Add Q&A Cards
      </Button>
      <Button
        style={styles.buttonStyle}
        onPress={() => this.navigateDeck('StartQuiz', props, title)}
      >
        Start Quiz
      </Button>
    </View>
  );
};

ShowDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ShowDetail;
