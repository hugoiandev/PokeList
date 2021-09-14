import React from 'react'
import { GlobalContext } from '../GlobalContext'
import Buscar from '../Buscar'
import Topo from './styled'

const Header = () => {
    const global = React.useContext(GlobalContext)
    const [elementCurrent, setElementCurrent] = React.useState(null)


    return (
        <>
            <Topo>
                <div className='container'>
                    <input onChange={(event) => setElementCurrent(event.target.value)} type='text' className='buscar' placeholder='Buscar Pokémon por nome/numero'>
                    </input>
                    <a onClick={(event) => {
                        event.preventDefault()
                        global.setStatusSelect()
                        global.setDadosPoke([])
                        global.fetchApi(`https://pokeapi.co/api/v2/pokemon/${elementCurrent.toLowerCase()}`)
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
                                <img src='seta.svg' alt='seta' style={{transform: global.activeBusca ? 'rotate(-90deg)' : 'rotate(90deg)'}}></img>
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