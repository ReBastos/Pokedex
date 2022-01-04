const apiPokedex = async (setPokemonName, setPokemonSprite, setPokemonFrontSprite, pokemonNumber) => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    const pokemonJson = await response.json();
    
    console.log(pokemonJson);

    setPokemonName(pokemonJson['name']);
    setPokemonSprite(pokemonJson['sprites']['other']['official-artwork']['front_default']);
    setPokemonFrontSprite(pokemonJson['sprites']['front_default'])
    console.log(pokemonJson['sprites']['front_default'])
    console.log(pokemonJson['name'])
    console.log(pokemonJson['sprites']['other']['official-artwork']['front_default'])
}

export default apiPokedex;