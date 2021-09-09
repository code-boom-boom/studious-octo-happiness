/**
 * Hook For User Login
 */
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../App";
import {useHistory} from "react-router-dom";
import {fetchCurrentUser} from "Services/Auth";

const url = process.env.REACT_APP_API_URI;

const useLoginUser = (userData = null) => {
    const { userDispatch } = useContext(UserContext);

    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialState, setInitialState] = useState({ email: "", password: "" });

    useEffect(() => {
        setInitialState({ ...initialState, email: userData ? userData.email : "" });
    }, []);

    const handleEmailChange = (e) => {
        setInitialState({ ...initialState, email: e.target.value });
        setError({ ...error, email: "" });
    }

    const handlePasswordChange = (e) => {
        setInitialState({ ...initialState, password: e.target.value });
        setError({ ...error, password: "" });
    }

    async function handleLoginUser(e) {
        e.preventDefault();

        setLoading(true);

        try {
            const { data } = await axios.post(`${ url }/api/auth/login`, initialState);

            localStorage.setItem("token", JSON.stringify(data.data.token));

            setLoading(false);

            const me = await fetchCurrentUser();

            if (me.data) {
                userDispatch({ type: "SET_CURRENT_USER", payload: me.data.user });

                history.push("/home");
            }
        } catch (err) {
            setLoading(false);

            console.log(err);

            if (err && err.response) {
                if (err.response.status === 422) {
                    setError({ ...err.response.data.error });
                }
            }
        }
    }

    return {
        loading,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleLoginUser
    };
}

export default useLoginUser;