// Spanish
jQuery.extend(jQuery.fn.pickadate.defaults, {
  monthsFull: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ],
  monthsShort: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
  ],
  weekdaysFull: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ],
  weekdaysShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  today: "hoy",
  clear: "borrar",
  close: "cerrar",
  firstDay: 1,
  format: "dddd d !de mmmm !de yyyy",
  formatSubmit: "yyyy/mm/dd"
});

jQuery.extend(jQuery.fn.pickatime.defaults, {
  clear: "borrar"
});
window.yourCity = function() {
  if (window.geo) {
    let location = window.geo.results[4].formatted_address || "No disponible";
  }
  return location || "No disponible";
};
window.Peliculas = new Set();
window.Cines = new Set();
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
window.Honduras = [
  "Tegucigalpa",
  "San Pedro Sula",
  "Comayagua",
  "Choluteca",
  "Siguatepeque",
  "El Progreso",
  "Choloma",
  "La Ceiba",
  "Tela",
  "Puerto Cortes",
  "Danli",
  "Juticalpa",
  "Tocoa"
];
window.HondurasCiudades = function() {
  let content = "";
  for (var ciudad in window.Honduras) {
    if (window.Honduras.hasOwnProperty(ciudad)) {
      var city = window.Honduras[ciudad];
      content += `<option value="${city}">${city}</option>`;
    }
  }
  return content;
};

class Cines {
  constructor({
    Ciudad,
    Nombre,
    Cadena,
    Tandas,
    Salas,
    Pais,
    WebURL,
    Ubicacion
  }) {
    this.ciudad = Ciudad || "No disponible";
    this.nombre = Nombre || "No disponible";
    this.cadena = Cadena || "No disponible";
    this.tandas = Tandas || "No disponible";
    this.salas = Salas || "No disponible";
    this.pais = Pais || "Honduras";
    this.web = WebURL || "No disponible";
    this.ubicacion = Ubicacion || "No disponible";
    window.Cines.add(this);
  }
}

class Movie {
  constructor({
    titulo,
    estreno,
    trailer,
    mes,
    duracion,
    genero,
    director,
    elenco,
    lenguaje,
    formato,
    ciudad,
    cines,
    clasificacion,
    synopsis,
    cartelera
  }) {
    window.Peliculas.add(this);
    this.titulo = titulo.trim() || "No disponible";
    window[this.titulo] = this;
    this.estreno = estreno.trim() || "No disponible";
    this.estrenoMonth = this.estreno.replace("/2017", "");
    this.trailer = trailer || "No disponible";
    this.trailerID = this.trailer.replace(
      "https://www.youtube.com/watch?v=",
      ""
    );
    const month =
      "M" + parseInt(estreno[3] + estreno[4], 10) || "No disponible";
    window[month].add(this);
    this.duracion = duracion.trim() || "No disponible";
    this.genero = genero.trim() || "No disponible";
    this.director = director.trim() || "No disponible";
    this.cines = cines || "No disponible";
    this.elenco = elenco.trim() || "No disponible";
    this.lenguaje = lenguaje || "Subtitulado";
    this.formato = formato || "2D";
    this.ciudad = ciudad || "No disponible";
    this.clasificacion = clasificacion || "No disponible";
    this.synopsis = synopsis.trim() || "No disponible";
    this.cartelera = cartelera.trim() || "No disponible";
    let carteleraCut = this.cartelera.replace(
      "https://drive.google.com/open?id=",
      ""
    );
    this.image = `<img class="" src="https://drive.google.com/uc?export=download&id=${carteleraCut}">`;
    this.posterCard = `<article class="card grey darken-3">
    <div class="card-image hide-on-small-only">
    <a class="cursorZoom materialboxed"> <img class="responsive-img" src="https://drive.google.com/uc?export=download&id=${carteleraCut}"></a>
   </div>
   <div class="card-content grey-text text-lighten-2">
   <span class="yellow-text text-darken-3">
   <div class="chip yellow darken-3"><i class="material-icons tiny">movie_filter</i> ${this
     .genero}</div>
   <div class="chip yellow darken-3"><i class="material-icons tiny">person</i> ${this
     .clasificacion}</div>
   <div class="chip yellow darken-3"><i class="material-icons tiny">3d_rotation</i> ${this
     .formato}</div>
   <div class="chip yellow darken-3"><i class="material-icons tiny">language</i> ${this
     .lenguaje}</div>
   <div class="chip yellow darken-3"><i class="material-icons tiny">timer</i> ${this
     .duracion}</div>
   <div class="chip yellow darken-3"><i class="material-icons tiny">new_releases</i> ${this
     .estrenoMonth}</div>
     <div class="chip yellow darken-3"><i class="material-icons tiny">movie_creation</i> ${this
       .director}</div>
   </span>
   </div>
   <div class="card-action">
<a class="yellow-text text-darken-3">${this.titulo}</a>
</div>
  </article>`;
    this.trailerCard = `
  <article class="card grey darken-3">
    <div class="">
    <div class="card-content grey-text text-lighten-2">
    <article class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${this
      .trailerID}?rel=0&amp;controls=1&amp;showinfo=0;autoplay=0" frameborder="0" allowfullscreen></iframe>
      </article>
     </div>
    </div>
  </article>`;
    this.locationCard = `
    <article class="card grey darken-3">
    <div class="card-content yellow-text text-darken-3">
    <div class="row">
      <div class="input-field col s12">
      <i class="material-icons prefix">location_city</i>
      <select id="ciudad">
      <option value="${window.yourCity() || this.ciudad}">${window.yourCity() ||
      this.ciudad}</option>
      ${window.HondurasCiudades()}
      </select>
      <label for="ciudad">Ciudad:</label>
      </div>
      <div class="input-field col s12 m12 l8">
      <i class="material-icons prefix">event</i>
        <input id="fecha" type="text" class="datepicker">
        <label for="fecha">Fecha:</label> 
      </div>
      <div class="input-field col s12 m12 l4">
      <i class="material-icons prefix">access_time</i>
      <input id="hora" type="text" class="timepicker">
      <label for="hora">Hora:</label>
      </div>
      </div>
     </div>
     <div class="card-action">
     <a class="btn-floating halfway-fab btn waves-effect waves-light yellow darken-3 "><i class="material-icons large grey-text text-darken-3">event_seat</i></a>
  <a class="yellow-text text-darken-3">Taquilla</a>
  </div>
  </article>`;
    this.roundListContent = `<a ontouchend="window.listMovie(window['${this
      .titulo}'])" onclick="window.listMovie(window['${this
      .titulo}'])" class="carousel-item pointer">${this.image}</a>`;
    // this.chips = `  <article class="card grey darken-3"><div class="card-content grey-text text-lighten-2">
    //   <span class="yellow-text text-darken-3">
    //   <div class="chip yellow darken-3"><i class="material-icons tiny">movie_filter</i> ${this
    //     .genero}</div>
    //   <div class="chip yellow darken-3"><i class="material-icons tiny">person</i> ${this
    //     .clasificacion}</div>
    //   <div class="chip yellow darken-3"><i class="material-icons tiny">timer</i> ${this
    //     .duracion}</div>
    //   <div class="chip yellow darken-3"><i class="material-icons tiny">new_releases</i> ${this
    //     .estrenoMonth}</div>

    //   </span>
    //   </div></article>`;
    this.cardContent = ` <article class="card grey darken-3">
    <div class="card-content grey-text text-lighten-2">
    <p>${this.synopsis}</p></div>
  </article>`;
    this.cardAction = `<div class="card-action">
        <a class="btn-floating halfway-fab btn waves-effect waves-light yellow darken-3 "><i class="material-icons large grey-text text-darken-3">event</i></a>
    <a class="yellow-text text-darken-3">${this.titulo}</a>
</div>`;
    this.card = `
    <section class="row">
    <div class="col s12 m5 l4">
      ${this.posterCard}
    </div>
    <div class="col s12 m7 l8">
      ${this.cardContent}
    </div>
    <div class="col s12 m7 l8">
      ${this.trailerCard}
    </div>
    <div class="col s12 m7 l8">
      ${this.locationCard}
    </div>
  </section>
  
  `;
  }
}

