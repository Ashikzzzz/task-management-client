import React, { useContext, useEffect, useState } from 'react'
import { CONTEXT } from '../../context/MainContext'
import { useQuery } from '@tanstack/react-query'

const IndividualTask = () => {
const {user}=useContext(CONTEXT)
console.log(user?.email)
const [tasks, setTasks]=useState([])


useEffect(()=>{
    fetch(`http://localhost:5000/api/task/get-a-task/email?email=${user?.email}`,{
        method: "GET",
        headers: {
            "content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data?.data)
        setTasks(data?.data)
    })
},[user?.email])


// const { data: tasks } = useQuery({
//     queryKey: ['tasks'],
//     queryFn: async () => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/task/get-a-task/email?email=${user?.email}`);
//     const data = await res.json();
//             return data;
//   } catch (err) {
//     console.error(err);
//   }
//   },
//   })

// console.log(tasks?.data)
  return (
    <div className='grid grid-cols-3'>
      {
        tasks?.map(task=>{
            return  <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{task?.title}</h2>
              <p>{task?.description}</p>
              <p>{task?.due_date}</p>
              <p>{task?.status}</p>
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
  )
}

export default IndividualTask