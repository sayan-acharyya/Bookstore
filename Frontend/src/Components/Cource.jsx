import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import list from "../../public/list.json"
import Cards from './Cards'
import { IoSearchSharp } from "react-icons/io5";
function Cource() {
  const fillData=list.filter((data)=>data.category!=="free")
  const [searchTerm,setSearchTerm]=useState("");
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4   my-10">
     <div className='mt-28 dark:mt-16 items-center justify-center text-center '>
      <h1 className='text-2xl  dark:pt-16  md:text-4xl '>
       We're delighted to have you<span className='text-pink-500'> Here! :)</span> 
      </h1>
      <p className='mt-12'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Perferendis dicta velit architecto corporis enim, qui
         similique magni pariatur iure voluptate repellendus 
         asperiores fuga magnam quam incidunt quidem possimus, 
         dolorem ratione expedita, illo soluta maiores quo sint?
          Blanditiis mollitia harum in, quaerat, atque fugit cum 
          eveniet earum culpa inventore quo voluptas.
          </p>
          <Link to="/">
          <button className='bg-pink-500 hover:bg-pink-700 duration-200 mt-5 px-4 py-2 text-white rounded-md'>Back</button>
          </Link>

          <div className="text-center  mt-5 text-xl mb-3 ">
          
          <input placeholder='Search item'  type='text'  className='border-2 rounded-lg text-black px-2 py-2 w-[350px]'onChange={(event) => { setSearchTerm(event.target.value)
          }}/>
          <button className=' ml-2  px-3 py-3   bg-black text-white rounded-lg'> <IoSearchSharp /></button>
         </div>

     </div>
     <div className='mt-12 dark:text-black grid grid-cols-1 md:grid-cols-3  '>
      {
         fillData
         .filter((val)=>{//search item
          if(searchTerm==""){
              return val;
          }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
             return val;
          }
        })
 
         
         
         
         
         .map((item)=>{
         return  <Cards item={item} key={item.id}/>
         })
      }
      </div>
    </div>
    </>
  )
}

export default Cource