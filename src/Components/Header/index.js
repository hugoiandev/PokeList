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
                    <div class="header-image"></div>
                    <div class="search-container">
                        <input onChange={(event) => setElementCurrent(event.target.value)} type='text' className='buscar' placeholder='Realize a busca por Pokémon pelo nome ou usando o número'>
                        </input>
                        <a onClick={(event) => {
                            event.preventDefault()
                            global.setStatusSelect()
                            global.setDadosPoke([])
                            global.fetchApi(`https://pokeapi.co/api/v2/pokemon/${elementCurrent.toLowerCase()}`)
                            global.setStatusBtn(false)
                            }} href='/'>
                        </a>

                    </div>
                </div>
                <div className='busca-avancada container'>
                    <nav>
                        <ul>
                            <li>
                                <a href='/' onClick={(event) => {
                                    event.preventDefault()
                                    global.setActiveBusca(!global.activeBusca)
                                    }}> Busca Avançada
                                </a>
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