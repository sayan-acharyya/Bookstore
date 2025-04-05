import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
  <div className='mt-4'>
  <div className=" dark:bg-slate-900 dark:border  dark:text-white card bg-base-100 w-96 shadow-xl hover:scale-105 duration-300 ease-in-out">
  <figure>
    <img
      src={item.image} 
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">
        
       <p>
        {
          item.category==='free'?(<>
          Free
          </>):(<>
          10% off
          </>)
        }
       </p>

      </div>
    </h2>
    <p> {item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline  px-3 py-4 cursor-pointer rounded-full duration-200 border-black  font-bold hover:bg-pink-500 hover:text-white">{item.price} Rs.</div>
      <div className="badge badge-outline  px-3 py-4 cursor-pointer rounded-full duration-200 font-bold border-black hover:text-white hover:bg-pink-500  "> Buy now </div>
    </div>
  </div>
</div>
  </div>
    </>
  )
}

export default Cards