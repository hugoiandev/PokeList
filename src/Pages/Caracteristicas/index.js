import React from "react";
import { GlobalContext } from "../../Components/GlobalContext";
import Div from "./styled";
import { Link } from "react-router-dom";

const Caracteristica = ({history}) => {
    const global = React.useContext(GlobalContext)
    //const { sprites, abilities, name, types, stats, height, weight, base_experience} = pokemon
    console.log(global.selectPoke)
    
    return (
        <Div className='container'>
            {global.selectPoke.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='div-title'>
                            <Link onClick={() => global.setStatusBtn(true)} style={{marginLeft: '20px'}} to='/'>
                                <img alt='seta back' src='seta-back.svg'></img>
                            </Link>
                            <h1>{item.name}</h1>
                        </div>
                        <div className='container-info'>
                            <div className='div-img'>
                                <img alt='Pokemon' src={item.sprites.other.dream_world.front_default}></img>
                            </div>
                            <div className='div-attr'>
                                <div>
                                    <h3>Height</h3>
                                    <span>{item.height} m</span>
                                </div>
                                <div>
                                    <h3>Weight</h3>
                                    <span>{item.weight} kg</span>
                                </div>
                                <div>
                                    <h3>Abilities</h3>
                                    <span>{item.abilities[0].ability.name}</span>
                                </div>
                            </div>
                            <div className='div-stats'>
                                <h2>Stats</h2>
                                <div>
                                    {item.stats.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <h3>{item.stat.name}</h3>
                                                <span>{item.base_stat}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='div-types'>
                                <h2>Types</h2>
                                <div>
                                    {item.types.map((item, index) => {
                                        const {bg_color, color} = global.types.find(({name}) => name === item.type.name)
                                        return (
                                            <span style={{background: bg_color, color: color}} key={index}>{item.type.name}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Div>
    )
}

export default Caracteristica