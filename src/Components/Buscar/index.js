import React from 'react'
import { GlobalContext } from '../GlobalContext'

const Buscar = () => {
    const global = React.useContext(GlobalContext)

    return (
        <div className='container' style={{display: 'grid', background: 'tomato', gridTemplateColumns: '1fr', boxSizing: 'border-box', padding: '0 40px 100px 40px', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'}}>
            <div style={{display: 'grid'}}>
                <h3 style={{color: '#fff'}}>Busca por tipo</h3>
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
                        //global.setStatusObserver(null)
                    }
                    }} defaultValue='All' className='select-buscar'>
                    <option>All</option>
                    {global.types.map((item, index) => {
                        return (
                            <option key={index}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Buscar