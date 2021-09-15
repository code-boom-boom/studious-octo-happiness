import React, {useState} from "react";
import {Container, Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";

// Text Logo
import logo from "Assets/images/logos/facebook.svg";
import RecentLogins from "Components/Auth/RecentLogins";
import LoginForm from "Components/Auth/LoginForm";
import Footer from "../components/Auth/Footer/Footer";
import SignupForm from "../components/Auth/SignupForm";

function Auth() {

    const theme = useTheme();
    const mdScreen = useMediaQuery(theme.breakpoints.up("md"));

    const [toggleSignUpForm, setToggleSignUpForm] = useState(false);

    return (
        <div className="auth-page-content">
            <div className="auth-container">
                <Container maxWidth="md" className={ mdScreen ? "p-0" : null }>
                    <div className="auth-grid-container">
                        <div className="auth-grid-item-1">
                            <div className="logo-container">
                                <img
                                    src={ logo }
                                    alt="facebook text logo"
                                />
                            </div>
                            <Typography
                                variant={ mdScreen ? "h4" : "h5" }
                                align={ mdScreen ? "left" : "center" }
                                className="auth-subtitle"
                            >
                                Recent Logins
                            </Typography>
                            <Typography
                                variant="body1"
                                align={ mdScreen ? "left" : "center" }
                                className="auth-detail"
                            >
                                Click your picture or add an account
                            </Typography>
                            <RecentLogins />
                        </div>
                        <div className="auth-grid-item-2">
                            <LoginForm toggleForm={ setToggleSignUpForm } />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="auth-footer">
                <Footer />
            </div>
            <SignupForm open={ toggleSignUpForm } setLoginOpen={ setToggleSignUpForm } />
        </div>
    );
}

export default Auth;