import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as constants from './constants';

const setContent = (state, action) => produce(state, () => action.payload);

export const homeReducer = produce(
  handleActions({ [constants.SET_POKEMON_LIST_REDUCER]: setContent }, [])
);
