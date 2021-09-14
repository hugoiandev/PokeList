import React from "react";
import { Switch, Route } from 'react-router-dom'
import Pokemon from "./Components/Pokemon";
import Caracteristicas from './Pages/Caracteristicas'
import { GlobalContext } from "./Components/GlobalContext";


export const Routes = () => {
    const global = React.useContext(GlobalContext)

    return (
        <Switch>
            <Route exact path='/' component={Pokemon}/>
                
            <Route exact path={`/${global.urlRoutes}`} component={Caracteristicas}/>
        </Switch>
    )
}