import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) =>  {
      const userInfo={
       
        email:data.email,
        password:data.password,
      }
      await axios.post("http://localhost:8000/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Successfully Logedin');
           setTimeout(()=>{
            document.getElementById("my_modal_3").close();
            window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
           },1000)
         
         
        
        }
        
      }).catch((err)=>{
        if(err.response){
          toast.error('Error: '+err.response.data.message);
         setTimeout(()=>{},3000)

        }
      })
    }
    
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
      onClick={()=> document.getElementById("my_modal_3").closest()}
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> 

    <h3 className="font-bold text-lg">Login</h3>
    {/* email */}
    <div className='mt-4 ml-2'>
        <span>Email</span>
        <br/>
        <input type='email' 
        placeholder='Enter Your Email'
        className='w-80 mt-2 px-3 border rounded-md outline-none' 
        {...register("email", { required: true })}
        />
        <br/>
         {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-4 ml-2'>
        <span>Password</span>
        <br/>
        <input type='text' 
        placeholder='Enter Your Password'
        className='w-80 mt-2 px-3 border rounded-md outline-none'
        {...register("password", { required: true })} 
        />
        <br/>
         {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
    </div>
   {/* button */}
 <div className='flex justify-around mt-5'>
  <button className='bg-pink-500 px-3 py-1 duration-200 hover:bg-pink-700 border rounded-md text-white'>Login</button>
  <p>Not register? <Link to="/signup"
  className='text-blue-700 underline'>Signup</Link>
  </p>
 </div>
 </form>
  </div>
</dialog>
        </div>
  )
}

export default Login