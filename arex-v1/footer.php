</main>
<!-- !start #main-site -->

<!-- start #footer -->

<!-- Modal para el formulario de reserva -->
<div class="modal fade" id="reservaModal" tabindex="-1" aria-labelledby="reservaModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="reservaModalLabel">Reserva tu cita</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <p>Completa el formulario para reservar una cita para ver nuestros celulares en la sucursal.</p>
                <form action="procesar_reserva.php" method="POST">
                    <!-- Agrega aquí los campos del formulario como se mostró en el ejemplo anterior -->
                    <!-- ... -->
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required>
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" required>
                    </div>
                    <div class="mb-3">
                        <label for="celular" class="form-label">Celular</label>
                        <input type="tel" class="form-control" id="celular" name="celular" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Reservar cita</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="container mt-5">
<h2>Contacto</h2>
    <form action="controllers/forms/procesar_contacto.php" method="POST">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input type="text" class="form-control" id="nombre" name="nombre" required>
        </div>
        <div class="mb-3">
            <label for="nombre" class="form-label">Teléfono:</label>
            <input type="text" class="form-control" id="numero" name="numero" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico:</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
            <label for="mensaje" class="form-label">Mensaje:</label>
            <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit" value="Enviar" class="btn btn-primary">Enviar</button>
    </form>
</div>

<div id="logo-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/logo.png" class="d-block mx-auto" alt="Logo 1">
        </div>
        <div class="carousel-item">
            <img src="assets/logo.png" class="d-block mx-auto" alt="Logo 2">
        </div>
        <div class="carousel-item">
            <img src="assets/logo.png" class="d-block mx-auto" alt="Logo 3">
        </div>
        <!-- Agrega más logos como sea necesario -->
    </div>
</div>
<hr>
</div>
<div class="container">
    <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Secciones</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="https://arecofix.com/" class="nav-link p-0 text-body-secondary">Inicio</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/shop/" class="nav-link p-0 text-body-secondary">Repuestos</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/shop/" class="nav-link p-0 text-body-secondary">Celulares</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/shop/" class="nav-link p-0 text-body-secondary">Netbooks</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/shop/" class="nav-link p-0 text-body-secondary">Accesorios</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Seccion</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/shop/" class="nav-link p-0 text-body-secondary">Tienda</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/about/" class="nav-link p-0 text-body-secondary">Sobre Nosotros</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/shop/" class="nav-link p-0 text-body-secondary">Menu</a></li>
          <li class="nav-item mb-2"><a href="https://arecofix.com/celular/contact/" class="nav-link p-0 text-body-secondary">Contacto</a></li>
          <li class="nav-item mb-2"><a href="wa.me/541125960900" class="nav-link p-0 text-body-secondary">Mantenimiento</a></li>
        </ul>
      </div>
      <div class="col-md-7 offset-md-1 mb-3">
        <form>
          <h5>Suscribete a las noticias</h5>
          <p>Enterate de todas las novedades que tiene arex.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Correo Electronico</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Direccion de Email">
            <button class="btn btn-primary" type="button">Suscribete</button>
          </div>
        </form>
        <br>
        <div class="d-flex">
            <a href="https://www.facebook.com/arecofix" target="_blank" class="link-body-emphasis social-icon"><i class="fab fa-facebook fa-2x icon"></i></a>
            <a href="https://www.instagram.com/arecofix" class="link-body-emphasis social-icon"><i class="fab fa-instagram fa-2x icon"></i></a>
            <a href="https://www.youtube.com/channel/UCY7OzdF5nmycU-ociwGtoFw" class="link-body-emphasis social-icon"><i class="fab fa-youtube fa-2x icon"></i></a>
            <a href="https://www.linkedin.com/in/ezequiel-enrico/" class="link-body-emphasis social-icon"><i class="fab fa-linkedin fa-2x icon"></i></a>
        </div>

    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-center">
    <div class="mx-auto">
        <p>&copy; 2023 Arex, Inc. Todos los derechos Reservados. <a href="#" class="nav-link p-0 text-body-secondary">Politicas de Privacidad</a></p>
    </div>
    <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
    </ul>
</div>
</footer>
</div>
<script src="controller/script.js"></script>
<!-- !start #footer -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<!-- Owl Carousel Js file -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha256-pTxD+DSzIwmwhOqTFN+DB+nHjO4iAsbgfyFq5K5bcE0=" crossorigin="anonymous"></script>

<!--  isotope plugin cdn  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js" integrity="sha256-CBrpuqrMhXwcLLUd5tvQ4euBHCdh7wGlDfNz8vbu/iI=" crossorigin="anonymous"></script>

<!-- Custom Javascript -->
<script src="index.js"></script>
</body>
</html>