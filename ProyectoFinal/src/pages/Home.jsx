import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import  Navbar  from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div className="container mt-4">
        <h2>Cards Section</h2>
        <Cards />
      </div>
    </div>
  )
}

export default Home