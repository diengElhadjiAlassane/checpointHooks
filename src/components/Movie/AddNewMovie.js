import React, { useContext, useState } from 'react';
import { TodosContext } from './MyFunction';
import { Table, Form, Button } from 'react-bootstrap';

function AddNewMovie(){
    const {state, dispatch} = useContext(TodosContext); 
    const [todoTitle, setTodoTitle] = useState("") ;
    const [todoDesc, setTodoDesc] = useState("") ;
    const [todoUrl, setTodoUrl] = useState("") ;
    const [todoRate, setTodoRate] = useState("") ;
    const [editMode, setEditMode] = useState(false) ;  
    const [editTodo, setEditTodo] = useState(null) ;  
    const buttonTitle = editMode ? "Edit" : "Add";

    const handleSubmit = event => {
        event.preventDefault();
        if(editMode){            
            dispatch({type: 'edit', payload: {...editTodo,text:todoTitle}})
            setEditMode(false)
            setEditTodo(null)
        }
        
        else{

            dispatch({type: 'add', payload:todoTitle});
            dispatch({type: 'add', payload:todoDesc});
            dispatch({type: 'add', payload:todoUrl});
            dispatch({type: 'add', payload:todoRate});

        }

        setTodoTitle("");
        setTodoDesc("");
        setTodoUrl("");
        setTodoRate("");

    }
      
    return(
        <div className="container-fluid" style={{marginLeft: '-15px'}} >
              <p>Add Movie</p>
            <div className="d-flex flex-row">
              
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">                
                    <Form.Control 
                        type="text" 
                        placeholder="Title" 
                        onChange={event => setTodoTitle(event.target.value)}
                        value={todoTitle}
                    />
                    <Form.Control 
                        type="text" 
                        placeholder="description" 
                        onChange={event => setTodoDesc(event.target.value)}
                        value={todoDesc}
                    />

                    <Form.Control 
                        type="url" 
                        placeholder="posterUrl" 
                        onChange={event => setTodoUrl(event.target.value)}
                        value={todoUrl}
                    />

                    <Form.Control 
                        type="text" 
                        placeholder="Rating" 
                        onChange={event => setTodoRate(event.target.value)}
                        value={todoRate}
                    />

                </Form.Group> 
                <Button variant="primary" type="submit">
                    {buttonTitle}
                </Button>                               
            </Form>
            </div>

           <Table striped bordered hover>
             
            <tbody>
                {state.todos.map(todo =>(
                    <tr key={todo.id}>                        
                        <td>
                            {todo.text}
                        </td>
                        
                    </tr>
                ))}                
            </tbody>
            </Table>            
        </div>
    )
}

export default AddNewMovie;