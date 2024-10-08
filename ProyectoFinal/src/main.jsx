import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Destacada from './pages/Destacadas';
import Principal from './pages/Principal';
import AcercaNosotros from './pages/AcercaNosotros';
import Contacto from './pages/Contacto';
import Ayuda from './pages/Ayuda';



const router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Destacada",
    element: <Destacada/>
  },
  {
    path: "/Principal",
    element: <Principal/>
  },
  {
    path: "/AcercaNosotros",
    element: <AcercaNosotros/>
  },
  {
    path: "/Contacto",
    element: <Contacto/>
  },
  {
    path: "/Ayuda",
    element: <Ayuda/>
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)