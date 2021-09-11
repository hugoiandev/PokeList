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
                {global.selectPoke && <h1>{global.selectPoke.name}</h1>}
            </div>
        </Div>
    )
}

export default Caracteristica