import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Input from './commons/Input';
import Button from './commons/Button';
import saveDeck from '../helpers/Api';
import createDeck from '../actions';

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
    title: '',
  };

  onButtonPress = (title) => {
    if (!title) {
      alert('Field cannot be blank.');
    } else {
      // console.log(title);
      this.props.createDeck(title);
      // console.log('new deck is saved to Redux store');
      saveDeck(title);
      // console.log('new deck is saved to AsyncStorage');
      this.setState({ title: '' });
      // console.log('Add deck input field is cleared');
      // navigate back to ShowDecks component
      this.props.navigation.navigate('ShowDetail', title, this.props);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="enter a title"
          label="New Deck Title"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <Button onPress={() => this.onButtonPress(this.state.title)}>Save</Button>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (title) => {
      dispatch(createDeck(title));
    },
  };
};

AddDeck.propTypes = {
  createDeck: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddDeck);
