import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminLoginApi } from '../server/allApi'
import Swal from 'sweetalert2'

function Login() {
  // to store the values of admin email and password
  const [admin, setAdmin]=useState({
    email:"",
    password:""
  })

  // to navigate to dashboard
  const navigate = useNavigate()

  const handleAdminLogin=async(e)=>{
    e.preventDefault();
    const {email, password} = admin;

    if (!email || !password) {
      
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Please fill the form completely!"
      });
    } else {
      const response = await adminLoginApi(admin)
      console.log(response);
      if(response.status === 200){
        Swal.fire({
          title: "Good job!",
          text: "Admin Login Successfull!",
          icon: "success"
        });

        sessionStorage.setItem('existingAdmin', JSON.stringify(response.data.existingAdmin));

        sessionStorage.setItem('token', response.data.token);

        setAdmin({
          email:"",
          password:""
        })

        navigate('/dashboard')
      }
    
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: (response.response.data)
        });
      }
    }
  }

  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center flex-column shadow p-5 mt-5'>
            <div className='row'>
                <h1>Login</h1>
            </div>
            <div className='row'>
                <input value={admin.email} onChange={(e)=>setAdmin({...admin,email:e.target.value})} type="text" className='form-control mt-3' placeholder='Email' required/>
                <input value={admin.password} onChange={(e)=>setAdmin({...admin,password:e.target.value})} type="password" className='form-control mt-3' placeholder='Password' required/>
               
                <button type='button' onClick={handleAdminLogin} className='btn btn-success mt-4'>Login</button>
                
            </div>
        </div>
    </div>
  )
}

export default Login