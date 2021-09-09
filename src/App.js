/**
 * Main App
 */
import React, {createContext, useMemo, useReducer} from "react";

// css
import "./lib/facebookCss";

// Reducers
import { initialUIState, UIReducer } from "Contexts/UIContext";
import { initialUserState, UserReducer } from "Contexts/UserContext";

// View
import MainApp from "Views/App";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

// Context
export const UIContext = createContext();
export const UserContext = createContext();

function App() {

    const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);
    const [userState, userDispatch] = useReducer(UserReducer, initialUserState);

    const theme = useMemo(
        () => createTheme({
            type: uiState.darkMode ? "dark" : "light",
            typography: {
                "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
            }
        }),
        [uiState.darkMode]
    );

    return (
        <UIContext.Provider value={{ uiState, uiDispatch }}>
            <UserContext.Provider value={{ userState, userDispatch }}>
                <MuiThemeProvider theme={ theme }>
                    <MainApp />
                </MuiThemeProvider>
            </UserContext.Provider>
        </UIContext.Provider>
    );
}

export default App;
