import React from 'react'
import { GlobalContext } from '../GlobalContext'
import Buscar from '../Buscar'
import Topo from './styles'

const Header = () => {
    const global = React.useContext(GlobalContext)
    const elementInput = React.useRef(null)
    const elementCurrent = elementInput.current && elementInput.current


    return (
        <>
            <Topo>
                <div className='container'>
                    <input ref={elementInput} type='text' className='buscar' placeholder='Buscar Pokémon por nome/numero'>
                    </input>
                    <a onClick={(event) => {
                        event.preventDefault()
                        global.setStatusSelect()
                        global.setDadosPoke([])
                        global.fetchApi(`https://pokeapi.co/api/v2/pokemon/${elementCurrent.value.toLowerCase()}`)
                        global.setStatusBtn(false)
                        }} href='/'>
                        <img src='pesquisar.svg' alt='pesquisar'></img>
                    </a>
                </div>
                <div className='busca-avancada container'>
                    <nav>
                        <ul>
                            <li>
                                <a href='/' onClick={(event) => {
                                    event.preventDefault()
                                    global.setActiveBusca(!global.activeBusca)
                                    }}>Pesquisa Avançada
                                </a>
                                <img src='seta.svg' alt='seta' style={{height: '15px', width: '15px', marginLeft: '10px', transform: global.activeBusca ? 'rotate(-90deg)' : 'rotate(90deg)', transition: '.5s'}}></img>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Topo>
            {global.activeBusca ? <Buscar /> : null}
        </>
    )
}

export default Header