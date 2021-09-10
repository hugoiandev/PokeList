import React from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import Div from "./styled";

const Caracteristica = ({history}) => {
    const global = React.useContext(GlobalContext)
    //const { sprites, abilities, name, types, stats, height, weight, base_experience} = pokemon
    console.log(global.selectPoke)
    
    return (
        <Div className='container'>
            <div>
                <a href='/' onClick={(event) => {
                    event.preventDefault()
                    history.goBack()
                    global.setStatusBtn(true)
                }}><img alt='seta voltar' src='seta-back.svg'></img></a>
                {global.selectPoke &&
                <div>
                    <img alt={global.selectPoke.name} src={global.selectPoke.sprites.other.dream_world.front_default}></img>
                </div>}
            </div>
        </Div>
    )
}

export default Caracteristica