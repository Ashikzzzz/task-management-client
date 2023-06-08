import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'


const EditTask = () => {
  const navigate = useNavigate()
const data = useLoaderData()
console.log(data?.data)

const handleEditTask=(e)=>{
  e.preventDefault()
  const form = e.target;
  const title = form.title.value;
  const text= form.text.value;
  const date = form.date.value;
  const status = form.status.value;
  
  const editData= {
    title,
    description: text,
    due_date: date,
    status
  }

  fetch(`http://localhost:5000/api/task/update-task/${data?.data?._id}`,{
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(editData)
  })
  .then(res => res.json())
  .then(data => {
    if (data.modifiedCount > 0) {
      alert("data updated");
    }
  navigate("/dashboard/allTask")
  })
}


  return (
    <div>
        
        <form  onSubmit={handleEditTask}>
       <div>
        <input name='title' type="text" placeholder="Title"  defaultValue={data?.data?.title} className="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div>
        <textarea name='text'  defaultValue={data?.data?.description} className="textarea textarea-primary mt-4" placeholder="Description"></textarea>
        </div>
        <div>
        <input name='date'  defaultValue={data?.data?.due_date} type="text" placeholder="Due Date" className="input input-bordered input-primary w-full max-w-xs mt-4" />
        </div>
        <div>
        <select name='status'  defaultValue={data?.data?.status} className="select select-primary w-full max-w-xs mt-4">
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

export default EditTask