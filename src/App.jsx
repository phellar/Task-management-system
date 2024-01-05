import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TaskItem from './Components/TaskItem'
import TaskForm from './Components/TaskForm'
import {v4 as uuidv4} from 'uuid'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




function App() {
  const [task, setTask] = useState([])
  const [addTask, setAddTask] = useState(" ")
  const [error, setError] = useState(" ")

  // Get the value of the form
  const handleTaskInput = (e) =>{
      if (addTask.trim().length < 8 ){
        setError("Text must be at least 8 characters")
      }  else{
        setError(" ")
      }

  setAddTask(e.target.value)
  }


// Delete tasks from tasklist
  const deleteTask = (id) =>{

    if(window.confirm(" Are you sure you want to delete this task?")){
      const updatedTask = task.filter( task=> task.id !== id)
      setTask(updatedTask)
      removedNotification()
    }
    }

   

// Add task to task list
  const handleAdd = ()=>{
    if (addTask.trim().length > 8 ){
      const newTask = {
        id: uuidv4(),
        text: addTask,    
      }
      
      setTask([newTask,...task])
      notification();
      setAddTask( " ")

      
    }   

    else {
      setError(error)
    }

     
  }

  // Display a success notification for added task
  const notification = () =>{
    toast.success('Task Added Succesfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  // Display a success notification for removed task
  const removedNotification = () =>{
    toast.success('Task Removed Succesfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  return (
    <div className="App">
      <Header/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
{/* Same as */}
<ToastContainer />

      <div className="bg">
      <TaskForm addTask = {addTask}  handleAdd ={handleAdd}
        handleTaskInput = {handleTaskInput} error ={error}
        handleNotification ={notification}
      />
      <TaskItem  task ={task} setTask ={setTask} handleDelete= {deleteTask} />
      </div>
  </div>
   )
}

export default App
