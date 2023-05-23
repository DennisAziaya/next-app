import React from 'react';
import UserIcon from "@/components/icons/UserIcon";
import TitleText from "@/components/TitleText";
import Container from "@/components/Container";
import {BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs";
import SocialIcon from "@/components/icons/Socialicon";

const UserCard  : React.FC = () => {
    return (
        <Container>
            <TitleText title={"Avatar"}/>
            <div className={'flex flex-col   w-[70%] md:w-[100%] lg:w-[80%] mx-auto justify-center bg-gray-600 rounded-xl items-center p-8'}>
                <UserIcon/>
                <div className="text-white text-center my-4">
                    <div className={'text-base font-bold'}>James Smith</div>
                    <div className={'text-[.85rem] font-light'}>Javascript Developer</div>
                </div>
                <SocialIcon/>
            </div>
        </Container>
    );
};

export default UserCard;