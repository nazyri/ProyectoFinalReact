import '../styles/Card.css';

function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-19 at 8.38.19 AM (1).jpeg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-19 at 8.34.00 AM.jpeg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.50.26 PM.jpeg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
      {/* Repite la misma estructura para las siguientes filas */}
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM.jpeg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (6).jpeg" className="card-img-top" alt="Card 5" />
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (5).jpeg" className="card-img-top" alt="Card 6" />
            <div className="card-body">
              <h5 className="card-title">Card 6</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (4).jpeg" className="card-img-top" alt="Card 7" />
            <div className="card-body">
              <h5 className="card-title">Card 7</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (3).jpeg" className="card-img-top" alt="Card 8" />
            <div className="card-body">
              <h5 className="card-title">Card 8</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (2).jpeg" className="card-img-top" alt="Card 9" />
            <div className="card-body">
              <h5 className="card-title">Card 9</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.39 PM (1).jpeg" className="card-img-top" alt="Card 10" />
            <div className="card-body">
              <h5 className="card-title">Card 10</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/salad1.jpeg" className="card-img-top" alt="Card 11" />
            <div className="card-body">
              <h5 className="card-title">Card 11</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/src/img/WhatsApp Image 2024-09-13 at 1.37.38 PM.jpeg" className="card-img-top" alt="Card 12" />
            <div className="card-body">
              <h5 className="card-title">Card 12</h5>
              <p className="card-text">Some quick example text.</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
