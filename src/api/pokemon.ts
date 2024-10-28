import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';
export const API_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

export const pokemonApi = {
  searchPokemons: async (query: string) => {
    const response = await axios.get(`${API_BASE_URL}/pokemon?limit=100`);
    const results = response.data.results;
    return results.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  },

  getPokemonDetails: async (name: string) => {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${name}`);
    return response.data;
  }
};