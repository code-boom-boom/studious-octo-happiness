import React from "react";
import {Container, Divider, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import classnames from "classnames";
import languages from "./languages";
import externalLinks from "./externalLinks";

function Footer() {

    const theme = useTheme();
    const mdScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Container maxWidth="md" className={ classnames(mdScreen ? "p-0" : null, "footer-container") } >
            <ul className="language-list">
                { languages.map((language, index) => (
                    <li key={ `language-${ index }` } className="language-item">{ language.name }</li>
                )) }
            </ul>
            <Divider className="divider" />
            <ul className="link-list">
                { externalLinks.map((link, index) => (
                    <li key={ `link-${ index }` } className="link-item">{ link.title }</li>
                )) }
            </ul>
            <Typography variant="body1" className="copyright">Facebook © 2021</Typography>
        </Container>
    );
}

export default Footer;