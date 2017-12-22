export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARD = 'ADD_CARD';

export default function createDeck(title) {
  return {
    type: CREATE_DECK,
    payload: title,
  };
}

export function addCard(title, question, answer) {
  return {
    type: ADD_CARD,
    title,
    question,
    answer,
  };
}
