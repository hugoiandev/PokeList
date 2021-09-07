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
                <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <input ref={elementInput} type='text' className='buscar' placeholder='Buscar Pokémon por nome/numero' style={{width: '600px', margin: '0 0 0 20px', padding: '10px', borderRadius: '20px',
                    border: '2px solid #d6d6d6', position: 'relative', zIndex: '1', borderRight: 'none', flex: '1'}}>
                    </input>
                    <a onClick={(event) => {
                        event.preventDefault()
                        global.setStatusSelect()
                        global.setDadosPoke([])
                        global.fetchApi(`https://pokeapi.co/api/v2/pokemon/${elementCurrent.value.toLowerCase()}`)
                        global.setStatusBtn(false)
                    }} href='/' style={{position: 'relative', left: '-20px', zIndex: '0', background: 'tomato', padding: '5px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: '20px', borderTopRightRadius: '20px'}}>
                        <img style={{height: '30px,', width: '30px'}} src='pesquisar.svg' alt='pesquisar'></img>
                    </a>
                </div>
                <div className='busca-avancada container'>
                    <nav>
                        <ul>
                            <li style={{listStyle: 'none', display: 'flex', alignItems: 'center'}}>
                                <a href='/' onClick={(event) => {
                                    event.preventDefault()
                                    global.setActiveBusca(!global.activeBusca)
                                    }} style={{textDecoration: 'none', fontSize: '1.1em', color: 'tomato'}}>Pesquisa Avançada</a>
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