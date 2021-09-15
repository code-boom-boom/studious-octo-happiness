import { useState, useContext } from "react";
import {UIContext, UserContext} from "../App";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {fetchCurrentUser} from "../services/Auth";

const url = process.env.REACT_APP_API_URI;

const useSignupUser = () => {
    const { uiDispatch } = useContext(UIContext);
    const { userDispatch } = useContext(UserContext);

    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialState, setInitialState] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleNameChange = (e) => {
        setError({ ...error, name: "" });
        setInitialState({ ...initialState, name: e.target.value });
    }

    const handleEmailChange = (e) => {
        setError({ ...error, email: "" });
        setInitialState({ ...initialState, email: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setError({ ...error, password: "" });
        setInitialState({ ...initialState, password: e.target.value });
    }

    async function handleSignupUser(e) {
        e.preventDefault();

        setLoading(true);

        try {
            const { data } = await axios.post(`${ url }/api/auth/signup`, initialState);
            localStorage.setItem("token", JSON.stringify(data.data.token));
            const me = await fetchCurrentUser();

            setLoading(false);

            userDispatch({ type: "SET_CURRENT_USER", payload: me.data.user });

            history.push("/home");
        } catch (err) {
            setLoading(false);

            console.log(err);
        }
    }

    return {
        loading,
        error,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleSignupUser
    }
}

export default useSignupUser;