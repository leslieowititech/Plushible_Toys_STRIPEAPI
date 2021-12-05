import React, {createContext, useState} from "react";

interface SeachBarState {
    searchPhrase: string;
    setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBarContext = createContext({} as SeachBarState);


export const SearchBarProvider: React.FC = ({children}) => {
    const [searchPhrase, setSearchPhrase] = useState('');

    return (
        <SearchBarContext.Provider value={{ searchPhrase, setSearchPhrase}}>
            {children}
        </SearchBarContext.Provider>
    )
}