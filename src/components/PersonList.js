import React, { useContext } from 'react';
import { PersonContext } from '../context/PersonContext';
import PersonDetail from './PersonDetail';
const PersonList = () => {

    const { Persons } = useContext(PersonContext)

    return (
        Persons.length ?
            <div className="card">

                {Persons.map(Person => {
                    return <PersonDetail Person={Person} key={Person.id} />

                })}

            </div> : <div className="card text-center">
                <div className="card-header">
                    Lista de Pessoas
                        </div>
                <div className="card-body">
                    <h5 className="card-title">Não listado</h5>
                    <p className="card-text">Adicione pessoas a Lista</p>
                </div>
            </div>
    );

}
export default PersonList;
