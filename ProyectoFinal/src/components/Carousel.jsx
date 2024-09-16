import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/Carousel.css'; // Importa el archivo CSS
import Navbar from './Navbar';


const Carousel = () => {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className='img-destacadas' src="/src/img/WhatsApp Image 2024-09-13 at 1.50.26 PM.jpeg" alt="Los Angeles" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Los Angeles</h5>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className='img-destacadas' src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (4).jpeg" alt="Chicago" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Chicago</h5>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className='img-destacadas' src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (6).jpeg" alt="New York" />
            <div className="carousel-caption d-none d-md-block">
              <h5>New York</h5>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>
        
        {/* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid mt-3">
        <h3>Carousel Example</h3>
        <p>The following example shows how to create a basic carousel with indicators and controls.</p>
      </div>
      <Navbar/>
    </div>
  );
};

export default Carousel;
