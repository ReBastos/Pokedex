const apiPokedex = async () => {
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const pokemonJson = await response.json();
    
    console.log(pokemonJson);

    console.log(pokemonJson['name'])
    console.log(pokemonJson['sprites']['other']['official-artwork']['front_default'])
}

export default apiPokedex;