import React, { useState } from 'react';
import LoopedPersons from './components/Person/loopPerson';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/common/Header';
import NewPerson from './components/Person/NewPerson';

// Context Api
import SimpleContext from './components/context/SimpleContext';

const App = () => {

    const [getPersons, setPersons] = useState([])
    const [getSinglePerson, setSinglePerson] = useState("")
    const [getShowPersons, setShowPersons] = useState(true)


    const handleShowPerson = () => {
        setShowPersons(!getShowPersons)
    }

    const handleDeletePerson = (id) => {
        // First We Should Make a Copy of State
        const copyState = [...getPersons];
        // Second : push copy in Filter
        const filterState = copyState.filter(p => p.id !== id)
        // Last : Update the State
        setPersons(filterState)

        const personIndex = copyState.findIndex(p => p.id === id)
        const pe = copyState[personIndex]
        toast.error(`${pe.fullname} deleted`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000
        })
    }

    const handleNameChanger = (e, id) => {
        const { persons: allPer } = getPersons;

        const personIndex = allPer.findIndex(p => p.id === id);
        const person = allPer[personIndex];
        person.fullname = e.target.value;

        const persons = [...allPer]

        persons[personIndex] = person
        setPersons(persons)
    }

    const handleNewPerson = (e) => {
        const persons = [...getPersons]
        const person = {
            id: Math.floor(Math.random() * 10000),
            fullname: getSinglePerson
        };
        if (person.fullname === "" || person.fullname === " ") {
            // alert("Please Write A Name")
            toast.warn("Please Fill The Name", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1000
            })
        } else {


            toast.success(`${person.fullname} added`, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 2000
            })
            persons.push(person)
            setPersons(persons)
            setSinglePerson("")
        }

    }

    const setPerson = (e) => {
        setSinglePerson(e.target.value)

    }

    let showHide = null
    if (getShowPersons) {
        showHide = <LoopedPersons />
    }

    return (
        <SimpleContext.Provider
            value={{
                persons: getPersons,
                person: getSinglePerson,
                handleDeletePerson: handleDeletePerson,
                handleNewPerson: handleNewPerson,
                handleNameChanger: handleNameChanger,
                setPerson: setPerson
            }}>
            <div className="text-center">
                <div className="container gooshe shadow-lg mb-3 text-light mt-3 p-5">

                    <Header appTitle="Person Manager" />
                    <NewPerson />
                    <button
                        className={getShowPersons ? "btn btn-outline-danger btn-block " : "btn  btn-outline-primary "}
                        onClick={handleShowPerson}>
                        {getShowPersons ? "Hide" : "Show"}
                    </button>

                </div>


                {showHide}
                <ToastContainer />
            </div>
        </SimpleContext.Provider>
    );
}




export default App; 