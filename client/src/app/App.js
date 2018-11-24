import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Landing from "../landing/";
import Voting from "../voting/";
import Dashboard from "../dashboard/";

export const App = () =>  {

    const currentSprint = 1;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Landing currentSprint={currentSprint}/>}/>
                <Route path="/voting/:ticketId" render={() => <Voting/>} />
                <Route path="/dashboard" render={() => <Dashboard currentSprint={currentSprint}/>} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;