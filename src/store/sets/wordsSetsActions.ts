import { WordsSingleSet } from './wordsSetsReducer';
import { AppAction } from '../theme/themeActions';

export type Guid = string;

export interface WordsSets {
  [key: string]: WordsSingleSet;
}

export const ADD_WORDS_SET = 'ADD_WORDS_SET';
export const REMOVE_WORDS_SET = 'REMOVE_WORDS_SET';
export const UPDATE_WORDS_SET = 'UPDATE_WORDS_SET';

export const addWordsSet = (
  wordsSet: WordsSingleSet
): AppAction<typeof ADD_WORDS_SET, WordsSingleSet> => ({
  type: ADD_WORDS_SET,
  payload: wordsSet,
});

export const removeWordsSet = (
  guid: string
): AppAction<typeof REMOVE_WORDS_SET, string> => ({
  type: REMOVE_WORDS_SET,
  payload: guid,
});

export const updateWordsSet = (
  wordsSet: WordsSingleSet
): AppAction<typeof UPDATE_WORDS_SET, WordsSingleSet> => ({
  type: UPDATE_WORDS_SET,
  payload: wordsSet,
});
