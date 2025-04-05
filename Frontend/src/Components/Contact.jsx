import React from 'react'
import { MdMessage } from "react-icons/md";
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
            const onSubmit = data => console.log(data);
  return (
    <>

           <div  className="dark:mt-10 max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 my-10">
           
           <h1 className='text-2xl  dark:pt-16  md:text-4xl '>
           Get in Touch with <span className='text-pink-500'> Us :)</span> 
      </h1>
      <p className='mt-8'> 
      We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Fill out the form below or use the contact details provided—we’ll get back to you as soon as possible. 
          </p>
           </div>
        <div className='flex  items-center justify-center '> 
           
       <div id="my_modal_3" className=" border   shadow-md p-5 rounded-md">
      <div className=" ">
        <form onSubmit={handleSubmit(onSubmit)} method="">
          {/* if there is a button in form, it will close the modal */}
          <Link to="/"> <h1 className='ml-80'><AiOutlineClose /></h1></Link>
       
        <h3 className="font-bold text-lg">Contact us </h3>
        {/* name */}
        <div className='mt-4 ml-2'>
            <span>Name</span>
            <br/>
            <input type='email' 
            placeholder='Enter Your FullName'
            className='w-80 mt-2 px-3 border rounded-md outline-none dark:text-black' 
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
            className='dark:text-black w-80 mt-2 px-3 border rounded-md outline-none' 
            {...register("email", { required: true })}
            />
            <br/>
            {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
        </div>
        {/* password */}
        <div className='mt-4 ml-2'>
            <span>Message</span>
            <br/>
            <input type='text' 
            placeholder='Enter Your message'
            className='dark:text-black w-80 mt-2 px-3 border rounded-md outline-none' 
            {...register("message", { required: true })}
            />
             <br/>
             {errors.name && <span className='text-red-600 text-sm'>This field is required</span>}
        </div>
       {/* button */}
     <div className='flex justify-around mt-5'>
      <button className='bg-pink-500 px-3 py-1 duration-200 hover:bg-pink-700 border rounded-md text-white'>Send</button>
       
     </div>
     </form>
    
    
    
      </div>
    </div>
        </div>
    </>
  )
}

export default Contact