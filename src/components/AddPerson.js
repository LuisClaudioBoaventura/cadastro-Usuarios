import React , { useContext, useState }  from 'react'
import { PersonContext } from '../context/PersonContext';
import { useHistory } from "react-router-dom";

  
const AddPerson = () =>{
    const { addPerson } = useContext(PersonContext);
    const [ title ,  setTitleChangeHandler] = useState('')
    const [ author , setAuthorChangeHandler] = useState('')
    
    const history = useHistory();
    const goHome = () => history.push('/');


    const submitHandler =(event) =>{
        event.preventDefault();
        if(title === ''){
            alert('Entre com o nome da pessoa')
        }else if(author === ''){

            alert('Entre com o seu cargo')
            
        }else{
            addPerson(title , author);
            goHome();
        }
 
        setTitleChangeHandler('');
        setAuthorChangeHandler('');
    }
    return(

        <div style={{ margin:120 }}>

        <form onSubmit={submitHandler} className="form-group"> 
        
            <input style={{ margin:20 }} name="title" className="form-control"
             onChange={(event)=> setTitleChangeHandler(event.target.value)}
            type="text" value={title} placeholder="Entre com o nome da pessoa" />

            <input style={{ margin:20 }} name="author" className="form-control"
            onChange={(event)=> setAuthorChangeHandler(event.target.value)} 
            type="text" value={author} placeholder="Entre com o seu cargo"/>

            <button style={{ margin:20 }} onClick={submitHandler}  className="btn btn-primary" type="submit" > 
                    Cadastrar
            </button>
        </form>
           

        </div>
    )

}

export default AddPerson;
