import React from 'react';

const Search: React.FC = () => {
    return (
        <input className={'appearance-none w-[60%] rounded-full border px-3 py-2 placeholder-gray-300 shadow-sm  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'}
               type="text" name="search" id="" placeholder={'Search Item'}/>
    );
};

export default Search;