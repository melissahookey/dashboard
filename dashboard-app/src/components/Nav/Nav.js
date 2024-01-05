import '../Nav/Nav.css';
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import DateTime from "../DateTime/DateTime";
import Fetchweather from "../Weather/Weather";

export const Navigation = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Nav>
                    <DateTime />
                    <Fetchweather />
                </Nav>
            </Container>
        </Navbar>
    )
}