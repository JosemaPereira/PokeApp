import _ from 'lodash';

export const pokemonList = state => _.get(state, 'pokemonList', []);
