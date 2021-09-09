import React, {Fragment, useContext} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {UIContext, UserContext} from "../App";
import TopNavBar from "Components/Navbar/TopNavBar";
import Auth from "./Auth";
import classnames from "classnames";

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
                                render={ () => !userState.isLoggedIn ? (<Auth />) : (<div>This is dummy</div>) }
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Fragment>
    );
}

export default MainApp;