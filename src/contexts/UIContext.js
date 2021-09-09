export const initialUIState = {
    loading: false,
    darkMode: false,
    colors: {
        dark: {
            bgColor: "#18191a"
        },
        light: {
            bgColor: "#f0f2f5"
        }
    }
}

export const UIReducer = (state, action) => {

    switch (action.type) {

        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };

        case "SET_DARK_MODE":
            return {
                ...state,
                darkMode: action.payload
            };

        default:
            throw new Error(`action type ${ action.type } is undefined`);
    }
}