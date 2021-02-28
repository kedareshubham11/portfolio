import React from 'react';
import "./Header.css";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from '@material-ui/icons';
import data from "../../utils/portfolioData";
import CustomButton from "../Button/Button";


function Header(props) {
    const pathName = props?.location?.pathname;
    return (
        <Navbar expand="lg" sticky="top" className="header">
            <Nav.Link as={NavLink} to="/" className="header__navLink">
                <Navbar.Brand className="header__home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header__left">
                    {/* Resume Link */}
                    <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "headerLink__active" : "headerLink"}>RESUME</Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "headerLink__active" : "headerLink"}>PORTFOLIO</Nav.Link>

                    {/* contact Link */}
                    <Nav.Link as={NavLink} to="/contact" className={pathName === "/contact" ? "headerLink__active" : "headerLink"}>CONTACT</Nav.Link>
                </Nav>

                <div className="header__right">
                    {Object.keys(data.socials).map(key => (
                        <a href={data.socials[key].link} target="_blank" rel="noreferrer">{data.socials[key].icon}</a>
                    ))}
                    <CustomButton text={"Hire Me"} icon={<Telegram />}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
