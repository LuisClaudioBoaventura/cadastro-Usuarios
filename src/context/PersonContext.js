import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const PersonContext = createContext();

const PersonContextProvider = (props) => {

    const [Persons, setPersons] = useState([{

        title: 'Luis Claudio Boaventura',
        author: 'Administrador',
        id: 1
    }]);


    const addPerson = (title, author) => {

        setPersons([...Persons, { title: title, author: author, id: uuidv4() }])

    };
    const removePerson = (id) => {
        setPersons(Persons.filter(Person => Person.id !== id))

    };


    const editPerson = (id, title = "he") => {

        const editData = Persons.map(Person => (Person.id === id) ?

            { id, title, author: Person.author } : Person);

        setPersons(editData)

    }


    return (

        <PersonContext.Provider value={{ Persons, addPerson, removePerson, editPerson }}>
            {props.children}
        </PersonContext.Provider>

    )
}

export default PersonContextProvider;