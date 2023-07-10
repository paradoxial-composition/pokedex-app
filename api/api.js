export const getAllPokemons = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then( response => response.json());
};

export const getPokemonData = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then( response => response.json());
};

export const getDataFromUrl = (url) => {
    return fetch(url)
        .then( response => response.json());
};
