import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Todo = () => {


    const [Task,settask]=useState('');
    const [id,setid]=useState(false);
    const [completed,setcompleted]=useState(false);
    
    const [state,setstate]=useState([])
    const FetchData=()=>{
        axios.get(`${import.meta.env.VITE_URL}`)
        .then(res=>{
            setstate(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        FetchData()
    },[])


    const AddData=(id)=>{
    axios.post(`${import.meta.env.VITE_URL}`,{
        Task:Task,
        completed:completed
    })
    .then(res=>{
        FetchData()
    })
    .catch(err=>{
        console.log(err)
    })

}

const UpdateData=(id)=>{

}

const Delete=(id)=>{
    axios.delete(`${import.meta.env.VITE_URL}${id}`)
    .then(res=>{
        FetchData()
    })
    .catch(err=>{
        console.log(err)
    })
}


    

  return (
    <div className='todo-container'>
        <div className='Head'>
            <h1>ToDo List</h1>
        </div>
        <div className='Task-Input'>
            <label>Task</label> <br />
            <input type="text" onChange={(e)=>settask(e.target.value)} placeholder="Enter the Task"/>
            <br />
            <label>Completed</label> <input type="checkbox" className='Check' onChange={(e)=>setcompleted(!completed)}  />
            <button onClick={()=>AddData()}>Add Task</button>
        </div>
        <h2>List</h2>
        <ul>
        <div className='Data-Shows'>
            {state.map((item)=>{
                return(
                    <li key={item._id}>
                    <h3>{item.Task}</h3>
                    <h3>{item.completed?"true":"false"}</h3>
                    <div>
                    <button onClick={()=>UpdateData(item._id)}>Edit</button>
                    <button onClick={()=>Delete(item._id)}>Delete</button>
                    </div>
                  </li>
                )
            })}

        </div>
        </ul>
    </div>
  )
}

export default Todo
