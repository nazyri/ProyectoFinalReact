import { BrowserRouter as Route, Router, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Destacadas from "../pages/Destacadas"
import Principal from "../pages/Principal"
import AcercaNosotros from "../pages/AcercaNosotros"
import Contacto from "../pages/Contacto"
import Ayuda from "../pages/Ayuda"

const Routing = ()=>{
    <Router>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Destacada" element={<Destacadas />} />
      <Route path="/Principal" element={<Principal />} />
      <Route path="/AcercaNosotros" element={<AcercaNosotros />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Ayuda" element={<Ayuda />} />
    </Routes>
  </Router>
}
export default Routing