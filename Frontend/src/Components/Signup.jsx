import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
      const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit =  async(data) =>  {
          const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
          }
          await axios.post("http://localhost:8000/user/signup",userInfo)
          .then((res)=>{
            console.log(res.data)
            if(res.data){
               
              toast.success("Signup Successfully");
              navigate(from, { replace: true });
              window.location.reload();
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
          }).catch((err)=>{
            if(err.response){
               
              toast.error('Error: '+err.response.data.message);
            }
          })
        }
      
  return (
    <div className='flex h-screen items-center justify-center '> 
   
   <div id="my_modal_3" className=" border   shadow-md p-5 rounded-md">
  <div className=" ">
    <form onSubmit={handleSubmit(onSubmit)} method="">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"> <h1 className='ml-80'><AiOutlineClose /></h1></Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    {/* name */}
    <div className='mt-4 ml-2'>
        <span>Name</span>
        <br/>
        <input type='text' 
        placeholder='Enter Your FullName'
        className='w-80 mt-2 px-3 border rounded-md outline-none' 
        {...register("fullname", { required: true })}
        />
        <br/>
        {errors.fullname && <span className='text-red-600 text-sm'>This field is required</span>}
    </div>
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
  <button className='bg-pink-500 px-3 py-1 duration-200 hover:bg-pink-700 border rounded-md text-white'>Signup</button>
  <p>hane Account? 
    <Link to="/"
  className='text-blue-700 underline'>Login
  </Link>
  </p>
 </div>
 </form>



  </div>
</div>
    </div>
  )
}

export default Signup