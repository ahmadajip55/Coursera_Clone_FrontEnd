import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import store from "../store"
import { Provider } from "react-redux"

import Home from "../pages/Home"
import Welcome from "../pages/Welcome";
import Supplement from "../pages/Supplement";
// import ModalLogin from "../components/ModalLogin";

const MainRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/supplement" component={Supplement} />
                    {/* <Route exact path="/login" component={ModalLogin} /> */}
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default MainRoutes;