import bug from '../../images/types/bug.png'
import dark from '../../images/types/dark.png'
import dragon from '../../images/types/dragon.png'
import electric from '../../images/types/electric.png'
import fairy from '../../images/types/fairy.png'
import fighting from '../../images/types/bug.png'
import fire from '../../images/types/fire.png'
import flying from '../../images/types/flying.png'
import ghost from '../../images/types/ghost.png'
import grass from '../../images/types/grass.png'
import ground from '../../images/types/ground.png'
import ice from '../../images/types/ice.png'
import normal from '../../images/types/normal.png'
import poison from '../../images/types/poison.png'
import psychic from '../../images/types/psychic.png'
import rock from '../../images/types/rock.png'
import steel from '../../images/types/steel.png'
import water from '../../images/types/water.png'



const TypeComponent = ({type}) => {
    
    if(type == 'bug'){
        return(
            <img src={bug} className='typeImg'/>
        )

    } if(type == 'dark'){
        return(
            <img src={dark} className='typeImg'/>
        )

    } if(type == 'dragon'){
        return(
            <img src={dragon} className='typeImg'/>
        )

    } if(type == 'electric'){
        return(
            <img src={electric} className='typeImg'/>
        )

    } if(type == 'fairy'){
        return(
            <img src={fairy} className='typeImg'/>
        )

    } if(type == 'fighting'){
        return(
            <img src={fighting} className='typeImg'/>
        )

    } if(type == 'fire'){
        return(
            <img src={fire} className='typeImg'/>
        )

    } if(type == 'flying'){
        return(
            <img src={flying} className='typeImg'/>
        )

    } if(type == 'ghost'){
        return(
            <img src={ghost} className='typeImg'/>
        )

    } if(type == 'grass'){
        return(
            <img src={grass} className='typeImg'/>
        )

    } if(type == 'ground'){
        return(
            <img src={ground} className='typeImg'/>
        )

    } if(type == 'ice'){
        return(
            <img src={ice} className='typeImg'/>
        )

    } if(type == 'normal'){
        return(
            <img src={normal} className='typeImg'/>
        )

    } if(type == 'poison'){
        return(
            <img src={poison} className='typeImg'/>
        )

    } if(type == 'psychic'){
        return(
            <img src={psychic} className='typeImg'/>
        )

    } if(type == 'rock'){
        return(
            <img src={rock} className='typeImg'/>
        )

    } if(type == 'water'){
        return(
            <img src={water} className='typeImg'/>
        )

    } if(type == 'steel'){
        return(
            <img src={steel} className='typeImg'/>
        )

    } else {
        return(null);
    }
    
} 

export default TypeComponent;