import React from 'react'
import  useState  from 'react'

const TaskItem = ({task, handleDelete}) => {
  return (
    <div className="card">

     
        {task.map((item, id)=>(


          
            <div className="task-item" key={item.id}>
               
                <p>{item.text}</p>
                <button onClick={(id)=>handleDelete(item.id)} className='btn'>delete task</button>
            </div>
        ))}
        
        </div>
  
  )
}

export default TaskItem