const importJSON = (function() {
  for (var index = 1; index <= 12; index++) {
    const name = "M" + index;
    window[name] = new Set();
    Months.add(window[name]);
    window[name].name = monthsYear[index - 1];
    window[name].month = name;
    window[
      name
    ].tabContent = `<li class="tab pointer"><a href="#${name}" onclick="roundListMovies(${name})">${window[
      name
    ].name}</a></li>`;
  }
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
  let content = "";
  content += movie.card;
  movieSection.innerHTML = content;
  $(".chips").material_chip();
  $(".materialboxed").materialbox();
  $("select").material_select();
  $(".datepicker").pickadate({
    selectMonths: false, // Creates a dropdown to control month
    selectYears: 1, // Creates a dropdown of 15 years to control year,
    today: "Hoy",
    clear: "Borrar",
    close: "Aceptar",
    closeOnSelect: false // Close upon selecting a date,
  });
  $(".timepicker").pickatime({
    default: "now", // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 432000, // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: true, // Use AM/PM or 24-hour format
    donetext: "Aceptar", // text for done-button
    cleartext: "Borrar", // text for clear-button
    canceltext: "Cancelar", // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function() {} //Function for after opening timepicker
  });
};

const roundList = document.getElementById("roundList");
window.roundListMovies = function(set) {
  roundList.innerHTML = "";
  let content = `<div id="${set.month}" class="">
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
  // $("ul.tabs").tabs();
  $("ul.tabs").tabs();
};
navTabPopulate();

window.addEventListener("load", function() {
  roundListMovies(M10);
  $("ul.tabs").tabs("select_tab", "M10");

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
    });
  }

  function error(err) {
    console.log(err);
  }
  document.getElementById(
    "city"
  ).innerHTML = `<i class="material-icons">location_city</i> ${window.yourCity() ||
    "No disponible"}`;
  // function nextCarousel() {
  //   $(".carousel").carousel("next");
  // }
  // window.setInterval(nextCarousel, 8000);
});
// listMovies(Peliculas);
