import { Reducer } from 'redux';
import { AppAction } from '../theme/themeActions';
import {
  ADD_WORDS_SET,
  REMOVE_WORDS_SET,
  UPDATE_WORDS_SET,
  WordsSets,
} from './wordsSetsActions';

enum Languages {
  polish = 'polish',
  english = 'english',
  french = 'french',
}

type BaseWord = {
  [key in Languages]: string;
};

export interface Word extends BaseWord {
  guid: string;
}

export type WordsSingleSet = {
  languages: {
    primary: Languages;
    secondary: Languages;
  };
  title: string;
  description: string;
  guid: string;
  words: Word[];
};

type WordsSetsActions =
  | AppAction<string, string>
  | AppAction<string, WordsSingleSet>;

export const wordsSets: Reducer<WordsSets, WordsSetsActions> = (
  state = {},
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_WORDS_SET:
    case UPDATE_WORDS_SET:
      return {
        ...state,
        [(payload as WordsSingleSet).guid]: { ...(payload as WordsSingleSet) },
      };
    case REMOVE_WORDS_SET:
      const { [payload as string]: deletedSet, ...rest } = state;
      return {
        ...rest,
      };
    default:
      return state;
  }
};
