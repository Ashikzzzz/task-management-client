import React, { useContext } from 'react'
import { CONTEXT } from '../../context/MainContext'
import { Link } from 'react-router-dom'

const Profile = () => {
    const {user}=useContext(CONTEXT)



  return (
    <div>
        <h1 className='text-5xl text-slate-800 font-bold'>Task Management</h1>
        <h1 className='text-3xl font-bold mt-8'> Your Profile</h1>

        <h4 className='font-bold mt-2'>Name:  <p>{user?.name}</p></h4>
        <h4 className='font-bold mt-2 inline'>email: <p> {user?.email}</p></h4>

        <button><Link className='btn btn-primary rounded mt-2' to="/manage-user">Manage User</Link></button>
    </div>
  )
}

export default Profile