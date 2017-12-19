import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { YELLOW } from 'react-native-material-color';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/reducers';
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
      tabBarLabel: 'Show All Decks',
    },
  },
  AddEntry: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add A Deck',
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

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}

const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION__())
  || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="Mobile Flashcard" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
