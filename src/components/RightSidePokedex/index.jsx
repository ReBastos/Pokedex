import './index.css'
import PokemonTypes from '../PokemonTypes'
import { apiPokedexBySearch } from '../../utils/apiPokedex'
import { useState } from 'react'

const RightSidePokedex = ({
    type1, 
    type2,
    HP,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    setValueSearch


    }) => {

        const [evtInput, setEvtInput] = useState();

        const evtSearch = (evt) => {
            setEvtInput(evt.target.value);
        }

        const sendSearchName = () => {
            setValueSearch(evtInput);
            console.log(evtInput);
        }



        if(HP != undefined && attack != undefined && defense != undefined && specialAttack != undefined && specialDefense != undefined && speed != undefined) {
    return(
        <>
        <div className="rightSidePokedex">

        <PokemonTypes
        type1={type1}
        type2={type2}
        />



        <div className='statsCard'>
            <p>{(HP[0]).toUpperCase()}: {HP[1]}</p>
            <p>{(attack[0]).toUpperCase()}: {attack[1]}</p>
            <p>{(defense[0]).toUpperCase()}: {defense[1]}</p>
            <p>{(specialAttack[0]).toUpperCase()}: {specialAttack[1]}</p>
            <p>{(specialDefense[0]).toUpperCase()}: {specialDefense[1]}</p>
            <p>{(speed[0]).toUpperCase()}: {speed[1]}</p>

        </div>

        <div className='searcher'>
        <input type={'text'} id='searchInput' onChange={evtSearch}></input>
        <button id='searchBtn' onClick={sendSearchName}>Search</button>

        </div>
        </div>
        </>
    )} else{ return(null)}
    

}

export default RightSidePokedex;