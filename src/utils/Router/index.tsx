import React from "react";
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from "react-router-dom";

import { About, Cards, CardForm, Home } from '../../components';

export default function Router() {
    return (
        <BRouter>
            <div>
                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/cards">
                        <Cards />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/add">
                        <CardForm />
                    </Route>
                </Switch>
            </div>
        </BRouter>
    );
}