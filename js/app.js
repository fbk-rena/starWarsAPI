var cargarPagina = function (){
    cargarPersonajes();
    $(document).on("click",)
}
var cargarPersonajes = function () {
    var url =  "http://swapi.co/api/people/";
    $.get(url, function (response) {
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
        $li.attr("data-url", personaje.url );
        $li.text(personaje.name + '-' + personajes.height + 'cm');
        $ul.append($li);
    });
};

$(document).ready(cargarPagina);
