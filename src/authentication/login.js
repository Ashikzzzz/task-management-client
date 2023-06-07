import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

const handleLogin=(event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value 
  const loginData ={
    email : email,
    password
  }

  fetch("http://localhost:5000/api/users/log-in",{
    method: "POST",
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify(loginData)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    if(data?.status ==="success"){
        alert(data?.massage)
        const token = data?.data?.token
        localStorage.setItem("token",token)
    }
  })
  
}

  return (
    <div>
        <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900 '>Log In Here</h1>
        <div className=''>
               {/* lottie  */}
        

             <form onSubmit={handleLogin}>
             <div className='grid grid-cols-1'>
              
                <div className='mt-8'>
                
                <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-4'>
                
                <input type="text" name='password' placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                
              </div>
                <p className='mt-1 font-normal text-sm'>Need Account <Link className='underline' to='/signup'>Sign Up</Link></p>
               <button className="text-sm mt-8  w-1/2 mx-auto max-w-xs border-b-2  btn btn-primary ">
                    <Link>Log In</Link>
               </button>
              
             </form>

        </div>
    </div>
  )
}

export default Login