import React from 'react'
import { GlobalContext } from '../GlobalContext'
import Div from './styled'

const Buscar = () => {
    const global = React.useContext(GlobalContext)

    return (
        <Div className='container'>
            <div>
                <h3>Busca por tipo</h3>
                <select onChange={(event) => {
                    global.setDadosPoke([])
                    if (event.target.value === 'All') {
                        global.setStatusObserver(0)
                        global.setStatusBtn(true)
                        global.fetchApi('https://pokeapi.co/api/v2/pokemon')
                    } else {
                        global.setStatusSelect(false)
                        global.setStatusBtn(false)
                        global.setStatusSelect(false)
                        global.fetchSelect(event.target.value)
                    }
                    }} defaultValue='All'>
                    <option>All</option>
                    {global.types.map((item, index) => {
                        return (
                            <option key={index}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        </Div>
        
    )
}

export default Buscar