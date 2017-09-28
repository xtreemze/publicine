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
    this.titulo = titulo.trim() || "No disponible.";
    window[this.titulo] = this;
    this.estreno = estreno.trim() || "No disponible.";
    const month =
      "M" + parseInt(estreno[3] + estreno[4], 10) || "No disponible.";
    window[month].add(this);
    this.clasificacion = clasificacion.trim() || "No disponible.";
    this.duracion = duracion.trim() || "No disponible.";
    this.genero = genero.trim() || "No disponible.";
    this.director = director.trim() || "No disponible.";
    this.elenco = elenco.trim() || "No disponible.";
    this.synopsis = synopsis.trim() || "No disponible.";
    this.cartelera = cartelera.trim() || "No disponible.";
    let carteleraCut = this.cartelera.replace(
      "https://drive.google.com/open?id=",
      ""
    );
    this.image = `<img class="" src="https://drive.google.com/uc?export=download&id=${carteleraCut}">`;
    this.roundListContent = `<a ontap="window.listMovie(window['${this
      .titulo}'])" onclick="window.listMovie(window['${this
      .titulo}'])" class="carousel-item pointer">${this.image}</a>`;
    this.cardContent = ` <div class="card-content grey-text text-lighten-2">
    <span class="card-title yellow-text text-darken-3">${titulo}</span>
    <ul>
    <li>Genero: ${genero}</li>
    <li>Clasificacion: ${clasificacion}</li>
    <li>Duracion: ${duracion}</li>
    <li>Director: ${director}</li>
    <li>Reparto: ${elenco}</li>
    </ul>
    <p>
    ${synopsis}
    </p>
  </div>`;
    this.cardAction = `<div class="card-action">
  <h6 class="yellow-text text-darken-3">Fecha de estreno: ${estreno}</h6>
</div>`;
    this.card = `<article class="card horizontal black hide-on-med-and-down show-on-large-only">
    <div class="card-image col m4 l3">
      ${this.image}
    </div>
    <div class="card-stacked col m8 l9">
    ${this.cardContent}
    ${this.cardAction}
    </div>
  </article>
  <article class="card black hide-on-large-only">
    <div class="card-image">
     ${this.image}
    </div>
    <div class="card black">
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
    dist: -45,
    padding: 10
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
  $(".carousel").carousel({
    dist: -45,
    padding: 10
  });
});

// listMovies(Peliculas);
roundListMovies(M9);
