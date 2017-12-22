import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import Input from './commons/Input';
import Button from './commons/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

class AddQuestions extends Component {
  state = {
    question: '',
    answer: '',
    title: '',
  };

  componentDidMount() {
    this.setState({
      title: this.props.navigation.state.params.navigation.state.params.title,
    });
  }

  onSavedQuestion = (state) => {
    this.props.addCard(
      state.title,
      state.question,
      state.answer,
    );
    this.props.navigation.navigate('ShowDecks');
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="enter a question"
          label="New Question"
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <Input
          placeholder="enter the answer"
          label="New Answer"
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <Button
          onPress={() => this.onSavedQuestion(this.state)}
        >
          Save
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (title, question, answer) => {
      dispatch(addCard(title, question, answer));
    },
  };
};

AddQuestions.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddQuestions);
