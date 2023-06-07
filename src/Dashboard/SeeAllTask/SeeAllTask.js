import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SeeAllTask = () => {
    const [tasks, setTasks]=useState([])

useEffect(()=>{
fetch("http://localhost:5000/api/task/get-all-task",{
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
})
.then(res => res.json())
.then(data =>{
    console.log(data)
    setTasks(data)
})
},[])

  return (
    <div className='grid grid-cols-3 gap-y-10'>
       {
         tasks?.data?.map(task => {
            return <div >
                <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{task?.title}</h2>
              <p>{task?.description}</p>
              <p>Due-Date: {task?.due_date}</p>
              <p>Status: {task?.status}</p>
            </div>
            <button className='btn btn-primary'><Link>Edit</Link></button>
          <button className='btn btn-primary mt-2'><Link>Delete</Link></button>
          </div>
          
            </div>
         })
       }
    </div>
  )
}

export default SeeAllTask