const apiPokedexByNumber = async (
    setPokemonName, 
    setPokemonSprite, 
    setPokemonFrontSprite, 
    pokemonNumber, 
    setType1, 
    setType2, 
    setHP, 
    setAttack, 
    setDefense,
    setSpecialAttack,
    setSpecialDefense,
    setSpeed
    ) => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    const pokemonJson = await response.json();
    
    setPokemonName(pokemonJson['name']);
    setPokemonSprite(pokemonJson['sprites']['other']['official-artwork']['front_default']);
    setPokemonFrontSprite(pokemonJson['sprites']['front_default'])
    
    setHP([pokemonJson.stats[0].stat.name, pokemonJson.stats[0].base_stat]);
    setAttack([pokemonJson.stats[1].stat.name, pokemonJson.stats[1].base_stat]);
    setDefense([pokemonJson.stats[2].stat.name, pokemonJson.stats[2].base_stat]);
    setSpecialAttack([pokemonJson.stats[3].stat.name, pokemonJson.stats[3].base_stat]);
    setSpecialDefense([pokemonJson.stats[4].stat.name, pokemonJson.stats[4].base_stat]);
    setSpeed([pokemonJson.stats[5].stat.name, pokemonJson.stats[5].base_stat]);
    
    //console.clear();
    //console.log(pokemonJson);
    
    if(pokemonJson['types'].length == 1) {
        setType1(pokemonJson['types'][0]['type']['name']);
        setType2(null);
        console.log(pokemonJson['types'][0]['type']['name'])
    } else { 
        setType1(pokemonJson['types'][0]['type']['name']);
        setType2(pokemonJson['types'][1]['type']['name']);
         }
   
}

const apiPokedexBySearch = async (
    search,
    setPokemonNumber
    ) => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const pokemonJson = await response.json();
    
    setPokemonNumber(pokemonJson.id);

}



export {apiPokedexByNumber, apiPokedexBySearch};