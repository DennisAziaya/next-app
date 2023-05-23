import React from 'react';

interface buttonProps {
    title : string;
    onButtonSubmit: () => void;
}

const Button : React.FC<buttonProps> = ({title, onButtonSubmit}) => {
    const handleButtonSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onButtonSubmit();
    };

    return (
        <button
            type="submit"
            onSubmit={handleButtonSubmit}
            className="flex w-full justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm  text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            {title}
        </button>
    );
};

export default Button;