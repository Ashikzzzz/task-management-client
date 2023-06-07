import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
const handleSignUpSubmit =(event)=>{
  event.preventDefault()
  const form = event.target
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value 
  const role = form.role.value 

const userData = {
  name : name,
  email:email,
  password,
   role
  }
  
  fetch("http://localhost:5000/api/users/create-user",{
    method: "POST",
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(data => {
  console.log(data)
  if(data?.status === "success"){
    alert(data?.massage)
  }
  })

}

  return (
    <div>
        <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900'>Sign Up Here</h1>
        <div className=''>
               {/* lottie  */}
      

             <form onSubmit={handleSignUpSubmit}>
             <div className='grid grid-cols-1'>
              <div className='mt-8'>
              
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-4'>
              
                <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-4'>
               
                <input type="text" name='password' placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
               
                <div>
               
                <select name='role' className="select mt-4 select-primary w-full max-w-xs">
                         <option disabled selected>What is your Role?</option>
                             <option>admin</option>
                            <option>user</option>
                            </select>
                </div>
              </div>
              <p className='font-normal text-sm mt-1'> Already Have an Account?<Link className='underline' to="/login"> Click here</Link> </p>
               <button type='submit' className="text-sm mt-6  w-1/2 mx-auto max-w-xs border-b-2  btn btn-primary ">
                    <Link>Sign Up</Link>
               </button>
              
             </form>

        </div>
    </div>
  )
}

export default Signup