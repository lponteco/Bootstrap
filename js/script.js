document.getElementById("carousel").innerHTML = `
  <section>
    <div id="carouselExampleIndicators" class="carousel slide carousel-small">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./img/anita-austvika-cLTj4Q6rhYo-unsplash.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./img/taan-huyn-SG_m4YXjUQw-unsplash.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./img/ansuman-mishra-L_KgAQ2Izpw-unsplash.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
`;

document.getElementById("contacto").innerHTML = `
<section id="contacto" class="py-3">
    <a name="contacto"></a>

    <div class="container">
      <h3 class="text-center mb-4">Contáctanos</h3>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="border rounded p-4 shadow-sm bg-white">
            <form id="contact-form" action="https://formspree.io/f/xzzbjlyr" method="POST">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre">
                <p class="error1" id="errorName"></p>
              </div>
  
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="text" class="form-control" id="email" name="email" placeholder="Ingresa tu correo electrónico">
                <p class="error1" id="errorEmail"></p>
              </div>
  
              <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje"></textarea>
                <p class="error1" id="errorMessage"></p>
              </div>
  
              <button type="submit" class="btn btn-enviar w-100">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</section>
`;