document.getElementById("header").innerHTML = `
  <header>
    <nav class="navbar navbar-expand-lg bg-light navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bootstrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex align-items-center"> 
            <li class="nav-item">
              <a class="nav-link" href="/index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./registro.html">Registro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
  
            <li class="nav-item"> 
              <a href="#" id="dark-mode-toggle" class="dark-mode-toggle">
                <i class="fa-solid fa-moon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
`;


document.getElementById("footer").innerHTML = `
  <footer>
    <div class="container-fluid text-dark text-center p-3">
      <p>© 2024 by Lu</p>
    </div>
  </footer>  
`;