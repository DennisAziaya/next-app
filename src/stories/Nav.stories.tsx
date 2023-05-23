import React from 'react';
import Container from "../components/Container";
import TitleText from "../components/TitleText";
import NavBar from "../components/nav/Nav";
import {Meta} from "@storybook/react";

export const Navigation : React.FC = () => {
    return (
        <Container>
            <TitleText title={"Navigation Bar"}/>
            <NavBar/>
        </Container>
    );
};


export default {
    title: 'Navigation',
    component: Navigation,
} as Meta;