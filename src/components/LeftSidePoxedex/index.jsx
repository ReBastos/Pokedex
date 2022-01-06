import './index.css'

const LeftSidePokedex = ({pokemonNumber, setPokemonNumber, pokemonSprite, pokemonFrontSprite, pokemonName}) => {
    
    const pluslePokemonNumber = () => {

        let number = pokemonNumber;
        setPokemonNumber(number + 1);

    }

    const minumPokemonNumber = () => {
        if(pokemonNumber > 1){
            let number = pokemonNumber;
            setPokemonNumber(number - 1);
        }

    }


    return(
        <>
        <div className="leftSidePokedex">

            <div className='threeLights'>
                <div id='redLight'></div>
                <div id='yellowLight'></div>
                <div id='greenLight'></div>
            </div>

            <div className='pokemonImage'>
                <img src={pokemonSprite}/>
            </div>

            <div className='leftButtons'>   
                <button onClick={minumPokemonNumber}></button>
                <button onClick={pluslePokemonNumber}></button>
            </div>

            <div className='pokemonName'>
                <h2>{pokemonName}</h2>
            </div>

            <div className='pokemonSprite' style={{background: `no-repeat center/100% url(${pokemonFrontSprite})`,}}>
                
            </div>
        </div>
        </>
    )
}

export default LeftSidePokedex;