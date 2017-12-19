import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { YELLOW } from 'react-native-material-color';
import Header from './components/commons/Header';
import AddDeck from './components/AddDeck';
import ShowDecks from './components/ShowDecks';
import AddQuestion from './components/AddQuestion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});

const Tabs = TabNavigator({
  History: {
    screen: ShowDecks,
    navigationOptions: {
      tabBarLabel: 'Show Decks',
    },
  },
  AddEntry: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
    },
  },
}, {
  headerMode: 'none',
  tabBarPosition: 'absolute',
  height: 100,
  tabBarOptions: {
    activeTintColor: YELLOW[500],
    inactiveTintColor: '#b5b5b5',
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  AddQuestion: {
    screen: AddQuestion,
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Mobile Flashcard" />
          <MainNavigator />
      </View>
    );
  }
}

export default App;
