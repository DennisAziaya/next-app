import React from 'react';

interface ItemContainerProps {
    children: React.ReactNode;
}

const ItemContainer: React.FC<ItemContainerProps> = ({ children }) => {
    return (
        <div className="w-full md:w-[30%]">
            {children}
        </div>
    );
};

export default ItemContainer;
