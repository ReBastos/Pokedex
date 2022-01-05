import './index.css'
import PokemonTypes from '../PokemonTypes'

const RightSidePokedex = ({
    type1, 
    type2,
    HP,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed


    }) => {

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
        </div>
        </>
    )

}

export default RightSidePokedex;