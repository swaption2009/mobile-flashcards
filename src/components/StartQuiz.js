import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const styles = {
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  questionStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    height: 50,
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
    padding: 5,
  },
  answerStyle: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#AD1457',
    marginBottom: 30,
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
};

class StartQuiz extends Component {
  state = {
    index: 0,
    showAnswer: false,
  };
  onClickedButton = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  pickQuestion = (questions, index, length) => {
    if (index <= length - 1) {
      return questions[index];
    } else {
      this.props.navigation.navigate('Home');
      return questions[0];
    }
  };
  showAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };
  render() {
    const { title, questions } = this.props.quiz;
    const maxIndex = questions.length;
    const shownQuestion = this.pickQuestion(questions, this.state.index, maxIndex);

    return (
      <View>
        <Text style={styles.textStyle}>
          Topic: {title}
        </Text>
        <Text style={styles.questionStyle}>
          Question #{this.state.index + 1}: {shownQuestion.question}
        </Text>
        <TouchableOpacity onPress={() => this.showAnswer()}>
          <Text style={styles.answerStyle}>Show Answer</Text>
        </TouchableOpacity>
        { this.state.showAnswer &&
        <Text style={styles.questionStyle}>
          Answer: {shownQuestion.answer}
        </Text>
        }
        <Button
          onPress={() => this.onClickedButton()}
          title="Correct"
          style={styles.buttonStyle}
          color="#1565C0"
        />
        <Button
          onPress={() => this.onClickedButton()}
          title="Incorrect"
          style={styles.buttonStyle}
          color="#AD1457"
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    quiz: state[ownProps.navigation.state.params.navigation.state.params.title],
  };
};

StartQuiz.propTypes = {
  quiz: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(StartQuiz);
