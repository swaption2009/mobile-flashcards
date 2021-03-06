import decks from '../helpers/Data';
import {
  CREATE_DECK,
  ADD_CARD,
} from '../actions';

export default function flashcards(state = decks, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.title]:
          {
            ...state[action.title],
            title: action.title,
            questions: [
              ...state[action.title].questions,
              { question: action.question, answer: action.answer },
            ],
          },
      };
    case CREATE_DECK:
      return {
        ...state,
        [action.payload]: { title: action.payload, questions: [] },
      };
    default:
      return state;
  }
}
