import React from 'react'

export const GlobalContext = React.createContext()


const GlobalStorage = ({children}) => {
    const [dados, setDados] = React.useState(null)
    const [dadosPoke, setDadosPoke] = React.useState([])
    const [load, setLoad] = React.useState(false)
    const [activeBusca, setActiveBusca] = React.useState(false)
    const [statusObserver, setStatusObserver] = React.useState(0)
    const [statusSelect, setStatusSelect] = React.useState(true)
    const [statusBtn, setStatusBtn] = React.useState(true)
    const elementObs = React.useRef()
    const [urlRoutes, setUrlRoutes] = React.useState(null)
    const [selectPoke, setSelectPoke] = React.useState(null)

    const initObserver = () => {
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                if (statusObserver !== null) {
                    setStatusObserver((setCurrentStatus) => setCurrentStatus + 1)
                }
            }
        })
        observer.observe(elementObs.current)
    }

    React.useEffect(() => {
        if (statusObserver >= 2 && statusSelect) {
            nextPage()
        }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusObserver])
    

    const fetchApi = async (url) => {
        try {
            setLoad(true)
            const response = await fetch(url)
            const json = await response.json()
            if (Array.isArray(json.results)) {
                setDados(json)
            } else {
                setDadosPoke([json])
            }
            setLoad(false)
        } catch {
            console.log(Error('Ocorreu um erro!'))
        }
    }

    const fetchApiPoke = async () => {
        try {
            setLoad(true)
            let resJson = []
            if (dados && dados.results.length > 0) {
                for (let i = 0; i < dados.results.length; i++) {
                    const response = await fetch(dados.results[i].url)
                    const json = await response.json()
                    resJson.push(json)
                }
                setDadosPoke([...dadosPoke, ...resJson])
                setLoad(false)
            }
        } catch {
            console.log(Error('Ocorreu um erro!'))
        }
        
    }

    const fetchSelect = async (event) => {
        try {
            setLoad(true)
            const response = await fetch(`https://pokeapi.co/api/v2/type/${event}`)
            const json = await response.json()
            const {pokemon} = json
            const length = pokemon.length
            let resJson = []
            for (let i = 0; i < length; i++) {
                const response = await fetch(pokemon[i].pokemon.url)
                const json = await response.json()
                resJson.push(json)
            }
            setLoad(false)
            setDadosPoke(resJson)
        } catch {
            console.log(Error('Ocorreu um erro!'))
        }
    }

    const nextPage = () => {
        fetchApi(dados.next)
    }

    React.useEffect(() => {
        fetchApiPoke()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dados])

    React.useEffect(() => {
        fetchApi('https://pokeapi.co/api/v2/pokemon')

    }, [])

    React.useEffect(() => {
        const match = dadosPoke.filter((item) => item.name === urlRoutes)
        setSelectPoke(match)

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlRoutes])


    const types = [
        {
            name: 'grass',
            bg_color: '#9BCC50',
            color: '#000'
        },
        {
            name: 'poison',
            bg_color: '#B97FC9',
            color: '#fff'
        },
        {
            name: 'fire',
            bg_color: '#FD7D24',
            color: '#fff'
        },
        {
            name: 'flying',
            bg_color: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
            color: '#000'
        },
        {
            name: 'water',
            bg_color: '#4592C4',
            color: '#fff'
        },
        {
            name: 'bug',
            bg_color: '#729F3F',
            color: '#fff'
        },
        {
            name: 'normal',
            bg_color: '#A4ACAF',
            color: '#000'
        },
        {
            name: 'electric',
            bg_color: '#EFD636',
            color: '#000'
        },
        {
            name: 'ground',
            bg_color: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
            color: '#000'
        },
        {
            name: 'fairy',
            bg_color: '#FDB9E9',
            color: '#000'
        },
        {
            name: 'fighting',
            bg_color: '#D56723',
            color: '#fff'
        },
        {
            name: 'psychic',
            bg_color: '#F366B9',
            color: '#fff'
        },
        {
            name: 'rock',
            bg_color: '#A38C21',
            color: '#fff'
        },
        {
            name: 'steel',
            bg_color: '#9EB7B8',
            color: '#000'
        },
        {
            name: 'ice',
            bg_color: '#51C4E7',
            color: '#000'
        },
        {
            name: 'ghost',
            bg_color: '#7B62A3',
            color: '#fff'
        },
        {
            name: 'dragon',
            bg_color: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
            color: '#fff'
        },
        {
            name: 'dark',
            bg_color: '#707070',
            color: '#fff'
        }
    ]

    return (
        <GlobalContext.Provider value={{
            dados,
            setDados,
            fetchApi,
            dadosPoke,
            load,
            types,
            activeBusca,
            setActiveBusca,
            fetchSelect,
            setDadosPoke,
            nextPage,
            initObserver,
            elementObs,
            setStatusObserver,
            statusObserver,
            setStatusSelect,
            statusSelect,
            statusBtn,
            setStatusBtn,
            setUrlRoutes,
            urlRoutes,
            selectPoke
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalStorage }