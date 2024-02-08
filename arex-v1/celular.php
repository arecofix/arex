
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arecofix Servicio técnico | Venta de Repuestos</title>
    <link rel="icon" type="image/png" href="assets/logo.png"> <!-- Corregí el enlace a la imagen del ícono -->
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- Owl-carousel CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha256-kksNxjDRxd/5+jGurZUJd1sdR2v+ClrCl3svESBaJqw=" crossorigin="anonymous" />

    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- Custom CSS file -->
    <link rel="stylesheet" href="style.css">

    <?php
    // require functions.php file
    require ('functions.php');
    ?>

</head>
<body>

<!-- start #header -->
<header id="header">
    <div class="strip d-flex justify-content-between px-4 py-1 bg-light">
        <p class="font-rale font-size-12 text-black-50 m-0">Envíos Gratis para compras de más de $98000</p>
        <div class="font-rale font-size-14">
            <a href="#" class="px-3 border-right border-left text-dark">Ver Productos</a>
            <a href="#" class="px-3 border-right text-dark">Lista de Deseos (0)</a>
        </div>
    </div>

    <!-- Primary Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="https://www.arecofix.com/">
                <img src="assets/logo.png" alt="Arex" width="80" height="53" class="d-inline-block align-text-top">
                <span class="d-inline-block align-middle"></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

            <form class="form-inline mx-auto my-2 my-lg-0" id="search-form">
    <div class="input-group">
        <input class="form-control" type="search" id="search-input" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success btn-buscar" type="submit">Buscar</button>
    </div>
</form>

                <ul class="navbar-nav mt-3 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://arecofix.com/servicio-tecnico-de-celulares-en-las-heras/">Cursos</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="https://arecofix.com/shop/">Celulares</a></li>
                            <li><a class="dropdown-item" href="https://arecofix.com/shop/">Netbook</a></li>
                            <li><a class="dropdown-item" href="https://arecofix.com/shop/">Accesorios</a></li>
                            <li><a class="dropdown-item" href="https://arecofix.com/shop/">Tecnología</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://arecofix.com/celular/contact/">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://arecofix.com/celular/about/">Sobre Nosotros</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-primary ml-auto mt-1">
                    <a href="https://www.arecofix.com/Dashboard" style="text-decoration: none; color: wheat;" target="_blank">Iniciar Sesión</a>
                </button>

            </div>
        </div>
    </nav>
    <!-- !Primary Navigation -->

</header>
<!-- !start #header -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script src="controller/script.js"></script>
<!-- start #main-site -->
<main id="main-site">
    <!-- Contenido principal de la página -->
</main>

</body>
</html>


<!-- Hero Section -->
<section class="hero">
    <div class="container text-center">
        <h1 class="display-4">Bienvenido a Arex</h1>
        <p class="lead">Encuentra los mejores repuestos y accesorios para tu celular.</p>
    </div>
</section>
<?php
// Definir la cantidad de productos por página
$productosPorPagina = 20;

// Calcular el total de páginas
$totalPaginas = ceil(count($product_shuffle) / $productosPorPagina);

// Obtener la página actual
$paginaActual = isset($_GET['pagina']) ? $_GET['pagina'] : 1;

// Calcular el índice de inicio para la página actual
$indiceInicio = ($paginaActual - 1) * $productosPorPagina;

// Obtener solo los productos para la página actual
$productosPagina = array_slice($product_shuffle, $indiceInicio, $productosPorPagina);
?>
<!-- Products Section -->
<section id="special-price">
    <div class="container">
        <h2 class="d-inline-block font-sans-serif font-size-22 text-uppercase bg-dark text-light mb-4 p-2">Ofertas únicas</h2>
        <div id="filters" class="button-group text-right font-baloo font-size-16">
            <!-- Agregar botones de filtro aquí si es necesario -->
        </div>

        <div class="row">
            <?php
            foreach ($productosPagina as $item) {
            ?>
            <div class="col-md-4 mb-4">
                <div class="item border <?php echo 'brand-' . strtolower($item['item_brand'] ?? "Brand") ; ?>">
                    <div class="product font-rale">
                        <a href="<?php printf('%s?item_id=%s', 'product.php',  $item['item_id']); ?>"><img src="<?php echo $item['item_image'] ?? "./assets/products/13.png"; ?>" alt="product1" class="img-fluid"></a>
                        <div class="text-center mt-3">
                            <h6><?php echo $item['item_name'] ?? "Unknown"; ?></h6>
                            <div class="rating text-warning font-size-12">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="far fa-star"></i></span>
                            </div>
                            <div class="price py-2">
                                <span>$<?php echo $item['item_price'] ?? 0 ?></span>
                            </div>
                            <form method="post">
                                <input type="hidden" name="item_id" value="<?php echo $item['item_id'] ?? '1'; ?>">
                                <input type="hidden" name="user_id" value="<?php echo 1; ?>">
                                <?php
                                if (in_array($item['item_id'], $in_cart ?? [])){
                                    echo '<button type="submit" disabled class="btn btn-success font-size-12">In the Cart</button>';
                                } else {
                                    echo '<button type="submit" name="top_sale_submit" class="btn btn-warning font-size-12">Agregar Al Carrito</button>';
                                }
                                ?>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>

        <!-- Agregar enlaces de paginación con flechas y estilos -->
        <div class="pagination">
            <?php
            if ($paginaActual > 1) {
                echo "<a href='?pagina=" . ($paginaActual - 1) . "' class='page-link'>&laquo; Anterior</a>";
            }

            for ($i = 1; $i <= $totalPaginas; $i++) {
                echo "<a href='?pagina=$i' class='page-link ";
                if ($i == $paginaActual) {
                    echo "active";
                }
                echo "'>$i</a>";
            }

            if ($paginaActual < $totalPaginas) {
                echo "<a href='?pagina=" . ($paginaActual + 1) . "' class='page-link'>Siguiente &raquo;</a>";
            }
            ?>
        </div>
    </div>
</section>
<!-- !Products Section -->

<!-- Footer -->
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

<footer class="bg-dark text-light text-center py-3">
    <p>&copy; 2024 Arecofix. Todos los derechos reservados.</p>
</footer>

<!-- Bootstrap JS y Popper.js (agrega estos scripts al final del cuerpo para un mejor rendimiento) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
