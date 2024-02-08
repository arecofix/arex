// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Se ejecutará cuando se cargue completamente la página

    // Obtenemos el botón de la hamburguesa y el menú
    const hamburgerButton = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    // Agregamos un evento de clic al botón de la hamburguesa
    hamburgerButton.addEventListener('click', function () {
        // Alternamos la clase "show" en el menú para mostrarlo o ocultarlo
        navbarMenu.classList.toggle('show');

        document.addEventListener('DOMContentLoaded', function () {
            // Inicializar el carousel de Bootstrap
            var logoCarousel = new bootstrap.Carousel(document.getElementById('logo-carousel'));
        
            // Evento de clic para los botones de navegación
            var prevButton = document.querySelector('.carousel-control-prev');
            var nextButton = document.querySelector('.carousel-control-next');
        
            prevButton.addEventListener('click', function () {
                logoCarousel.prev();
            });
        
            nextButton.addEventListener('click', function () {
                logoCarousel.next();

                $(document).ready(function () {
    // Manejar el envío del formulario
    $('#search-form').submit(function (e) {
        e.preventDefault(); // Evitar la recarga de la página por defecto del formulario

        // Obtener el término de búsqueda
        var searchTerm = $('#search-input').val();

        // Realizar la solicitud AJAX al archivo search.php
        $.ajax({
            type: 'GET',
            url: 'search.php',
            data: { term: searchTerm },
            success: function (data) {
                // Manejar los resultados (puede ser mostrarlos en un dropdown, etc.)
                console.log(data);
            },
            error: function (error) {
                console.log(error);

                $(document).ready(function () {
                    // Manejar el envío del formulario
                    $('#search-form').submit(function (e) {
                        e.preventDefault(); // Evitar la recarga de la página por defecto del formulario
                
                        // Obtener el término de búsqueda
                        var searchTerm = $('#search-input').val();
                
                        // Realizar la solicitud AJAX al archivo search.php
                        $.ajax({
                            type: 'GET',
                            url: 'search.php',
                            data: { term: searchTerm },
                            success: function (data) {
                                // Mostrar resultados debajo del campo de búsqueda
                                $('#search-results').html('');
                
                                if (data.length > 0) {
                                    var resultList = '<ul>';
                                    data.forEach(function (product) {
                                        resultList += '<li>' + product.nombre + '</li>';
                                    });
                                    resultList += '</ul>';
                                    $('#search-results').html(resultList);
                                } else {
                                    $('#search-results').html('<p>No se encontraron resultados.</p>');
                                }
                            },
                            error: function (error) {
                                console.log(error);
                            }
                        });
                    });
                });
                
            }
        });
    });
});

            });
        });
    });
});
