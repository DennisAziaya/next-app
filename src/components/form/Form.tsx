"use client";
import React, {ChangeEvent} from 'react';
import FormInput from "@/components/form/FormInput";
import Button from "@/components/form/Button";
import Container from "@/components/Container";
import TitleText from "@/components/TitleText";


const Form : React.FC = () => {

    const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const handleFormSubmit = () => {
        // Handle form submission here
    };

    return (
        <Container>
            <TitleText title={"Form"}/>
            <form className="space-y-6">
                <FormInput inputId={"email"} inputName={"email"} inputType={"email"} inputLabel={"Email"} onInputChange={handleEmailInputChange} inputPlaceholder={"Enter email"}/>
                <FormInput inputId={"password"} inputName={"password"} inputType={"password"} inputLabel={"Password"} onInputChange={handlePasswordInputChange} inputPlaceholder={"Enter password"}/>
                <Button title={"Submit"} onButtonSubmit={handleFormSubmit}/>
            </form>
        </Container>
    );
};

export default Form;