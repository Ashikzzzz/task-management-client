import React, { useContext } from 'react'
import { CONTEXT } from '../../context/MainContext'
import { Link, useNavigate } from 'react-router-dom'

const ManageUser = () => {
    const navigate=useNavigate()
    const {user}=useContext(CONTEXT)
    

        const handleManageProfile=(e)=>{
            e.preventDefault()
            const form = e.target;
            const name = form.name.value

            const manageData={
                name:name
            }
            fetch(`http://localhost:5000/api/users/manage-profile/${user._id}`,{
                method: "PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(manageData)
            })
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("data updated");
                  }
                navigate("/profile")
            })
        }

        
  return (
    <div>
        <h1 className='text-5xl font-bold text-slate-900'>Manage Your profile</h1>

       <form onSubmit={handleManageProfile}>
       <div>
        <input name="name" type="text" placeholder="Type here " defaultValue={user?.name} className="input input-bordered w-full max-w-xs mt-4" />
        </div>
        <button type='submit' className="text-sm mt-6  w-1/2 mx-auto max-w-xs border-b-2  btn btn-primary ">
                    <Link>Submit</Link>
               </button>
       </form>
    </div>
  )
}

export default ManageUser