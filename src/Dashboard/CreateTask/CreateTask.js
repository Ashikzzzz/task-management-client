import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateTask = () => {
    const navigate = useNavigate()

const handleTaskForm=(e)=>{
e.preventDefault()
const form = e.target;
const title = form.title.value;
const text= form.text.value;
const duedate = form.date.value;
const status = form.status.value


const taskData= {
    title,
    description:text,
    due_date:duedate,
    status
}
fetch("http://localhost:5000/api/task/create-task",{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(taskData)
})
.then(res => res.json())
.then(data => {
    console.log(data)
    if(data?.status === "success"){
        alert(data?.massage)
        navigate("/dashboard/allTask")

    }
})

}


  return (
    <div>
        <h1 className='text-3xl font-bold mb-2'>Create A Task</h1>
       <form onSubmit={handleTaskForm}>
       <div>
        <input name='title' type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div>
        <textarea name='text' className="textarea textarea-primary mt-4" placeholder="Description"></textarea>
        </div>
        <div>
        <input name='date' type="text" placeholder="Due Date" className="input input-bordered input-primary w-full max-w-xs mt-4" />
        </div>
        <div>
        <select name='status' className="select select-primary w-full max-w-xs mt-4">
            <option disabled selected>What is the best TV show?</option>
            <option>in-progress</option>
            <option>completed</option>
            <option>pending</option>
            
       </select>  
        </div>
        <button type='submit' className="text-sm mt-6  w-1/2 mx-auto max-w-xs border-b-2  btn btn-primary ">
                    <Link>Submit</Link>
               </button>
       </form>
    </div>
  )
}

export default CreateTask