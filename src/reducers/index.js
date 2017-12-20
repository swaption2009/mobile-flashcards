import { CREATE_DECK } from '../actions';
import decks from '../helpers/data';

export default function flashcards(state = decks, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.payload]: { title: action.payload, questions: [] },
      };
    default:
      console.log('default', state);
      return state;
  }
}
