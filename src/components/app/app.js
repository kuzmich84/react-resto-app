import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import { Switch, Route} from "react-router-dom";

const App = ({RestoService}) => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">

            <AppHeader total={100}/>
            <Switch>
                <Route
                    path="/"
                    component={MainPage}
                    exact
                />
                <Route
                    path="/cart"
                    component={CartPage}
                />


            </Switch>

        </div>
    )
};

export default App;
