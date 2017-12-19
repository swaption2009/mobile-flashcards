import { CREATE_DECK } from '../actions';
import data from '../helpers/data';

const InitialState = data;

export default function flashcards(state = { InitialState }, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        ...action,
      };
    default:
      console.log(state);
      return state;
  }
}
