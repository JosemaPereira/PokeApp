import { call, put } from 'redux-saga/effects';
import { getPokemon, getRandomList } from '../../services';
import { setPokemonListReducer } from './actions';
function* GetPokemonList() {
  const pokemonList = getRandomList(10, 500);
  const pokemonData = yield call(getPokemon, pokemonList);

  yield put(setPokemonListReducer(pokemonData));
}

export function* HomeSaga() {
  yield call(GetPokemonList);
}
