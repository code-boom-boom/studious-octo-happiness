import React from "react";
import {Button, CircularProgress, Divider, FormControl, TextField, Typography} from "@material-ui/core";

import useLoginUser from "Hooks/useLoginUser";

function LoginForm({ toggleForm }) {

    const {
        loading,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleLoginUser
    } = useLoginUser();

    return (
        <div className="login-form-container">
            <div className="form-wrapper">
                <form className="form-container" onSubmit={ handleLoginUser }>
                    <FormControl className="form-control">
                        <TextField
                            onChange={ handleEmailChange }
                            label="Email"
                            variant="outlined"
                            error={ !!(error && error.email) }
                            helperText={ error && error.email ? error.email : null }
                        />
                    </FormControl>

                    <FormControl className="form-control">
                        <TextField
                            onChange={ handlePasswordChange }
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={ !!(error && error.password) }
                            helperText={ error && error.password ? error.password : null }
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        disabled={ loading }
                        variant="contained"
                        fullWidth
                        className="login-btn"
                    >
                        { loading ? (
                            <CircularProgress variant="indeterminate" size={ 30 } className="btn-loading" />
                        ) : (
                            <Typography variant="h5">Log In</Typography>
                        ) }
                    </Button>
                    <Typography variant="body1" align="center" className="forgot-pw-btn">Forgot Password?</Typography>
                    <Divider className="divider" />
                    <div className="create-btn-container">
                        <Button
                            type="button"
                            variant="contained"
                            className="create-btn"
                            onClick={ () => toggleForm(true) }
                        >
                            <Typography variant="h6">Create New Account</Typography>
                        </Button>
                    </div>
                </form>
            </div>
            <Typography variant="body2" className="brand-text" align="center">
                <a className="brand-cta">Create a Page</a> for a celebrity, brand or business
            </Typography>
        </div>
    );
}

export default LoginForm;