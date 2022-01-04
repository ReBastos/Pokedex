import TypeComponent from '../TypeComponent'
import './index.css'

const PokemonTypes = ({type1, type2}) => {


    if(type2 == null) {
    return(
        <div className="PokemonTypes">
        <TypeComponent
        type={type1}
        />
        </div>
    )
    } else {
        return(
    
        <div className="PokemonTypes">
        <TypeComponent
        type={type1}
        />
        <TypeComponent
        type={type2}
        />
        </div>
        
        )
    }


}

export default PokemonTypes;