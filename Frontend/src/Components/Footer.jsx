import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
    <footer className='bg-gray-200 text-black dark:bg-slate-700 dark:text-white'>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
         <div className='w-64 md:mx-0 mx-auto text-center md:text-left'>
          <h3 className='font-bold text-4xl'>
               Book<span className='text-pink-500'>Store</span>
          </h3>
         </div>

         <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:text-left text-center'>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4 '>
          <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
            MENU
            </h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>Info Center</li>
              <li className='mt-1'>News Blog</li>
              <li className='mt-1'>Login</li>
            </ul>
          </div>


          <div className='lg:w-1/4 md:w-1/2 w-full px-4 '>
          <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
            COMPANY
            </h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>About us</li>
              <li className='mt-1'>Privacy Policy</li>
              <li className='mt-1'>Terms & Condition</li>
              <li className='mt-1'>Login</li>
            </ul>
          </div>

          
          <div className='lg:w-1/4 md:w-1/2 w-full px-4 '>
          <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
            CONTACT
            </h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>Contact Seals</li>
              <li className='mt-1'>+919856321456</li>
              <li className='mt-1'>News Blog</li>
              <li className='mt-1'>+918654789654</li>
            </ul>
          </div>


          <div className='lg:w-1/4 md:w-1/2 w-full px-4 '>
          <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
            TECH SUPPORT
            </h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>Contact Support</li>
              <li className='mt-1'>Info Center</li>
              <li className='mt-1'>Activate</li>
            </ul>
          </div>
         </div>
      </div>


      <div className='bg-pink-500 text-black'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p>
          © 2024 MechShop -<span>@copyright</span>
          </p>
          <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <span className='mr-3'><FaFacebook size={30}/> </span> 
           <span className='mr-3'><IoLogoInstagram size={30}/></span>  
           <span className='mr-3'><FiTwitter size={30} /></span>

          </p>
        </div>

      </div>

    </footer>
    </>
    
  )
}

export default Footer