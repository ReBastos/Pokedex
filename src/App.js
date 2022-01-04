
import { useEffect, useState } from 'react';
import './App.css';
import apiPokedex from './utils/apiPokedex';
import LeftSidePokedex from './components/LeftSidePoxedex';
import RightSidePokedex from './components/RightSidePokedex';


function App() {

  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonSprite, setPokemonSprite] = useState(null);
  const [pokemonFrontSprite, setPokemonFrontSprite] = useState(null);
  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);
  const [HP, setHP] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [specialAtack, setSpecialAttack] = useState();
  const [specialDefense, setSpecialDefense] = useState();
  const [speed, setSpeed] = useState();

  useEffect(() => {
    apiPokedex(setPokemonName, setPokemonSprite, setPokemonFrontSprite, pokemonNumber, setType1, setType2);

    
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

    <RightSidePokedex
    type1={type1}
    type2={type2}
    />


    </>
  );
}

export default App;
