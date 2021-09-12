import React from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import Div from "./styled";

const Caracteristica = ({history}) => {
    const global = React.useContext(GlobalContext)
    //const { sprites, abilities, name, types, stats, height, weight, base_experience} = pokemon
    console.log(global.selectPoke)
    
    return (
        <Div className='container'>
            {global.selectPoke.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <h1>{item.name}</h1>
                        </div>
                        <div>
                            <div>
                                <img alt='Pokemon' src={item.sprites.other.dream_world.front_default}></img>
                            </div>
                            <div>
                                <span>Height: {item.height}</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Div>
    )
}

export default Caracteristica