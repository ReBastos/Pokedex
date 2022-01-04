const apiPokedex = async (setPokemonName, setPokemonSprite, setPokemonFrontSprite, pokemonNumber, setType1, setType2) => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    const pokemonJson = await response.json();
    
    console.log(pokemonJson);

    setPokemonName(pokemonJson['name']);
    setPokemonSprite(pokemonJson['sprites']['other']['official-artwork']['front_default']);
    setPokemonFrontSprite(pokemonJson['sprites']['front_default'])
    console.clear();
    console.log(pokemonJson['sprites']['front_default'])

    if(pokemonJson['types'].length == 1) {
        setType1(pokemonJson['types'][0]['type']['name']);
        setType2(null);
        console.log(pokemonJson['types'][0]['type']['name'])
    } else { 
        setType1(pokemonJson['types'][0]['type']['name']);
        setType2(pokemonJson['types'][1]['type']['name']);
        
    console.log(pokemonJson['types'][0]['type']['name'])
    console.log(pokemonJson['types'][1]['type']['name']) }
   
    console.log(pokemonJson['types'].length)
    console.log(pokemonJson['name'])
    console.log(pokemonJson['sprites']['other']['official-artwork']['front_default'])
}

export default apiPokedex;