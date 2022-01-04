
import { useEffect, useState } from 'react';
import './App.css';
import apiPokedex from './utils/apiPokedex';
import LeftSidePokedex from './components/LeftSidePoxedex';


function App() {

  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonSprite, setPokemonSprite] = useState(null);
  const [pokemonFrontSprite, setPokemonFrontSprite] = useState(null);

  useEffect(() => {
    apiPokedex(setPokemonName, setPokemonSprite, setPokemonFrontSprite, pokemonNumber);
  } ,[pokemonNumber]);
  

  return (
    <>

    <LeftSidePokedex
    pokemonNumber={pokemonNumber}
    setPokemonNumber={setPokemonNumber}
    pokemonSprite={pokemonSprite}
    pokemonFrontSprite={pokemonFrontSprite}
    pokemonName={pokemonName}
    />


    </>
  );
}

export default App;
