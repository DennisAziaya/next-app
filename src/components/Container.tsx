import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className=" bg-white p-4 rounded shadow-md mx-auto">
            {children}
        </div>
    );
};

export default Container;
