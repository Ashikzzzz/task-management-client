import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTEXT } from '../../context/MainContext'

const SeeAllTask = () => {
const {user}=useContext(CONTEXT)

const { data: tasks, refetch } = useQuery({
  queryKey: ['tasks'],
  queryFn: async () => {
try {
  const res = await fetch("http://localhost:5000/api/task/get-all-task");
  const data = await res.json();
          return data;
} catch (err) {
  console.error(err);
}
},
})




const handleDeleteTask=(id)=>{
  const sure = window.confirm("Are you sure to delete this review");
  if(sure){
    fetch(`http://localhost:5000/api/task/delete-task/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      refetch()
    })
  }
 
}


  return (
    <div>
        <h1 className='text-3xl font-bold'>All Tasks</h1>
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
          

           {
                user?.role==="admin" &&
                <>
           
           <button className='btn btn-primary'><Link to={`/dashboard/editTask/${task._id}`}>Edit</Link></button>
          <button onClick={()=> handleDeleteTask (task?._id)}  className='btn btn-primary mt-2'>Delete</button>
           </>           
                
            }
           {
                user?.role==="user" &&
                
             task?.status === "completed" &&
               <button disabled  className='btn btn-primary mt-2'>Accept</button>

            }
           {
                user?.role==="user" &&
                
             task?.status !== "completed" &&
               <button   className='btn btn-primary mt-2'>Accept</button>

            }

        
          </div>
          
            </div>
         })
       }
    </div>
    </div>
  )
}

export default SeeAllTask