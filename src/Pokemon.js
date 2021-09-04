import React from 'react'
import { GlobalContext } from './GlobalContext'

const Pokemon = () => {
    const global = React.useContext(GlobalContext)
    console.log(global)
    console.log(global.types.find((item) => {
        return item.name === 'bug'
    }))

    return (
        <>
            <div className='div container pokemons' style={{marginTop: '20px'}}>
                {global.dadosPoke && global.dadosPoke.map((item, index) => {
                    return (
                        <div key={index}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', padding: '50px 50px',     borderRadius: '10px', position: 'relative', overflow: 'hidden'}}>
                            <span style={{position: 'absolute', top: '0', left: '0', fontWeight: 'bold', color: '#fff', background: 'tomato'}}>{`#${item.id}`}</span>
                                <img style={{height: '100px', width: '100px'}} src={item.sprites.other.dream_world.front_default} alt={item.name}></img>
                            </div>
                            <div style={{marginLeft: '10px', marginTop: '5px'}}>
                                <span style={{fontSize: '1.2em', textTransform: 'capitalize'}}>{item.name}</span>
                                <div className='types'>
                                    {item.types.map((item, index) => {
                                        const {bg_color, color} = global.types.find((style) => style.name === item.type.name)
                                        return (
                                            <span style={{fontSize: '.9em', marginRight: '10px', background: bg_color, color: color, padding: '0 15px', borderRadius: '3px'}} key={index}>
                                                {item.type.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div ref={global.elementObs} className='buttons'>
                {global.load ? <img src='loading.png' alt='loading' className='loading'></img> : null}
            </div>
        </>
    )
}

export default Pokemon