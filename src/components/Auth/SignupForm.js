import React from "react";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Dialog,
    FormControl,
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import useSignupUser from "../../hooks/useSignupUser";

function SignupForm({ open, setLoginOpen }) {

    const {
        loading,
        error,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleSignupUser
    } = useSignupUser();

    return (
        <Dialog
            disableEscapeKeyDown
            open={ open }
            fullWidth
            scroll="body"
            maxWidth="sm"
            onClose={ (event, reason) => {
                if (reason === "backdropClick") return false;
                setLoginOpen(false);
            } }
        >
            <Card className="signup-form">
                <CardHeader
                    className="form-header"
                    title={
                        <Typography variant="h5">Sign Up</Typography>
                    }
                    subheader={
                        <Typography variant="body1">It's quick and easy</Typography>
                    }
                    action={
                        <IconButton
                            color="primary"
                            onClick={ () => setLoginOpen(false) }
                        >
                            <Close />
                        </IconButton>
                    }
                />
                <CardContent
                >
                    <form className="form-container" onSubmit={ handleSignupUser }>
                        <FormControl className="form-control">
                            <TextField
                                onChange={ handleNameChange }
                                label="Full name"
                                variant="outlined"
                                error={ !!(error && error.name) }
                                helperText={ error && error.name ? error.name : null }
                            />
                        </FormControl>
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

                        <Typography variant="body2" className="policy">
                            By clicking Sign Up, you agree to our Terms, <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.
                        </Typography>

                        <Button
                            type="submit"
                            disabled={ loading }
                            variant="contained"
                            fullWidth
                            className="signup-btn"
                        >
                            { loading ? (
                                <CircularProgress variant="indeterminate" size={ 30 } className="btn-loading" />
                            ) : (
                                <Typography variant="h5">Sign up</Typography>
                            ) }
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </Dialog>
    );
}

export default SignupForm;