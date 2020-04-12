import { createContext } from 'react';

const SimpleContext = createContext({
    persons: [],
    person: "",
    handleDeletePerson: () => { },
    handleNameChanger: () => { },
    handleNewPerson: () => { },
    setPerson: () => { }
})

export default SimpleContext; 