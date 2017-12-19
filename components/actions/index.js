export const CREATE_DECK = 'CREATE_DECK';

export function createDeck(title) {
  return {
    type: CREATE_DECK,
    title,
  };
}
