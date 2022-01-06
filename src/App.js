
import { useEffect, useState } from 'react';
import './App.css';
import {apiPokedexByNumber, apiPokedexBySearch} from './utils/apiPokedex';
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
  const [specialAttack, setSpecialAttack] = useState();
  const [specialDefense, setSpecialDefense] = useState();
  const [speed, setSpeed] = useState();
  const [valueSearch, setValueSearch] = useState(null);
  const [onClick, setOnClick] = useState();

  useEffect(() => {
    apiPokedexByNumber(setPokemonName, 
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
      );

  } ,[pokemonNumber]);
  
  useEffect(() => {
    apiPokedexBySearch(setPokemonName, 
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
      setSpeed,
      valueSearch
      );

  } ,[onClick]);
  

  return (
    <>

    <img id='title' src='https://fontmeme.com/permalink/220104/976a70d29e50881116e18551c73d1602.png'/>

    <main>
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
    HP={HP}
    attack={attack}
    defense={defense}
    specialAttack={specialAttack}
    specialDefense={specialDefense}
    speed={speed}
    setValueSearch={setValueSearch}
    setOnClick={setOnClick}
    />
  </main>

    </>
  );
}

export default App;
