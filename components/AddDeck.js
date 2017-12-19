import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

class AddDeck extends Component {
  state = {
    title: '',
  };

  onButtonPress = (e) => {
    console.log(e);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter a pair of Q&A</Text>
        <Input
          placeholder="enter a title"
          label="Deck Title"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <Button onPress={() => this.onButtonPress(this.state.title)}>Save</Button>
      </View>
    );
  }
}

export default AddDeck;
