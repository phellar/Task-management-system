import React from 'react'

const TaskForm = ({addTask, handleTaskInput, handleAdd, error,}) => {
  return (
    
            <div className='form'>
                 <h3>What are your plans today?</h3>
                <div className="form-group">

                    <input type="text" placeholder='Enter Task...' 
                        onChange={handleTaskInput}
                        value={addTask}
                    />
                    <p className='error'>{error}</p>  
                </div>
                <button onClick={handleAdd} className='btn'>Add Task</button>
           
    </div>
  )
}

export default TaskForm