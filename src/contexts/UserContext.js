export const initialUserState = {
    currentUser: null,
    isLoggedIn: false
}

export const UserReducer = (state, action) => {
    switch (action.type) {

        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true
            };

        default:
            throw new Error(`action type ${ action.type } is undefined`);
    }
}