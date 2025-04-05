import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";

function Signup() {
      const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);


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
        <input type='email' 
        placeholder='Enter Your FullName'
        className='w-80 mt-2 px-3 border rounded-md outline-none' 
        {...register("name", { required: true })}
        />
        <br/>
        {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
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
        {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
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
         {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
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