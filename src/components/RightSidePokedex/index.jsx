import './index.css'
import PokemonTypes from '../PokemonTypes'

const RightSidePokedex = ({type1, type2}) => {

    return(
        <>
        <div className="rightSidePokedex">

        <PokemonTypes
        type1={type1}
        type2={type2}
        />


        <div className='statsCard'>
            
        </div>
        </div>
        </>
    )

}

export default RightSidePokedex;