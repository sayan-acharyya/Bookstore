import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";

function Aboutus() {
  return (
    <>

           
 
    <div className='text-gray-600 dark:mt-16 dark:text-white body-font w-[80%] mx-auto mt-28'>
    <div className='px-[16px]'>
    <h2 className='title-font dark:pt-16 dark:text-white sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>
        Deiving the force of <span className='text-pink-500'>assortment</span>
    </h2>
    <p className='mb-8 leading-relaxed text-[20px]'>
      For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice
    </p>
    </div>


    
    <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'> 
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
       <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>
        Who are we?
        </h2>
        <p className='mb-8 leading-relaxed'>
        Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities
        </p>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <img
         src=" https://img.freepik.com/premium-vector/flat-illustration-our-team_18660-3188.jpg?w=826"
       
        className=' object-cover object-center rounded'
        />
      </div>

    </div>


    {/* abs */}
    <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'> 

    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <img
        src=" https://flipkartads.azureedge.net/flipkartads/why-flipkart.png"
        className=' object-cover object-center rounded'
        />
      </div>

      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ml-20 items-center text-center'>
       <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8'>
        Our Technology 
        </h2>
        <p className='mb-8 leading-relaxed'>
        At Mechshop, we are revolutionizing the e-commerce experience by leveraging cutting-edge technology to bring our customers unparalleled convenience, personalization, and security. Our platform is designed with a focus on innovation, making it easy for you to shop, explore, and connect with the products you love.

Our e-commerce website is powered by an advanced AI-driven recommendation engine, ensuring that every interaction feels tailored to your preferences. By analyzing your browsing habits, previous purchases, and current trends, we deliver personalized product suggestions that make your shopping journey intuitive and enjoyable.

To ensure seamless navigation and lightning-fast performance, we employ modern web technologies such as Progressive Web Apps (PWA), responsive design, and scalable cloud infrastructure. This guarantees a smooth user experience whether you’re browsing on your desktop, tablet, or smartphone.


        </p>
      </div>
      
    </div>


   {/* abs */}

    <img src='https://st1.techlusive.in/wp-content/uploads/2022/04/Google-Maps.jpg' className='w-[100px] h-[100px] '/>
     
      <Link to="/">
               <button className='bg-pink-500 mb-5 hover:bg-pink-700 duration-200 mt-5 px-4 py-2 text-white rounded-md'>Back</button>
               </Link>
     
     </div>



    </>
  )
}

export default Aboutus