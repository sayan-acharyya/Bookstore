import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Cards from './Cards';
 
function Freebook() {
    const filterData=list.filter((data)=>data.category==="free")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='dark:text-black max-w-screen-2xl container mx-auto md:px-20 px-4'> 
    <div>
    <h1  className='dark:text-white text-xl pb-2 font-bold'>
        Free Offered Courses</h1>
        <p className='text-gray-500 dark:text-white mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Culpa officiis quibusdam debitis maiores animi
              assumenda itaque, possimus incidunt dolore porro 
              eveniet delectus? Maxime nostrum
             dolorem minus rem debitis esse laborum.
             </p>
    </div>
   
    <div className='mb-6'>
    <Slider {...settings}>
       
        {filterData.map((item)=>{
          return <Cards item={item} key={item.id}/>
           
        })}
        
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook