import React, { useContext } from 'react';
import Person from './person';
import SimpleContext from '../context/SimpleContext';



const LoopedPersons = () => {
    const context = useContext(SimpleContext)

    return (

        <div>
            {context.persons.map(per =>
                <Person
                    key={per.id}
                    fullname={per.fullname}
                    personDelete={() => context.handleDeletePerson(per.id)}
                    nameChanger={(e) => context.handleNameChanger(e, per.id)}
                />
            )}
        </div>

    );
}

export default LoopedPersons;