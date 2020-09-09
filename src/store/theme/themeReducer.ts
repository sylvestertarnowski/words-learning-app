import { Reducer } from 'redux';
import { CHANGE_THEME, ToggleThemeAction } from './themeActions';

export const THEME = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
} as {
  DARK: 'DARK';
  LIGHT: 'LIGHT';
}

export type AppTheme = 'DARK' | 'LIGHT';

const theme: Reducer<AppTheme, ToggleThemeAction> = (
  state: AppTheme = THEME.LIGHT,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_THEME:
      return payload;
    default:
      return state;
  }
};

export default theme;
