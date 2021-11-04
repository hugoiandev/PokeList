import React from 'react'
import Header from '../Header'
import { GlobalContext } from '../GlobalContext'
import Div from './styled'
import { Link } from 'react-router-dom'

const Pokemon = () => {
    const global = React.useContext(GlobalContext)

    return (
        <>
            <Header />
            <Div className='container'>
                {global.dadosPoke && global.dadosPoke.map((item, index) => {
                    return (
                        <Link onClick={() => global.setUrlRoutes(item.name)} to={`/${item.name}`} key={index}>
                            <div class="card-image">
                                <span class="poke-name">{item.name}</span>
                                <span class="code">{`#${item.id}`}</span>
                                <div class="poke-type-container">
                                    {item.types.map((item, index) => {
                                            const {bg_color, color} = global.types.find((style) => style.name === item.type.name)
                                            return (
                                                <span class="poke-type" style={{background: bg_color, color: color}} key={index}>
                                                    {item.type.name}
                                                </span>
                                            )
                                    })}
                                </div>
                                <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                            </div>
                        </Link>
                    )
                })}
            </Div>
            <div ref={global.elementObs} className='buttons'>
                {global.load ? <img src='loading.png' alt='loading' className='loading'></img> : null}
                {global.statusBtn && <button onClick={() => {
                    global.nextPage()
                    global.initObserver()
                    global.setStatusBtn(false)
                    global.setStatusSelect(true)
                }}>Ver mais</button>}
            </div>
        </>
    )
}

export default Pokemon