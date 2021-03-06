import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { Action } from 'redux';
import { AppTheme, THEME } from './themeReducer';

export type AppAction<T, P> = {
  type: T;
  payload: P;
};

export type ToggleThemeAction = AppAction<string, AppTheme>;

export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (themeType: AppTheme): ToggleThemeAction => ({
  type: CHANGE_THEME,
  payload: themeType,
});

export const toggleTheme = (): ThunkAction<
  void,
  RootState,
  AppTheme,
  Action<string>
> => (dispatch, getState) => {
  const { theme } = getState();
  if (theme === THEME.DARK) {
    return dispatch(changeTheme(THEME.LIGHT));
  }
  return dispatch(changeTheme(THEME.DARK));
};
