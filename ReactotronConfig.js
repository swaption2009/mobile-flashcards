import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({ name: 'Mobile Flashcard' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();
