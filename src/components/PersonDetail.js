import React, { useContext, useState } from 'react';
import { PersonContext } from '../context/PersonContext';
import EditPerson from './EditPerson';

const PersonDetail = ({ Person }) => {

    const { removePerson } = useContext(PersonContext)
    const { editPerson } = useContext(PersonContext)
    const [isEdit, setTrue] = useState(!true)


    return (
        <div className="card" >
            <h5 className="card-header">
                <div onClick={() => removePerson(Person.id)} className="btn btn-primary">Deletar</div>
                {
                    isEdit === false ?
                        <div onClick={() => setTrue()} className="btn btn-primary ml-5">Editar</div>
                        :
                        <div onClick={() => setTrue(!true)} className="btn btn-primary ml-5">Voltar</div>
                }
            </h5>
            <div className="card-body">
                {
                    isEdit === false ?
                        <h5 className="card-title">{Person.title}</h5>
                        :
                        <EditPerson id={Person.id} title={Person.title} editPerson={editPerson} setTrue={setTrue} />}
                <p className="blockquote-footer">{Person.author}</p>
            </div>
        </div>


    );
};

export default PersonDetail;