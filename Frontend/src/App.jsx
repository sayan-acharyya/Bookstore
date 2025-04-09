import About from "./Aboutus/About"
import { Toaster } from 'react-hot-toast';
import Signup from "./Components/Signup"
import Conatctus from "./Contact/Conatctus"
import Cources from "./Cources/Cources"
import Home from "./home/Home"
import {Navigate, Route, Routes} from "react-router-dom"
import { useAuth } from "./Context/AuthProvider";
 
 

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
 
  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cource" element={authUser?<Cources/>:<Navigate to="/signup"/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Conatctus/>}/> 
       
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App
