import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import '../styles/Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <div>
      <Navbar/>
      <Carousel />
      <Cards/>
    </div>
  );
};

export default Home;
