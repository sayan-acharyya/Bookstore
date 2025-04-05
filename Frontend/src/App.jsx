 
 
import About from "./Aboutus/About"
 
import Signup from "./Components/Signup"
import Conatctus from "./Contact/Conatctus"
import Cources from "./Cources/Cources"
import Home from "./home/Home"
import {Route, Routes} from "react-router-dom"
 
 

function App() {
 

  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cource" element={<Cources/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Conatctus/>}/> 
      </Routes>
      </div>
    </>
  )
}

export default App
