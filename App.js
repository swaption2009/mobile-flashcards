import React from 'react';
import { StyleSheet, View } from 'react-native';
import { YELLOW } from 'react-native-material-color';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Reactotron from 'reactotron-react-native';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import Header from './src/components/commons/Header';
import AddDeck from './src/components/AddDeck';
import ShowDecks from './src/components/ShowDecks';
import ShowDetail from './src/components/DeckDetail';
import AddQuestions from './src/components/AddQuestions';
import StartQuiz from './src/components/StartQuiz';
import './ReactotronConfig';

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
  ShowDecks: {
    screen: ShowDecks,
    navigationOptions: {
      title: 'Showing All Decks',
    },
  },
  ShowDetail: {
    screen: ShowDetail,
    navigationOptions: {
      title: 'Showing Deck Detail',
    },
  },
  AddQuestions: {
    screen: AddQuestions,
    navigationOptions: {
      title: 'Add Q&A Pairs',
    },
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: "Let's Play a Quiz",
    },
  },
});

const store = Reactotron.createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header headerText="Mobile Flashcard" />
        <MainNavigator />
      </View>
    </Provider>
  );
};

export default App;
