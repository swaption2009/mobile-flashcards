import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../helpers/Notifications';

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
    quiz: this.props.quiz,
    score: 0,
    index: 0,
    showAnswer: false,
    restartButton: false,
  };

  onClickedButton = (answer) => {
    this.setState({
      index: this.state.index + 1,
    });
    if (answer === 'correct') {
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      this.setState({
        score: this.state.score - 1,
      });
    }
  };

  pickQuestion = (questions, index, length) => {
    clearLocalNotification()
      .then(setLocalNotification);

    if (index <= length - 1) {
      return questions[index];
    } else {
      this.setState({
        restartButton: true,
        index: 0,
      });
      return questions[0];
    }
  };

  showAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };

  hideAnswer = () => {
    this.setState({
      showAnswer: false,
    });
  };

  onRestartButton = () => {
    this.setState({
      score: 0,
      quiz: this.props.quiz,
      restartButton: false,
    });
  };

  onGoHomeButton = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    const { title, questions } = this.state.quiz;
    const { index, score } = this.state;
    const maxIndex = questions.length;
    const shownQuestion = this.pickQuestion(questions, index, maxIndex);

    return (
      <View>
        <Text style={styles.textStyle}>
          Topic: {title}
        </Text>
        <Text style={styles.textStyle}>
          Score: {score}
        </Text>
        {!this.state.restartButton &&
        <View>
          <Text style={styles.questionStyle}>
            Question #{index + 1}: {shownQuestion.question}
          </Text>
          <TouchableOpacity onPress={() => this.showAnswer()}>
            <Text style={styles.answerStyle}>Show Answer</Text>
          </TouchableOpacity>

          {this.state.showAnswer &&
          <View>
            <Text style={styles.questionStyle}>
              Answer: {shownQuestion.answer}
            </Text>
            <TouchableOpacity onPress={() => this.hideAnswer()}>
              <Text style={styles.answerStyle}>Hide Answer</Text>
            </TouchableOpacity>
          </View>
          }

          <Button
            onPress={() => this.onClickedButton('correct')}
            title="Correct"
            style={styles.buttonStyle}
            color="#1565C0"
          />
          <Button
            onPress={() => this.onClickedButton('incorrect')}
            title="Incorrect"
            style={styles.buttonStyle}
            color="#AD1457"
          />
        </View>
        }
        {this.state.restartButton &&
        <View>
          <Button
            onPress={() => this.onRestartButton('correct')}
            title="Restart Quiz"
            style={styles.buttonStyle}
            color="#1565C0"
          />
          <Button
            onPress={() => this.onGoHomeButton()}
            title="Go Back to Deck"
            style={styles.buttonStyle}
            color="#AD1457"
          />
        </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let checkTitle = ownProps.navigation.state.params.navigation.state.params.title;
  if (!checkTitle) {
    checkTitle = ownProps.navigation.state.params.navigation.state.params;
  }
  return {
    quiz: state[checkTitle],
  };
};

StartQuiz.propTypes = {
  quiz: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(StartQuiz);
