import { HttpClient } from '../providers';

const pokemonRequest = `${process.env.REACT_APP_SOURCE_API}${process.env.REACT_APP_RESOURCE_POKEMON}`;

export const getPokemon = async list => {
  let pokemonList = [];
  await Promise.all(
    list.map(async pokemon => {
      const {
        data: {
          id,
          name,
          abilities,
          sprites: { front_default },
          types
        }
      } = await HttpClient.get(`${pokemonRequest}/${pokemon}`);
      pokemonList.push({
        id,
        name,
        abilities,
        front_default,
        types: types.sort((a, b) => {
          return a.slot - b.slot;
        })
      });
    })
  );

  return pokemonList;
};
