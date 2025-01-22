
import { useState } from "react";
import uuid from 'react-uuid';
import styles from './todo.module.css'

export const Todolist = ()=>{
    const [task,setTask] = useState([]);
    const [text,setText] = useState("");

    const handleTask = (event) => {
        setText(event.target.value);
    }

    const addTask = () =>{
        const obj = { 
            id: uuid(),
            objList: text,
        }
        setTask([...task,obj])
    }

    const deleteTask = (deleteId) =>{

        setTask(task.filter((item) => ( item.id === deleteId ? false : true)
        ))

    }
    return(       
        <>
            <div className={styles.Lists}>
                <h1>To-Do List</h1>
                <input type="text" onChange={handleTask}/>
                <button onClick={addTask}>Add Todo</button>            
             </div>

             <div className={styles.TodoList}>
                {task.map((item,key) => {
                     
                     return  <ul>
                        <li>
                        <h1 key={key}>{item.objList}</h1>
                        <button onClick={() => deleteTask(item.id)}>Delete</button>
                        </li>
                    </ul>
                })}                      
            </div>
        </>
    )
};
