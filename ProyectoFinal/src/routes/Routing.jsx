import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from './pages/Home';
import Destacada from '../pages/Destacada';
import Principal from '../pages/Principal';
import AcercaNosotros from '../pages/AcercaNosotros';
import Contacto from '../pages/Contacto';
import Ayuda from '../pages/Ayuda';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Destacada" element={<Destacada />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/AcercaNosotros" element={<AcercaNosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Ayuda" element={<Ayuda />} />
      </Routes>
    </Router>
  );
}

export default App;
























// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RegisterForm from '../components/RegisterForm';
// import LoginForm from '../components/formss';

// const Routing = () => {
//   return (
//     <Router>
//      <Routes>
//        <Route path="/" element={<RegisterForm/>}/>
//        <Route path="login" element={<LoginForm/>}/>
//      </Routes>
//     </Router>
//    );
// };
// export default Routing;