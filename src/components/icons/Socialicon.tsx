import React from 'react';
import {BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs";

const SocialIcon: React.FC = () => {
    return (
        <div className="flex space-x-4 items-center justify-center text-gray-300">
            <button className={'hover:text-white'}>
                <BsLinkedin/>
            </button>
            <button className={'hover:text-white'}>
                <BsTwitter/>
            </button>
            <button className={'hover:text-white'}>
                <BsFacebook/>
            </button>
        </div>
    );
};

export default SocialIcon;