import React , { useState }  from 'react'

const EditPerson = (props) =>{
    const [ title ,  setTitleChangeHandler] = useState(props.title)
    const [ id ] = useState(props.id)
    

    const submitHandler =(event) =>{
        event.preventDefault();
        if(title === ''){
            alert('Entre com o nome da pessoa')
        }else{
            props.editPerson(id , title);
            props.setTrue(!true);
        }
 
        setTitleChangeHandler('');
    }
    return(

        <div style={{ margin:20 }}>

        <form onSubmit={submitHandler} className="form-group"> 
        
            <input style={{ margin:5 }} name="title" className="form-control"
             onChange={(event)=> setTitleChangeHandler(event.target.value)}
            type="text" value={title} placeholder="Entre com o nome da pessoa" />

     
            <button style={{ margin:20 }} onClick={submitHandler}  className="btn btn-primary" type="submit" > 
                    Atualizar
            </button>
        </form>
           

        </div>
    )

}

export default EditPerson;
