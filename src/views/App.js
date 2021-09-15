import React, {Fragment, useContext} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {UIContext, UserContext} from "../App";
import TopNavBar from "Components/Navbar/TopNavBar";
import Auth from "./Auth";
import classnames from "classnames";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "./Home";

function MainApp() {
    const { uiState, uiDispatch } = useContext(UIContext);
    const { userState, userDispatch } = useContext(UserContext);

    return (
        <Fragment>
            <Router>
                <div
                    className={ classnames("main-body", `main-body-${ !uiState.darkMode ? "light" : "dark" }`) }
                >
                    { userState.isLoggedIn && <TopNavBar /> }

                    <div
                        className="content-body"
                    >
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={ () => !userState.isLoggedIn ? (<Auth />) : (<Redirect to="/home" />) }
                            />
                            <ProtectedRoute
                                exact
                                path="/home"
                                component={ Home }
                                isLoggedIn={ userState.isLoggedIn }
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Fragment>
    );
}

export default MainApp;