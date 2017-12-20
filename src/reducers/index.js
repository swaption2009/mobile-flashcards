import { CREATE_DECK } from '../actions';
import decks from '../helpers/Data';

export default function flashcards(state = decks, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.payload]: { title: action.payload, questions: [] },
      };
    default:
      return state;
  }
}
