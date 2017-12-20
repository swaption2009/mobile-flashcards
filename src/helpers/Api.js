import { AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = 'Flashcard:deck';

export default function saveDeck(title) {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: [],
    },
  }));
}
