import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Cars from "./Pages/Cars"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"


function App() {


  return (
    <>
    
  
   <BrowserRouter>
   <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
  
    </BrowserRouter>
    </>
  )
}

export default App
