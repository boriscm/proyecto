import './App.css';


function navBar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
    <div class="container-fluid">
      <a class="navbar-brand" href=".">APP Name</a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarColor01" >
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href=".">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=".">Canciones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=".">Artistas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=".">Recomendaciones</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="." role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href=".">Action</a>
              <a class="dropdown-item" href=".">Another action</a>
              <a class="dropdown-item" href=".">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href=".">Separated link</a>
            </div>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="text" placeholder="Search"/>
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
}


function cardSongs() {
  return(
  <div class="card text-dark bg-white bg-primary mb-3" style={{Width: "30rem"}}>
    <div class="card-header"><h5 style={{color:"black"}}>Cancion</h5></div>
    <div class="card-body">
      <p class="card-text">El top de canciones que recomendamos para ti y tu preferencias musiales:</p>

      <h6 class="card-title" style={{color: "black"}}>Primary card title</h6>
    <audio controls autoplay>
    <source src ="" type="audio/mpeg"></source>
    <source src="" type="audio/mpeg">
    </source></audio>

    <h6 class="card-title" style={{color: "black"}}>Primary card title</h6>
    <audio controls autoplay>
    <source src ="" type="audio/mpeg"></source>
    <source src="" type="audio/mpeg">
    </source></audio>`
    
    <h6 class="card-title" style={{color: "black"}}>Primary card title</h6>
    <audio controls autoplay>
    <source src ="" type="audio/mpeg"></source>
    <source src="" type="audio/mpeg">
    </source></audio>`

    <h6 class="card-title" style={{color: "black"}}>Primary card title</h6>
    <audio controls autoplay>
    <source src ="" type="audio/mpeg"></source>
    <source src="" type="audio/mpeg">
    </source></audio>`

    <h6 class="card-title" style={{color: "black"}}>Primary card title</h6>
    <audio controls autoplay>
    <source src ="" type="audio/mpeg"></source>
    <source src="" type="audio/mpeg">
    </source></audio>`

    <h6 class="card-title" style={{color: "black"}}>Primary card title</h6>
    <audio controls autoplay>
    <source src ="" type="audio/mpeg"></source>
    <source src="" type="audio/mpeg">
    </source></audio>`
    </div>
  </div>
  

  
  );
}


function cardCantantes() {
  return(
  <div class="card text-dark bg-white bg-primary mb-3" style={{maxWidth: "30rem" }}>
    <div class="card-header"><h5 style={{color:"black"}}>Cantante</h5></div>
    <div class="card-body">
      <h4 class="card-title">Primary card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  

  
  );
}

function cardFav() {
  return(
  <div class="card text-dark bg-white bg-primary mb-3" style={{maxWidth: "20rem"}}>
    <div class="card-header"><h5 style={{color:"black"}}>Favoritas</h5></div>
    <div class="card-body">
      <h4 class="card-title">Primary card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  

  
  );
}


function App() {
  var nav= navBar();
  var canciones = cardSongs();

  var artistas = cardCantantes();

  var fav = cardFav();





  return (
    <div className="container">
      {nav}
      <div style={{display: "flex"}}>
        {canciones}
        {artistas}
        {fav}
      </div>
      

    </div>
  );
}
export default App;

