import '../styles/Principal.css';

const Principal = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='cards-wrapper'>
              <div className="card">
                <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (1).jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
              <div className="card">
                <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (2).jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
              <div className="card">
                <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (3).jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Principal;



// <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
// <div className="carousel-inner">
//   <div className="carousel-item active">
//     <div className='cards-wrapper'>
//   <div className="card">
//       <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (5).jpeg" className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//         <a href="#" className="btn btn-primary">Comprar</a>
//       </div>
//   </div>
//   <div className="card">
//       <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (4).jpeg" className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//         <a href="#" className="btn btn-primary">Comprar</a>
//       </div>
//   </div>
//   <div className="card">
//       <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.38 PM.jpeg" className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//         <a href="#" className="btn btn-primary">Comprar</a>
//       </div>
//   </div>
// </div>
// </div>
// </div>