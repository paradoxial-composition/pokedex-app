import { Pokemon, AllPokemonResponse } from '../src/models/pokemon';

export const getAllPokemon = async (url: string = 'https://pokeapi.co/api/v2/pokemon/'): Promise<AllPokemonResponse> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data as AllPokemonResponse;
    } catch (error) {
      console.error('Error fetching all Pokémon data:', error);
      throw error;
    }
  };

export const getPokemonData = async (pokemon: string): Promise<Pokemon> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${pokemon}: ${response.statusText}`);
        }

        const data = await response.json();
        return data as Pokemon;
    } catch (error) {
        console.error(`Error fetching data for ${pokemon}:`, error);
        throw error;
    }
};

export const getDataFromUrl = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from URL: ${response.statusText}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error('Error fetching data from URL:', error);
        throw error;
    }
};
