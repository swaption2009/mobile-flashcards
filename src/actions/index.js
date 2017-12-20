export const CREATE_DECK = 'CREATE_DECK';

export default function createDeck(title) {
  return {
    type: CREATE_DECK,
    payload: title,
  };
}
