window.Peliculas = new Set();
window.EnCines = new Set();
window.Months = new Set();
window.monthsYear = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
for (var index = 1; index <= 12; index++) {
  const name = "M" + index;
  window[name] = new Set();
  Months.add(window[name]);
  window[name].name = monthsYear[index - 1];
  window[
    name
  ].tabContent = `<li class="tab"><a onclick="roundListMovies(${name})">${window[
    name
  ].name}</a></li>`;
}
class Movie {
  /**
   * Creates an instance of Movie.
   * @param {Object} {
   *     titulo,
   *     estreno,
   *     trailer,
   *     mes,
   *     duracion,
   *     genero,
   *     clasificacion,
   *     director,
   *     elenco,
   *     synopsis,
   *     cartelera
   *   } 
   * @memberof Movie
   */
  constructor({
    titulo,
    estreno,
    trailer,
    mes,
    duracion,
    genero,
    clasificacion,
    director,
    elenco,
    synopsis,
    cartelera
  }) {
    window.Peliculas.add(this);
    this.titulo = titulo.trim() || "No disponible";
    window[this.titulo] = this;
    this.estreno = estreno.trim() || "No disponible";
    this.trailer = trailer || "No disponible";
    const month =
      "M" + parseInt(estreno[3] + estreno[4], 10) || "No disponible";
    window[month].add(this);
    this.clasificacion = clasificacion.trim() || "No disponible";
    this.duracion = duracion.trim() || "No disponible";
    this.genero = genero.trim() || "No disponible";
    this.director = director.trim() || "No disponible";
    this.elenco = elenco.trim() || "No disponible";
    this.synopsis = synopsis.trim() || "No disponible";
    this.cartelera = cartelera.trim() || "No disponible";
    let carteleraCut = this.cartelera.replace(
      "https://drive.google.com/open?id=",
      ""
    );
    this.image = `<img class="" src="https://drive.google.com/uc?export=download&id=${carteleraCut}">`;
    this.roundListContent = `<a ontouchend="window.listMovie(window['${this
      .titulo}'])" onclick="window.listMovie(window['${this
      .titulo}'])" class="carousel-item pointer">${this.image}</a>`;
    this.cardContent = `<div class="card-content grey-text text-lighten-2">
 
    <span class="yellow-text text-darken-3">
    <div class="chip yellow darken-3"><i class="material-icons">movie_filter</i> ${this
      .genero}</div>
    <div class="chip yellow darken-3"><i class="material-icons">person</i> ${this
      .clasificacion}</div>
    <div class="chip yellow darken-3"><i class="material-icons">timer</i> ${this
      .duracion}</div>
    <div class="chip yellow darken-3"><i class="material-icons">new_releases</i> ${this
      .estreno}</div>
    </span>
    <p>
    ${this.synopsis}
    </p>
    <p>Director: ${this.director} Elenco: ${this.elenco}</p>
  </div>`;
    this.cardAction = `<div class="card-action">
    <a class="btn-floating halfway-fab btn waves-effect waves-light yellow darken-3"><i class="material-icons large grey-text text-darken-3">play_arrow</i></a>
    <a class="nudgeLeft btn-floating halfway-fab btn waves-effect waves-light yellow darken-3 "><i class="material-icons large grey-text text-darken-3">event</i></a>
    <a class="yellow-text text-darken-3">${this.titulo}</a>
</div>`;
    this.card = `<article class="card horizontal grey darken-3 hide-on-small-only show-on-med-and-up">
    <div class="card-image col m5 l3">
      ${this.image}
    </div>
    <div class="card-stacked col m7 l9">
    ${this.cardContent}
    ${this.cardAction}
    </div>
  </article>
  <article class="card grey darken-3 hide-on-med-and-up">
    <div class="">
     ${this.cardContent}
     ${this.cardAction}
    </div>
  </article>`;
  }
}

const importJSON = (function() {
  const imported = require("./export.json");
  imported.export.forEach(function(item) {
    new Movie(item);
  });
})();
const movieSection = document.getElementById("movieCard");
window.listMovies = function(set) {
  movieSection.innerHTML = "";
  let content = "";
  set.forEach(function(item) {
    content += item.card;
  });
  movieSection.innerHTML = content;
};
window.listMovie = function(movie) {
  movieSection.innerHTML = "";
  let content = "";
  content += movie.card;
  movieSection.innerHTML = content;
  $(".chips").material_chip();
};

const roundList = document.getElementById("roundList");
window.roundListMovies = function(set) {
  roundList.innerHTML = "";
  let content = `<div class="">
  <div class="carousel">`;
  set.forEach(function(item) {
    content += item.roundListContent;
  });
  content += `</div>
  </div>`;
  roundList.innerHTML = content;
  $(".carousel").carousel({
    dist: -25,
    padding: -75,
    shift: 5
  });
};
window.navTabPopulate = function() {
  const navTabs = document.getElementById("navTabs");
  navTabs.innerHTML = "";
  window.Months.forEach(function(item) {
    if (item.size > 0) {
      navTabs.innerHTML += item.tabContent;
    }
  });
  $("ul.tabs").tabs();
};
navTabPopulate();

window.addEventListener("load", function() {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    var GEOCODING =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      position.coords.latitude +
      "%2C" +
      position.coords.longitude +
      "&language=es";

    $.getJSON(GEOCODING).done(function(geoLocation) {
      window.geo = geoLocation;
      console.log(window.geo);
      document.getElementById(
        "city"
      ).innerHTML = `<i class="material-icons">location_city</i> ${window.geo
        .results[4].formatted_address || "No disponible"}`;
    });
  }

  function error(err) {
    console.log(err);
  }
});

// listMovies(Peliculas);
roundListMovies(M9);
