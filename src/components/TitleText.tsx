import React from 'react';

interface TitleProps {
    title: string;
}

const TitleText : React.FC<TitleProps> = ({title}) => {
    return (
        <h2 className={"text-black text-2xl tracking-wide font-light text-center  mb-10 mt-4 "}>
            {title}
        </h2>
    );
};

export default TitleText;