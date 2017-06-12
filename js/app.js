var cargarPagina = function () {
    cargarPersonajes();
    $(document).on("click",".presonaje", mostrarDetalle);
}
var cargarPersonajes = function () {
    var url = "http://swapi.co/api/people/";
    $.getJSON(url, function (response) {
        var personajes = response.results;
        var total = response.count;
        mostrarTotalPersonajes(total);
        mostrarPersonajes(personajes);
    });

};
var mostrarTotalPersonajes = function (total) {
    $('#total').text(total);
};
var mostrarPersonajes = function (personajes) {
    var $ul = $('#personaje');
    personajes.forEach(function (personaje) {
        var $li = $("<li />");
        $li.addClass("personaje");
        $li.attr("data-url", personaje.homeworld);
        $li.text(personaje.name + '-' + personajes.height + 'cm');
        $ul.append($li);
    });
};
var plantillaPlaneta = '<h2>Planeta</h2>' +
    '<p><strong>Nombre:</strong>__planeta__</p>' +
    '<p><strong>Clima:</strong>__clima__</p>';

var mostrarDetalle = function () {
    var urlPersonaje = $(this).data("url");
    var $contenedorPlaneta = $('#detalle-planeta');
    $.getJSON(urlPersonaje, function (response) {
       $contenedorPlaneta.html(
            plantillaPlaneta.replace('__planeta__', response.name)
        .replace('__clima__', response.climate)
       );
    });
}

$(document).ready(cargarPagina);
