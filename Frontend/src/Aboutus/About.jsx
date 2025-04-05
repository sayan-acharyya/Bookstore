 import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Aboutus from '../Components/Aboutus'
 
 function About() {
   return (
     <>
     <Navbar/>
     <div className='min-h-screen'>
        <Aboutus/>
     </div>
     <Footer/>
     </>
   )
 }
 
 export default About