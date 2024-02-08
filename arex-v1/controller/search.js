// search.js

$(document).ready(function () {
    $('#search-btn').click(function () {
        var keyword = $('#search-input').val().trim();
        if (keyword !== '') {
            $.ajax({
                url: 'controllers/search_product.php',
                method: 'GET',
                data: { search: true, keyword: keyword },
                dataType: 'json',
                success: function (response) {
                    // Limpiar el contenedor de resultados
                    $('#search-results').empty();

                    // Verificar si hay resultados
                    if (response.length > 0) {
                        // Iterar sobre los resultados y mostrarlos
                        $.each(response, function (index, product) {
                            var resultHtml = '<div class="result-item">';
                            resultHtml += '<img src="admin/uploads/' + product.item_image + '" alt="' + product.item_name + '">';
                            resultHtml += '<p><b>' + product.item_name + '</b></p>';
                            resultHtml += '<p>' + product.item_brand + '</p>';
                            resultHtml += '<p>Tk. ' + product.item_price + '</p>';
                            resultHtml += '</div>';

                            $('#search-results').append(resultHtml);
                        });
                    } else {
                        // Mostrar un mensaje si no hay resultados
                        $('#search-results').append('<div class="no-results">No se encontraron resultados</div>');
                    }
                },
                error: function (error) {
                    console.error(error);
                }
            });
        }
    });
});
