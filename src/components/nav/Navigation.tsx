import React from 'react';
import Container from "@/components/Container";
import TitleText from "@/components/TitleText";
import NavBar from "@/components/nav/Nav";

const Navigation : React.FC = () => {
    return (
        <Container>
            <TitleText title={"Navigation Bar"}/>
            <NavBar/>
        </Container>
    );
};

export default Navigation;