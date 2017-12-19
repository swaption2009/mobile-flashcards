import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './commons/Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

class AddDeck extends Component {
  state = {
    question: '',
    answer: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter a pair of Q&A</Text>
        <Input
          placeholder="enter a question"
          label="Question"
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <Input
          placeholder="enter the answer"
          label="Answer"
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
      </View>
    );
  }
}

export default AddDeck;
