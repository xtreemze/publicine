webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// window.jQuery = require("jquery");
// window.$ = require("jquery");
// require("hammerjs");
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

window.geoCity = "";
window.geoCountry = "";

window.getPosition = function() {
  const geoOptions = {
    maximumAge: 5 * 60 * 1000,
    timeout: 10 * 1000,
    enableHighAccuracy: false
  };

  function success(position) {
    var GEOCODING =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      position.coords.latitude +
      "%2C" +
      position.coords.longitude +
      "&language=es";

    $.getJSON(GEOCODING).done(function(geoLocation) {
      window.geo = geoLocation;
      // console.log(window.geo);
      window.geoCity =
        window.geo.results[0].address_components[3].long_name ||
        "GPS no disponible";
      window.geoCountry =
        window.geo.results[0].address_components[5].long_name || "";
      document.getElementById(
        "city"
      ).innerHTML = `<i class="material-icons">location_city</i> ${window.geoCity}, ${window.geoCountry}`;
    });
  }
  function error(err) {
    // console.log(err);
    window.geoCity = "GPS no disponible";
    window.geoCountry = "";
    document.getElementById(
      "city"
    ).innerHTML = `<i class="material-icons">location_city</i> ${window.geoCity}, ${window.geoCountry}`;
  }
  navigator.geolocation.getCurrentPosition(success, error, geoOptions);
};

window.HondurasCiudades = function() {
  const Honduras = [
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
  window.HondurasCities = "";

  for (var ciudad in Honduras) {
    if (Honduras.hasOwnProperty(ciudad)) {
      var city = Honduras[ciudad];
      window.HondurasCities += `<option value="${city}">${city}</option>`;
    }
  }
  return window.HondurasCities;
};

window.today = new Date();
window.today.dd = today.getDate();
window.today.mm = today.getMonth() + 1;
window.today.Mmm = "M" + (today.getMonth() + 1);
window.defaultCity = function() {
  if (
    window.geoCity.length > 1 &&
    window.geoCity !== "GPS no disponible" &&
    window.geoCity !== undefined
  ) {
    let data = window.HondurasCities;
    let newData = `<option value="${window.geoCity}">${window.geoCity}</option>`;
    window.HondurasCities = newData + data;
  }
  return window.HondurasCities;
};
window.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOMContentLoaded");
  if (!navigator.geolocation === false) {
    window.getPosition();
  }
  window.defaultCity();
  window.HondurasCiudades();
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__);


__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__["install"]({
  onInstalled: function() {},

  onUpdating: function() {},

  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    setTimeout(function() {
      window.location.reload();
    }, 10000);
  }
});

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

window.delayedTouch = function(movie) {
  window.timer2 = window.setTimeout(function() {
    window["img" + movie.shortTitle].click();
    window.clearTimeout(window.timer2);
  }, 92);
  window.timer = window.setTimeout(function() {
    window.listMovie(movie);
    window.clearTimeout(window.timer);
  }, 600);
  window.timer3 = window.setTimeout(function() {
    document
      .getElementById("intro")
      .scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
    window.clearTimeout(window.timer3);
  }, 600);
};

window.clearTimer = function() {
  window.clearTimeout(window.timer);
  window.clearTimeout(window.timer2);
  window.clearTimeout(window.timer3);
};

window.addEventListener("scroll", function() {
  window.clearTimer();
});
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

const createMonthSets = function() {
  for (var index = 1; index <= 12; index++) {
    const name = "M" + index;
    window[name] = new Set();
    window.Months.add(window[name]);
    window[name].name = monthsYear[index - 1];
    window[name].month = name;
    window[name].index = index;
    window[
      name
    ].tabContent = `<li class="tab pointer truncate"><a href="#${name}" onclick="roundListMovies(${name})">${window[
      name
    ].name}</a></li>`;
  }
};
createMonthSets();

class Cine {
  /**
   * Creates an instance of Cines.
   * @param {any} {
   *     Ciudad,
   *     Nombre,
   *     Cadena,
   *     TandaLunes,
   *     TandaMartes,
   *     TandaMiercoles,
   *     TandaJueves,
   *     TandaViernes,
   *     TandaSabado,
   *     TandaDomingo,
   *     Salas,
   *     Pais,
   *     WebURL,
   *     Ubicacion
   *   } 
   * @memberof Cine
   */
  constructor({
    Ciudad,
    Nombre,
    Cadena,
    TandaLunes,
    TandaMartes,
    TandaMiercoles,
    TandaJueves,
    TandaViernes,
    TandaSabado,
    TandaDomingo,
    Salas,
    Pais,
    WebURL,
    Ubicacion
  }) {
    this.ciudad = Ciudad || "No disponible";
    this.nombre = Nombre || "No disponible";
    this.cadena = Cadena || "No disponible";
    this.lunes = TandaLunes || "No disponible";
    this.martes = TandaMartes || "No disponible";
    this.miercoles = TandaMiercoles || "No disponible";
    this.jueves = TandaJueves || "No disponible";
    this.viernes = TandaViernes || "No disponible";
    this.sabado = TandaSabado || "No disponible";
    this.domingo = TandaDomingo || "No disponible";
    this.Salas = Salas || "No disponible";
    this.pais = Pais || "Honduras";
    this.web = WebURL || "No disponible";
    this.ubicacion = Ubicacion || "No disponible";
    window.Cines.add(this);
  }
}

const importCines = function() {
  const imported = __webpack_require__(13);
  imported.export.forEach(function(item) {
    new Cine(item);
  });
};

class Movie {
  /**
   * Creates an instance of Movie.
   * @param {any} {
   *     titulo,
   *     estreno,
   *     trailer,
   *     mes,
   *     duracion,
   *     genero,
   *     director,
   *     elenco,
   *     lenguaje,
   *     formato,
   *     ciudad,
   *     cines,
   *     clasificacion,
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
    director,
    elenco,
    lenguaje,
    formato,
    ciudad,
    cines,
    clasificacion,
    synopsis,
    cartelera,
    carteleraNombre
  }) {
    window.Peliculas.add(this);
    this.titulo = titulo.trim() || "No disponible";
    this.shortTitle = this.titulo.replace(" ", "_");
    window[this.titulo] = this;
    this.estreno = estreno.trim() || "No disponible";
    this.estrenoMonth = this.estreno.replace("/2017", "");
    this.trailer = trailer || "No disponible";
    this.trailerID = this.trailer.replace(
      "https://www.youtube.com/watch?v=",
      ""
    );
    const month = "M" + parseInt(estreno[3] + estreno[4], 10);
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
    this.carteleraNombre = carteleraNombre.replace("Nahun_Banegas.jpg", ".jpg");
    this.cartelera = cartelera.trim() || "No disponible";
    this.carteleraCut = this.cartelera.replace(
      "https://drive.google.com/open?id=",
      "https://drive.google.com/uc?export=download&id="
    );
    this.reqCartelera = `${this.carteleraCut}`;
    // this.reqCartelera = require(`../posters/${this.carteleraNombre}`);
    this.image = `<img class="" src="${this.reqCartelera}">`;
    this.posterCard = `<article id="intro" class="card grey darken-3">
  <div class="card-image hide-on-small-only">
    <a class="cursorZoom materialboxed">
      <img class="responsive-img" src="${this.reqCartelera}">
    </a>
  </div>
  <div class="card-content grey-text text-lighten-2">
    <span class="yellow-text text-darken-3">
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">movie_filter</i> ${this.genero}
      </div>
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">person</i> ${this.clasificacion}
      </div>
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">3d_rotation</i> ${this.formato}
      </div>
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">language</i> ${this.lenguaje}
      </div>
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">timer</i> ${this.duracion}
      </div>
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">new_releases</i> ${this.estrenoMonth}
      </div>
      <div class="chip yellow darken-3 truncate">
        <i class="material-icons tiny">movie_creation</i> ${this.director}
      </div>
    </span>
  </div>
  <div class="card-action">
    <a class="yellow-text text-darken-3">${this.titulo}</a>
  </div>
</article>
`;
    this.trailerCard = `<article class="card grey darken-3">
  <div class="">
    <div class="card-content grey-text text-lighten-2">
      <article class="video-container">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/${this
          .trailerID}?hl=es&modestbranding=1&playsinline=1&rel=0&showinfo=0&color=red&iv_load_policy=3"
          frameborder="0" allowfullscreen></iframe>
      </article>
    </div>
  </div>
</article>
`;
    this.locationCard = `<form class="card grey darken-3">
  <div class="card-content yellow-text text-darken-3">
    <article class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">location_city</i>
        <select id="ciudad" required>
          ${window.HondurasCities}
        </select>
        <label for="ciudad">Ciudad:</label>
      </div>
      <div class="input-field col s12 m12 l8">
        <i class="material-icons prefix">event</i>
        <input id="fecha" type="date" data-value="${window.Date.now()}" class="datepicker"
          required>
        <label for="fecha">Fecha:</label>
      </div>
      <div class="input-field col s12 m12 l4">
        <i class="material-icons prefix">access_time</i>
        <input id="hora" type="text" value="05:00PM" class="timepicker" required>
        <label for="hora">Hora:</label>
      </div>
    </article>
  </div>
  <div class="card-action">
    <a onclick="window.formPost()" class="btn-floating halfway-fab btn-large waves-effect waves-light yellow darken-3 ">
      <i class="material-icons large grey-text text-darken-3">event_seat</i>
    </a>
    <a class="yellow-text text-darken-3">Taquilla</a>
  </div>
</form>
`;
    this.roundListContent = `<a id="img${this
      .shortTitle}" ontouchstart="window.delayedTouch(window['${this
      .titulo}'])" ontouchmove="window.clearTimer()" onclick="window.delayedTouch(window['${this
      .titulo}'])" class="carousel-item pointer">${this.image}</a>
`;
    this.cardContent = ` <article id="synopsis" class="card grey darken-3">
    <div class="card-content grey-text text-lighten-2">
    <p>${this.synopsis}</p></div>
  </article>`;
    this.cardAction = `<div class="card-action">
    <a class="btn-floating halfway-fab btn waves-effect waves-light yellow darken-3 ">
        <i class="material-icons large grey-text text-darken-3">event</i>
    </a>
    <a class="yellow-text text-darken-3">${this.titulo}</a>
</div>
`;
    this.card = `<section class="row">
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

window.formPost = function() {
  if (
    window.ciudad.value.length > 1 &&
    window.fecha.value.length > 1 &&
    window.hora.value.length > 1
  ) {
    Materialize.toast(
      `${window.currentMovie.titulo}`,
      6000,
      "rounded yellow darken-4 grey-text text-lighten-3"
    );
    Materialize.toast(
      `${window.ciudad.value} ${window.hora.value}`,
      6000,
      "rounded yellow darken-4 grey-text text-lighten-3"
    );
    Materialize.toast(
      `${window.fecha.value}`,
      6000,
      "rounded yellow darken-4 grey-text text-lighten-3"
    );
  } else {
    Materialize.toast(
      `El formulario esta incompleto. Llenalo para tener resultados.`,
      6000,
      "rounded yellow darken-4 grey-text text-lighten-3"
    );
  }
};

const importMovies = function() {
  const imported = __webpack_require__(14);
  imported.export.forEach(function(item) {
    new Movie(item);
  });
};

const movieSection = document.getElementById("movieCard");
window.listMovies = function(set) {
  movieSection.innerHTML = "";
  let content = "";
  set.forEach(function(item) {
    content += item.card;
  });
  movieSection.innerHTML = content;
  dilligence();
};
window.listMovie = function(movie) {
  window.currentMovie = movie;
  let content = "";
  content += movie.card;
  movieSection.innerHTML = content;
  dilligence();
};

const dilligence = function() {
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
  if (!Materialize == false) {
    Materialize.updateTextFields();
  }
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
    if (
      item.size > 0 &&
      (item.index >= window.today.mm || item.index < window.today.mm - 9)
    ) {
      navTabs.innerHTML += item.tabContent;
    }
  });
  $("ul.tabs").tabs();
};

window.addEventListener("load", function(event) {
  window.defaultCity();
  importCines();
  importMovies();
  window.navTabPopulate();
  // window.roundListMovies(Peliculas);
  window.roundListMovies([window.today.Mmm]);
  // window.listMovies(Peliculas);
  $("ul.tabs").tabs("select_tab", window.today.Mmm);
  console.log("Load Finished");
});

window.printList = function() {
  var content = "";
  Peliculas.forEach(function(pelicula) {
    content += '"';
    content += pelicula.reqCartelera;
    content += '",\n';
  }, this);
  return content;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"export":[{"Ciudad":"Tegucigalpa","Nombre":"City Mall","Cadena":"Cinemark","Salas":"7","Pais":"Honduras","WebURL":"https://www.cinemarkca.com/es","Ubicacion":"https://www.google.com/maps/place/Cinemark+-+City+Mall+TGU/@14.0621176,-87.2229567,17z/data=!3m1!4b1!4m5!3m4!1s0x8f6fbd5fc1fddf57:0x8a651901b894fbce!8m2!3d14.0621124!4d-87.220768?hl=en-AU","TandaLunes":"3:00, 5:00, 7:00 ","TandaMartes":" 3:00, 5:00, 7:00","TandaMiercoles":" 5:00, 7:00","TandaJueves":" 7:00","TandaViernes":"5:00, 7:00","TandaSabado":"11:00, 1:00, 3:00, 5:00, 7:00","TandaDomingo":"11:00, 1:00, 3:00, 5:00, 7:00","Timestamp":"Thu Oct 05 2017 18:41:21 GMT-0400 (EDT)"},{"Ciudad":"Tegucigalpa","Nombre":"Mall Multiplaza","Cadena":"Cinemark","Salas":"5","Pais":"Honduras","WebURL":"https://www.cinemarkca.com/es","Ubicacion":"https://www.google.com/maps/place/Cinemark+-+City+Mall+TGU/@14.0621176,-87.2229567,17z/data=!3m1!4b1!4m5!3m4!1s0x8f6fbd5fc1fddf57:0x8a651901b894fbce!8m2!3d14.0621124!4d-87.220768?hl=en-AU","TandaLunes":"3:00, 5:00, 7:00, 9:00","TandaMartes":" 5:00, 7:00, 9:00","TandaMiercoles":"5:00, 7:00, 9:00","TandaJueves":"11:00, 1:00, 3:00, 5:00, 7:00, 9:00","TandaViernes":"11:00, 1:00, 3:00, 5:00, 7:00, 9:00","TandaSabado":"11:00, 1:00, 3:00, 5:00, 7:00, 9:00","TandaDomingo":"11:00, 1:00, 3:00, 5:00, 7:00, 9:00","Timestamp":"Thu Oct 05 2017 18:43:56 GMT-0400 (EDT)"},{"Ciudad":"Tegucigalpa","Nombre":"Cascadas Mall","Cadena":"Cinépolis","Salas":"5","Pais":"Honduras","WebURL":"https://www.cinepolis.com.hn/","Ubicacion":"https://www.google.com/maps/place/Cin%C3%A9polis/@14.0770262,-87.2023648,17z/data=!3m1!4b1!4m5!3m4!1s0x8f6fbd3666116eb7:0x86a96446dd5b6e8d!8m2!3d14.077021!4d-87.2001761?hl=en-AU","TandaLunes":"4:50, 7:15, 9:20","TandaMartes":" 4:50, 7:15, 9:20","TandaMiercoles":" 4:50, 7:15, 9:20","TandaJueves":"1:00, 3:00, 4:50, 7:15, 9:20","TandaViernes":"1:00, 3:00, 4:50, 7:15, 9:20","TandaSabado":"1:00, 3:00, 4:50, 7:15, 9:20","TandaDomingo":"1:00, 3:00, 4:50, 7:15, 9:20","Timestamp":"Thu Oct 05 2017 18:47:22 GMT-0400 (EDT)"},{"Ciudad":"Tegucigalpa","Nombre":"Mall Premier","Cadena":"Cinépolis","Salas":"5","Pais":"Honduras","WebURL":"https://www.cinepolis.com.hn/","Ubicacion":"https://www.google.com/maps/place/Cinepolis+Mall+Premier/@14.1050831,-87.236277,17z/data=!3m1!4b1!4m5!3m4!1s0x8f6f9812fbe89c4d:0xc8d54015bb00b934!8m2!3d14.1050779!4d-87.2340883?hl=en-AU","TandaLunes":"4:50, 7:15, 9:20","TandaMartes":"4:50, 7:15, 9:20","TandaMiercoles":"4:50, 7:15, 9:20","TandaJueves":"1:00, 3:00, 7:15, 9:20","TandaViernes":"1:00, 3:00, 7:15, 9:20","TandaSabado":"1:00, 3:00, 4:50, 7:15, 9:20","TandaDomingo":"1:00, 3:00, 4:50, 7:15, 9:20","Timestamp":"Thu Oct 05 2017 10:48:55 GMT-0400 (EDT)"},{"Ciudad":"Tegucigalpa","Nombre":"Novacentro","Cadena":"Metrocinemas","Salas":"5","Pais":"Honduras","WebURL":"http://www.metrocinemas.hn/main.aspx","Ubicacion":"https://www.google.com/maps/place/Metrocinemas,+Novacentro/@14.1014408,-87.1888079,17z/data=!3m1!4b1!4m5!3m4!1s0x8f6fa2deada3abb1:0x66855c950caf54c6!8m2!3d14.1014356!4d-87.1866192?hl=en-AU","TandaLunes":"3:15, 5:20, 7:15, 9:10","TandaMartes":" 3:15, 5:20, 7:15, 9:10","TandaMiercoles":"3:15, 5:20, 7:15, 9:10","TandaJueves":" 1:45, 3:15, 5:20, 7:15, 9:10","TandaViernes":"1:45, 3:15, 5:20, 7:15, 9:10","TandaSabado":"11:30, 1:45, 3:15, 5:20, 7:15, 9:10","TandaDomingo":"11:30, 1:45, 3:15, 5:20, 7:15, 9:10","Timestamp":"Thu Oct 05 2017 10:51:41 GMT-0400 (EDT)"},{"Ciudad":"Choluteca","Nombre":"Unimall","Cadena":"Unicines","Salas":"4","Pais":"Honduras","WebURL":"https://www.facebook.com/UnicinesHonduras/?ref=br_rs","Ubicacion":"https://www.google.com/maps/place/Unicines/@13.3120548,-87.1794668,17z/data=!3m1!4b1!4m5!3m4!1s0x8f703ce387dccfaf:0xf62769973bfe9310!8m2!3d13.3120496!4d-87.1772781?hl=en-AU","TandaLunes":"5:20, 7:15, 9:10","TandaMartes":"5:20, 7:15, 9:10","TandaMiercoles":"5:20, 7:15, 9:10","TandaJueves":"11:30, 1:45, 3:15, 5:20, 7:15, 9:10","TandaViernes":"11:30, 1:45, 3:15, 5:20, 7:15, 9:10","TandaSabado":"11:30, 1:45, 3:15, 5:20, 7:15, 9:10","TandaDomingo":"11:30, 1:45, 3:15, 5:20, 7:15, 9:10","Timestamp":"Thu Oct 05 2017 10:54:42 GMT-0400 (EDT)"},{"Ciudad":"La Ceiba","Nombre":"Plaza Premiere","Cadena":"Cines Premiere","Salas":"2","Pais":"Honduras","WebURL":"https://www.facebook.com/CinesPremiere/?ref=br_rs","Ubicacion":"https://www.google.com/maps/place/Cines+Premiere/@15.7693125,-86.7927944,17z/data=!3m1!4b1!4m5!3m4!1s0x8f69a9d03d81487d:0x46047adae31c1d9c!8m2!3d15.7693073!4d-86.7906057?hl=en-AU","TandaLunes":"4:00, 6:00, 8:00","TandaMartes":"4:00, 6:00, 8:00","TandaMiercoles":"4:00, 6:00, 8:00","TandaJueves":"4:00, 6:00, 8:00","TandaViernes":"4:00, 6:00, 8:00","TandaSabado":"2:00, 4:00, 6:00, 8:00","TandaDomingo":"2:00, 4:00, 6:00, 8:00","Timestamp":"Thu Oct 05 2017 10:58:03 GMT-0400 (EDT)"},{"Ciudad":"Puerto Cortes","Nombre":"Supermall","Cadena":"Metrocinemas","Salas":"4","Pais":"Honduras","WebURL":"http://www.metrocinemas.hn/main.aspx","Ubicacion":"https://www.google.com/maps/place/El+Super+Barato/@15.8026272,-87.9523768,12.54z/data=!4m5!3m4!1s0x8f67b37cec52fbf3:0x5b4207a7efd97dab!8m2!3d15.8095556!4d-87.9369736?hl=en-AU","TandaLunes":"6:00, 8:00","TandaMartes":" 6:00, 8:00","TandaMiercoles":"6:00, 8:00","TandaJueves":" 6:00, 8:00","TandaViernes":" 6:00, 8:00","TandaSabado":"2:00, 4:00, 6:00, 8:00","TandaDomingo":"2:00, 4:00, 6:00, 8:00","Timestamp":"Thu Oct 05 2017 10:59:55 GMT-0400 (EDT)"},{"Ciudad":"San Pedro Sula","Nombre":"City Mall","Cadena":"Cinemark","Salas":"7","Pais":"Honduras","WebURL":"https://www.cinemarkca.com/es","Ubicacion":"https://www.google.com/maps/place/Cinemark/@15.3928253,-88.0137516,10.42z/data=!4m5!3m4!1s0x8f665b63e1526b31:0xc6a0fe34a22a72e9!8m2!3d15.4963943!4d-88.0363923?hl=en-AU","TandaLunes":"1:00, 3:00, 4:50, 7:15, 9:20","TandaMartes":"1:00, 3:00, 4:50, 7:15, 9:20","TandaMiercoles":"1:00, 3:00, 4:50, 7:15, 9:20","TandaJueves":"1:00, 3:00, 4:50, 7:15, 9:20","TandaViernes":"1:00, 3:00, 4:50, 7:15, 9:20","TandaSabado":"1:00, 3:00, 4:50, 7:15, 9:20","TandaDomingo":"1:00, 3:00, 4:50, 7:15, 9:20","Timestamp":"Thu Oct 05 2017 11:01:17 GMT-0400 (EDT)"}]}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"export":[{"titulo":"Kingsman: El Círculo Dorado","estreno":"28/09/2017","genero":"Acción ","clasificacion":"C","duracion":"2h 21min","director":"Matthew Vaughn","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":"Taron Egerton, Edward Holcroft, Mark Strong, Julianne Moore, Channing Tatum, Halle Berry, Jeff Bridges","synopsis":"Después de que la base de operaciones de los Kingsman en Londres explote por los aires, Gary 'Eggsy' Unwin (Taron Egerton), que ya es un Kingsman de pleno derecho, y su compañero Merlin (Mark Strong) se verán obligados a viajar juntos hasta Estados Unidos. Allí, ambos deberán unirse a sus homólogos norteamericanos, los integrantes de una asociación secreta conocida como Statesman, que está liderada por el agente Champ (Jeff Bridges) y que, además, cuenta con los agentes Tequila (Channing Tatum), Whiskey (Pedro Pascal) y la gurú de la tecnología Ginger (Halle Berry).","carteleraNombre":"Kingsman_El_Cicurlo_Dorado_Poster_Final_Latino_JPosters - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAYWo3MFJTYkg4ejA","trailer":"https://www.youtube.com/watch?v=T8MbXQitTrY","Marca temporal":"Wed Sep 27 2017 19:27:08 GMT-0400 (EDT)"},{"titulo":"Asesino: Misión Venganza","estreno":"28/09/2017","genero":"Acción ","clasificacion":"C","duracion":"1h 52min ","director":"Michael Cuesta","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":"Dylan O'Brien, Michael Keaton, Sanaa Lathan","synopsis":"Esta película es la adaptación cinematográfica de la novela homónima de Vince Flynnm, cuya trama presenta a Mitch Rapp (Dylan O'Brien), un estudiante ejemplar que, tras la terrible muerte de su novia en una playa a manos de unos terorristas, decide cambiar el rumbo de su vida y dedicarse a la caza de esta clase de delincuentes. Un año más tarde, entra en las filas de la CIA, institución en la que estará a las órdenes de su mentor, Stan Hurley (Michael Keaton).","carteleraNombre":"Asesino_Mision_Veganza_Poster_Latino_2_JPosters - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAQkdxZnNJNThPLWc","trailer":"https://www.youtube.com/watch?v=Qk6aScz33-I","Marca temporal":"Wed Sep 27 2017 19:41:02 GMT-0400 (EDT)"},{"titulo":"7 Deseos","estreno":"28/09/2017","genero":"Terror","clasificacion":"C","duracion":"1h 30min","director":"John R. Leonetti","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":" Joey King, Ryan Phillippe, Ki Hong Lee","synopsis":"Claire, una adolescente de 16 años, acaba de descubrir una caja con poderes mágicos. El misterioso objeto puede concederle a la joven hasta siete deseos, con los que podría alcanzar la vida que siempre ha querido. Pero no será tan fácil, pues el poderoso objeto oculta un terrible secreto y ella tendrá que enfrentarse a las sangrientas consecuencias de sus peticiones. ","carteleraNombre":"7_Deseos_Wish_Upon_Teaser_Poster_Latino_JPosters - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDATVhVSzlDT2JGQjA","trailer":"https://www.youtube.com/watch?v=YYriP0gHaaM","Marca temporal":"Wed Sep 27 2017 19:43:31 GMT-0400 (EDT)"},{"titulo":"Más allá de la Montaña (The Mountain Between Us)","estreno":"19/10/2017","genero":"Drama","clasificacion":"B","duracion":"1h 43min","director":"Hany Abu-Assad","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":" Idris Elba, Kate Winslet, Beau Bridges","synopsis":"La historia de La montaña entre nosotros se centra en dos personajes. Por un lado tenemos al reputado cirujano Ben Bass (Idris Elba, La torre oscura) que tiene que desplazarse hasta Baltimore para realizar una operación de urgencia. Por otro, tenemos a Alex Martin (Kate Winslet, Steve Jobs) que va camino de su boda. Como andan algo ajustados de tiempo, y hay problemas con sus vuelos, Alex propone a Ben alquilar una avioneta y llegar sin problemas a sus destinos. ","carteleraNombre":"Mas_Alla_de_La_Montaña_Poster_Latino_JPosters - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAOGhVVE8wYk52elU","trailer":"https://www.youtube.com/watch?v=78jhbgygt9c","Marca temporal":"Fri Sep 29 2017 01:29:29 GMT-0400 (EDT)"},{"titulo":"Geo-Tormenta (Geostorm)","estreno":"19/10/2017","genero":"Acción / Ciencia ficción ","clasificacion":"B","duracion":" 1h 49min","director":" Dean Devlin","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":"Jeremy Ray Taylor, Gerard Butler, Abbie  Cornish, Ed Harris, Zazie Beetz, Andy Garcia, Eugenio Derbez","synopsis":"Después de una serie sin precedentes de desastres naturales que amenazaron al planeta, los líderes del mundo se unen para crear una compleja red de satélites para controlar el clima global y mantener a todos seguros. Pero ahora algo ha fallado — el sistema construido para proteger a la Tierra lo está atacando, y hay una carrera contra el reloj para descubrir la verdadera amenaza antes de que geostorm acabe con todo ... y todo el mundo junto con él. ","carteleraNombre":"geo tormenta poster latino - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAa2lZS1lZaVJucDQ","trailer":"https://www.youtube.com/watch?v=APBDcmrUNe0","Marca temporal":"Fri Sep 29 2017 01:08:23 GMT-0400 (EDT)"},{"titulo":"Condorito: La Película","estreno":"12/10/2017","genero":"Animación","clasificacion":"A","duracion":"1h 23min","director":"Alex Orrelle, Eduardo Schuldt","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":"Omar Chaparro, Jessica Cediel, Cristián de la Fuente","synopsis":"Condorito emprenderá, junto a su tenaz sobrino Coné, una peligrosa aventura para rescatar a su desaparecida suegra Doña Tremebunda, abducida misteriosamente por una banda alienígena.","carteleraNombre":"condorito poster - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAc2libFJWTkRESDA","trailer":"https://www.youtube.com/watch?v=2K5pQcCvJPg","Marca temporal":"Fri Sep 29 2017 00:19:48 GMT-0400 (EDT)"},{"titulo":"Línea Mortal: Al Límite","estreno":"12/10/2017","genero":"Drama / Terror","clasificacion":"B","duracion":"1h 48min ","director":" Niels Arden Oplev","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":"Ellen Page, Diego Luna, Nina Dobrev","synopsis":"Un grupo de jóvenes estudiantes de medicina llevan a cabo un experimento que implica la muerte provocada y la posterior resucitación de su compañera Courtney (Ellen Page). El objetivo de parar su corazón durante un minuto es lograr investigar el más allá. Al principio todo parece un absoluto éxito, por lo que los demás se animan a probarlo para descubrir qué hay al otro lado. Pero las cosas empiezan a ir mal cuando Courtney se da cuenta de que ahora puede ver a los no muertos y de que, poco a poco, empieza a ser incapaz de distinguir entre lo que es real y lo que no. Así los estudiantes descubrirán que no es fácil engañar a la muerte. ","carteleraNombre":"Linea_Mortal_Al_Limite_Poster_Latino_2_JPosters (1) - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAUUsyVGh6LWdYZUk","trailer":"https://www.youtube.com/watch?v=uc15Dvn1u9Q","Marca temporal":"Fri Sep 29 2017 00:45:50 GMT-0400 (EDT)"},{"titulo":"Logan Lucky (La Estafa de Los Logan)","estreno":"05/10/2017","genero":"Comedia","clasificacion":"B","duracion":"1h 58min","director":"Steven Soderbergh","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":" Channing Tatum, Adam Driver, Daniel Craig","synopsis":"Esta película presenta a los hermanos de Logan, los que van a participar en la próxima carrera de Nascar, la llamada Coca-Cola 600. Antes de que llegue el gran día, Jimy (Chaning Tatum), Clyde (Adam Driver) y Mellie Logan (Riley Keough) van a intentar robar el Charlotte Motor Speedway. Puede que no sean el grupo más preparado, pero al menos se tienen los unos a los otros. Estos contarán con la ayuda del experto Joe Bang (Daniel Craig).","carteleraNombre":"La_Estafa_de_los_Logan_Poster_Latino_JPosters - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAMmp3d2haMlRkM1U","trailer":"https://www.youtube.com/watch?v=2VJTow9MUFU","Marca temporal":"Thu Sep 28 2017 00:34:01 GMT-0400 (EDT)"},{"titulo":"Blade Runner 2049","estreno":"05/10/2017","genero":"Ciencia ficción","clasificacion":"C","duracion":"2h 43min","director":"Denis Villeneuve","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":" Harrison Ford, Ryan Gosling, Ana de Armas ","synopsis":"Han pasado 30 años desde los acontecimientos ocurridos en Blade Runner (1982). El oficial K (Ryan Gosling), un blade runner caza-replicantes del Departamento de Policía de Los Ángeles, descubre un secreto que ha estado enterrado durante mucho tiempo y que tiene el potencial de llevar a la sociedad al caos. Su investigación le conducirá a la búsqueda del legendario Rick Deckard (Harrison Ford), un antiguo blade runner con paradero desconocido, que lleva desaparecido 30 años. \n","carteleraNombre":"Blade_Runner_2048_Poster_Ryan_JPosters (1) - Nahun Banegas.jpeg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAeGt5dmtsWWI3OGM","trailer":"https://www.youtube.com/watch?v=XgGvz8GxUJk","Marca temporal":"Thu Sep 28 2017 00:39:59 GMT-0400 (EDT)"},{"titulo":"My Little Pony: La Película ","estreno":"05/10/2017","genero":"Animación ","clasificacion":"A","duracion":"1h 39min ","director":" Jayson Thiessen","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":" Emily Blunt, Kristin Chenoweth, Liev Schreiber","synopsis":"Una nueva fuerza oscura amenaza Ponyville, por lo que valientes ponis deciden embarcarse en una aventura a través de la tierra mágica de Equestria, donde encontrará nuevos amigos y vivirán emocionantes desafíos en una misión en la que deberán usar la magia de su amistad para salvar su hogar. ","carteleraNombre":"My_Little_Pony_La_Pelicula_Poster_Latino_Final_JPosters - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAZnd0TjlYb0dMLXM","trailer":"https://www.youtube.com/watch?v=AnnliXjtXz8","Marca temporal":"Thu Sep 28 2017 00:48:43 GMT-0400 (EDT)"},{"titulo":"The House","estreno":"05/10/2017","genero":"Comedia","clasificacion":"C","duracion":"1h 28min","director":"Andrew Jay Cohen","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"","cines":"","elenco":" Will Ferrell, Amy Poehler, Ryan Simpkins ","synopsis":"The House es una comedia norteamericana que narra la historia de un matrimonio que gasta los fondos que tenían guardados para la universidad de sus hijas. Para solucionar este grave problema, se les ocurre la idea de montar un casino ilegal en el sótano de su casa con el que ganar de nuevo dinero en efectivo y poder cumplir con sus funciones vitales como padres. Con este objetivo, convencen a sus amigos para que formen parte de este particular negocio.       ","carteleraNombre":"The_House_Poster - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDASmJhdXJnRGVfakU","trailer":"https://www.youtube.com/watch?v=FXVm97k58jc","Marca temporal":"Thu Sep 28 2017 00:57:49 GMT-0400 (EDT)"},{"titulo":"Thor: Ragnarok","estreno":"26/10/2017","genero":"Acción","clasificacion":"A","duracion":"2h 10min","director":"Taika Waititi","lenguaje":"Inglés con subtítulos en español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Chris Hemsworth, Tom Hiddleston, Cate Blanchett","synopsis":"Asgard se encuentra en manos de una poderosa amenaza, la despiadada y todopoderosa Hela (Cate Blanchett), que ha robado el trono y ha encarcelado a Thor (Chris Hemsworth), enviándole como prisionero hasta el otro extremo de la galaxia. Sin su martillo, el mítico y poderoso Mjölnir, el Dios del Trueno se encontrará a sí mismo en una carrera contra el tiempo. ","carteleraNombre":"nuevo poster thor ragnarok - Nahun Banegas.jpg","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDARzZQenRlNlQzX1E","trailer":"https://www.youtube.com/watch?v=6fdK9bTM7ig","Marca temporal":"Thu Oct 05 2017 10:02:51 GMT-0400 (EDT)"},{"titulo":"JIGSAW: El Juego Continúa ","estreno":"26/10/2017","genero":"Terror","clasificacion":"C","duracion":" 1h 31min ","director":" Michael Spierig, Peter Spierig","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Matt Passmore, Tobin Bell, Callum Keith Rennie","synopsis":"Cuando empiezan a aparecer cuerpos esparcidos a lo largo de la ciudad, a cada cual más espeluznante, todas las sospechas comienzan a señalar como culpable al homicida John Kramer, alias Jigsaw, Sin embargo, el asesino lleva más de una década muerto, ¿cómo es posible que haya vuelto a las andadas? Cinco nuevas víctimas tendrán que hacer frente al terror que supone el tétrico juego de Jigsaw. ¿Estaremos más cerca de conocer el desenlace de los macabros planes ideados por este amante de los juegos letales? ","carteleraNombre":"JigsawPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAcU5Kb25IZ3lIVDg","trailer":"https://www.youtube.com/watch?v=kf-IrwVy3PQ","Marca temporal":"Thu Oct 26 2017 11:28:31 GMT-0400 (EDT)"},{"titulo":"Feliz Día de tu Muerte","estreno":"02/11/2017","genero":"Terror","clasificacion":"C","duracion":"1h 36min","director":" Christopher Landon","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Jessica Rothe, Israel Broussard, Ruby Modine","synopsis":"La trama de Feliz día de tu muerte se centra en una mujer -Jessica Rothe-, que se encuentra atrapada en un círculo vicioso que puede suponer su propia muerte. Para evitar este desastre, tendrá que encontrar a la persona que tiene pensado acabar con su vida antes de que realice su cometido. ","carteleraNombre":"FelizDiadeTuMuertePubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAeXdVV2l2bDVtZ0k","trailer":"https://www.youtube.com/watch?v=n4gaz7w1E5E","Marca temporal":"Thu Oct 26 2017 11:37:00 GMT-0400 (EDT)"},{"titulo":"Un Papá Singular","estreno":"02/11/2017","genero":"Comedia","clasificacion":"C","duracion":"1h 42min","director":" Mike White","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Ben Stiller, Austin Abrams, Jenna Fischer ","synopsis":"Brad (Ben Stiller) cuenta con un trabajo estable y una familia feliz, pero aun así no puede dejar de obsesionarse con el éxito de las vidas de sus antiguos compañeros de colegio. Cuando lleva a su hijo a una excursión a la costa este americana, se encuentra cara a cara con ellos y tendrá que enfrentarse con sus sentimientos de fracaso.","carteleraNombre":"UnPapáSingularPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAV1Vlb2NaenhZY2s","trailer":"https://www.youtube.com/watch?v=y8kox_kYpu0","Marca temporal":"Thu Oct 26 2017 11:46:20 GMT-0400 (EDT)"},{"titulo":"Asesinato en el Expreso de Oriente","estreno":"09/11/2017","genero":"Drama","clasificacion":"B","duracion":"1h 49min","director":"Kenneth Branagh","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Daisy Ridley, Johnny Depp, Michelle Pfeiffer ","synopsis":"Año 1935. El Orient Express, un legendario tren que atraviesa Europa, queda detenido a causa de una tormenta de nieve. Durante una accidentada noche del viaje, se produce un misterioso asesinato. El detective Hércules Poirot (Kenneth Branagh) será el encargado de resolver este oscuro crimen que ha tenido lugar en uno de los vagones del tren. Todos sus pasajeros son sospechosos. En esta carrera a contrarreloj, Poirot deberá descifrar el rompecabezas antes de que el asesino ataque de nuevo. Pero lo importante no será simplemente quién y cómo lo hizo, lo crucial será por qué lo hizo. ","carteleraNombre":"AsesinatoExpresodeOrientePubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAaWlucnFack95QVE","trailer":"https://www.youtube.com/watch?v=uATofaQUgzI","Marca temporal":"Thu Oct 26 2017 11:58:18 GMT-0400 (EDT)"},{"titulo":"Liga de la Justicia","estreno":"16/11/2017","genero":"Acción","clasificacion":"B","duracion":" 2h 1min","director":"Zack Snyder","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Ben Affleck, Gal Gadot, Jason Momoa","synopsis":"Después del sacrificio realizado por Superman (Henry Cavill), la perspectiva de Bruce Wayne (Ben Affleck), nombre tras el que se oculta la ideantidad secreta de Batman, cambia radicalmente. Impulsado por una restaurada fe en la humanidad, e inspirado por el acto desinteresado del Hombre de Acero, Wayne reevalúa sus métodos extremos y decide reclutar a nuevos aliados con habilidades extraordinarias. Su objetivo es crear La Liga de la Justicia: un equipo de superhéroes que luchen contra el crimen y que defiendan la Tierra de todos los tipos de amenaza.","carteleraNombre":"LaLigadeLaJusticiaPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAUDNsZWMyaE1BUkk","trailer":"https://www.youtube.com/watch?v=NUiCZhWEzAY","Marca temporal":"Thu Oct 26 2017 12:15:47 GMT-0400 (EDT)"},{"titulo":"Coco","estreno":"23/11/2017","genero":"Animación","clasificacion":"A","duracion":"1h 40min","director":" Lee Unkrich, Adrian Molina","lenguaje":"Doblada al español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Edward James Olmos, Benjamin Bratt, Alanna Ubach","synopsis":"La historia sigue a un niño de doce años de edad llamado Miguel, que vive con su familia en una zona rural de México, y cuyo sueño es la música y tocar la guitarra. Miguel desencadenará una serie de acontecimientos extraordinarios relacionados con un misterio centenario. La festividad del Día de los Muertos servirá como telón de fondo para que nuestro protagonista se pregunte de dónde viene, cuál es su lugar dentro de su familia, y cómo se han entretejido las relaciones familiares a través del tiempo. Una celebración de la vida, de la familia, los recuerdos y la conexión a través de diversas generaciones.","carteleraNombre":"CocoPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAYWR0THAwUlJOTzg","trailer":"https://www.youtube.com/watch?v=rb0BN7CfCjU","Marca temporal":"Thu Oct 26 2017 12:28:16 GMT-0400 (EDT)"},{"titulo":"El Muñeco de Nieve","estreno":"30/11/2017","genero":"Drama","clasificacion":"C","duracion":"1h 59min","director":"Tomas Alfredson","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Michael Fassbender, Rebecca Ferguson, Charlotte Gainsbourg","synopsis":"Harry Hole (Michael Fassbender) es un brillante detective de una brigada de investigación de élite, caracterizado por usar métodos poco ortodoxos. Al investigar la extraña desaparición de una mujer durante la primera nevada del invierno, empieza a sospechar que un asesino en serie vuelve a estar activo. Se trata de un auténtico demente que se hace llamar el asesino del muñeco de nieve, y su objetivo son mujeres cuya conducta desaprueba. Con la ayuda de Katrine Bratt (Rebecca Ferguson), una brillante y perspicaz agente, el policía encajará las piezas del rompecabezas a partir de antiguos casos sin resolver para conectarlos con el último y brutal acontecimiento. Hole tendrá que adelantarse al cruel asesino que volverá a actuar, antes de la próxima nevada.","carteleraNombre":"ElMuñeroDeNievePubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDANmJHTFBGZ3djaDA","trailer":"https://www.youtube.com/watch?v=hZKxcdaqmwU","Marca temporal":"Thu Oct 26 2017 12:38:23 GMT-0400 (EDT)"},{"titulo":"Extraordinario (Wonder)","estreno":"30/11/2017","genero":"Drama","clasificacion":"A","duracion":"1h 53min ","director":"Stephen Chbosky","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Julia Roberts, Jacob Tremblay, Owen Wilson","synopsis":"Auggie Pullman es un niño que nació con una deformidad facial. Ahora, tras diez años de hospital en hospital y de largos periodos en su casa, tendrá que asistir por primera vez a la escuela. Gracias al apoyo de sus padres, Nate e Isabel, Auggie trata de encajar en el nuevo reto al que se enfrenta. Demostrar que es un niño como otro cualquiera pese a su fisíco será una dura batalla. Profesores, compañeros de colegio y vecinos se enfrentarán también a ellos mismos, combatiendo por cambiar la pena por la aceptación total. ","carteleraNombre":"ExtraordinarioPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDATEVyeTVWbjVMVms","trailer":"https://www.youtube.com/watch?v=Dtls9Ez1gd4","Marca temporal":"Thu Oct 26 2017 12:45:47 GMT-0400 (EDT)"},{"titulo":"Y Los Tamales?","estreno":"30/11/2017","genero":"Comedia","clasificacion":"B","duracion":"1h 11min ","director":"Tomas Chi","lenguaje":"Original","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Nicolas Castillo, Juan Funes, Joel Lopez","synopsis":"Un taxista Hondureño tiene la tarea de recoger una carga de tamales para Nochebuena. En su viaje, recoge algunos personajes picantes que tienen secretos que esconder. Juntos, toman un largo viaje en taxi hacia una redención cómica.","carteleraNombre":"YLosTamalesPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAemJ3RG9zVm9JWjg","trailer":"https://www.youtube.com/watch?v=mj04hv4JqtA","Marca temporal":"Thu Oct 26 2017 13:21:23 GMT-0400 (EDT)"},{"titulo":"La Estrella de Belén (The Star)","estreno":"30/11/2017","genero":"Animación","clasificacion":"A","duracion":"","director":"Timothy Reckart","lenguaje":"Doblada al español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Steven Yeun, Kristin Chenoweth, Zachary Levi","synopsis":"Bo es un burrito pequeño, pero valiente, que anhela una vida más allá de su rutina diaria en el molino del pueblo. Un día reúne el coraje necesario para cumplir la aventura de sus sueños. En su viaje conocerá a Ruth, una adorable oveja que ha perdido su rebaño, y a Dave, una paloma con grandes aspiraciones. Durante su camino, en el que siguen una Estrella muy especial, encontrarán además a tres camellos y a otros excéntricos animales. Todos ellos se convertirán en los héroes no reconocidos de la primera Navidad.","carteleraNombre":"LaEstrelladeBelénPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAMGlvWHllQWZYc0U","trailer":"https://www.youtube.com/watch?v=MX-hsxU2y78","Marca temporal":"Thu Oct 26 2017 16:19:01 GMT-0400 (EDT)"},{"titulo":"Suburbicon","estreno":"30/11/2017","genero":"Drama","clasificacion":"C","duracion":" 1h 44min","director":" George Clooney","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Matt Damon, Julianne Moore, Oscar Isaac","synopsis":"En 1959 la familia Lodge lleva una vida tranquila en Suburbicon. La comunidad suburbana aparentemente perfecta: casas baratas, todo bien cuidado y un ambiente apacible. Pero Suburbicon no es tan idílico como parece y bajo sus tranquilas calles esconde una realidad a la que el padre de familia, Gardner Lodge tendrá que enfrentarse. Violencia, engaños, traiciones... y muy malas decisiones. ","carteleraNombre":"SuburbiconPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAQ2dlMWN1TU9hN2c","trailer":"https://www.youtube.com/watch?v=g-78NXBwXyY","Marca temporal":"Thu Oct 26 2017 16:35:42 GMT-0400 (EDT)"},{"titulo":"La Navidad de Las Madres Rebeldes","estreno":"07/12/2017","genero":"Comedia","clasificacion":"C","duracion":"1h 44min ","director":" Jon Lucas, Scott Moore","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Kristen Bell, Mila Kunis, Justin Hartley","synopsis":"Amy, Carla y Kiki harán todo lo posible por mantener las composturas cuando sus respectivas madres y abuelas de sus hijos les hagan una visita durante las vacaciones de Navidad.","carteleraNombre":"LaNavidadDeMadresSolterasPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAbk9kcUpzMThYT3c","trailer":"https://www.youtube.com/watch?v=s9hUj1DlS4E","Marca temporal":"Thu Oct 26 2017 17:02:07 GMT-0400 (EDT)"},{"titulo":"Victoria y Abdul","estreno":"07/12/2017","genero":"Drama","clasificacion":"B","duracion":"1h 51min","director":"Stephen Frears","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes, Danli, Juticalpa, Tocoa","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":"Judi Dench, Ali Fazal, Tim Pigott-Smith","synopsis":"Gran Bretaña, año 1887. Con motivo de la celebración de los 50 años de reinado de la Reina Victoria (Judi Dench), el joven Abdul Karim (Ali Fazal) viaja desde la India a la corte británica para participar en el Jubileo. Conocido como 'El Munshi', Abdul desempeñará el cargo de secretario indio, y en apenas unos meses se convertirá en uno de los personajes más influyentes en la vida de Victoria. Entre ambos se acabará forjando un afecto especial, aunque esta estrecha amistad será mal recibida dentro de la Casa Real, debido al cambio de mentalidad que comienza a darse en la reina. Karim acabará siendo nombrado Secretario de la India, cargo que ejerció durante los últimos 15 años de vida de la monarca. Una historia sobre cómo la amistad puede cambiar la vida de una persona.","carteleraNombre":"VictoriayAbdulPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAV09zYkpDRXVGX1U","trailer":"https://www.youtube.com/watch?v=pQnK1AYWfjo","Marca temporal":"Sat Oct 28 2017 20:26:56 GMT-0400 (EDT)"},{"titulo":"Guerra de Papás 2","estreno":"07/12/2017","genero":"Comedia","clasificacion":"B","duracion":" 1h 38min ","director":"Sean Anders","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":"Linda Cardellini, Mark Wahlberg, Mel Gibson","synopsis":"¡La película más divertida y exitosa de la navidad de 2015 ya tiene segunda parte! Papá y papito: Dusty (Mark Wahlberg) y Brad (Will Ferrell) se han unido para ofrecerle a sus hijos la Navidad perfecta. Este nueva alianza se pone a prueba cuando el papá de vieja escuela y gruñón de Dusty (Mel Gibson) y el papá ultra cariñoso y tierno de Brad (John Lithgow) llegan para convertir las vacaciones Decembrinas en un completo desastre.","carteleraNombre":"GuerradePapasPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAVG1kckRsbTlJakE","trailer":"https://www.youtube.com/watch?v=hkzOxL9ZvT4","Marca temporal":"Sat Oct 28 2017 20:45:04 GMT-0400 (EDT)"},{"titulo":"Star Wars: Los Últimos Jedi","estreno":"14/12/2017","genero":"Acción","clasificacion":"B","duracion":"2h 30min","director":" Rian Johnson","lenguaje":"Inglés con subtítulos en español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Daisy Ridley, John Boyega, Mark Hamill ","synopsis":"Esta octava entrega de la saga espacial comienza inmediatamente después de los hechos ocurridos al final de Star Wars: El despertar de la fuerza (2015). En ella se plantean muchas incógnitas para los protagonistas. ¿Se convertirá la joven chatarrera Rey (Daisy Ridley), procedente del planeta Jakku, en Jedi tras ver que es sensible a la Fuerza? ¿Será el legendario Maestro Jedi Luke Skywalker (Mark Hamill), exiliado a un lejano lugar de la galaxia, quien enseñe a Rey los designios de la Fuerza? ¿Cómo afrontará la General de la Resistencia Leia Organa (Carrie Fisher) la muerte de Han Solo a manos de su hijo Ben Solo, convertido en Kylo Ren (Adam Driver), líder de los Caballeros de la Primera Orden? ¿Qué harán ahora el talentoso piloto de la Resistencia Poe Dameron (Oscar Isaac) y Finn (John Boyega), el ex-soldado de asalto que está libre de las garras de la Primera Orden? ","carteleraNombre":"StarWarsJediPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAVnBtMFdmRVVGaDQ","trailer":"https://www.youtube.com/watch?v=3_YJYdJA6Yc","Marca temporal":"Sat Oct 28 2017 21:08:04 GMT-0400 (EDT)"},{"titulo":"Olé: El viaje de Ferdinand","estreno":"21/12/2017","genero":"Animación","clasificacion":"A","duracion":"1h 46m","director":" Carlos Saldanha","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Kate McKinnon, Bobby Cannavale, John Cena","synopsis":"Ferdinand es un toro sensible y nada guerrero. Él no es como los demás toros, que se pasan el día rebufando y corneándose los unos con los otros. Ferdinand prefiere oler las flores, sentado debajo de una encina, en lugar de competir en fiereza con los otros toros. No es cobarde, simplemente es pacifista, y debido a su fascinación por la naturaleza, se niega a luchar. ","carteleraNombre":"OleFerdinandPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAWTNYX2J4TmxjUm8","trailer":"https://www.youtube.com/watch?v=8KYoWDKYkzI","Marca temporal":"Sat Oct 28 2017 21:23:13 GMT-0400 (EDT)"},{"titulo":"Jumanji: En la Selva","estreno":"28/12/2017","genero":"Acción","clasificacion":"B","duracion":"","director":"Jake Kasdan","lenguaje":"Español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Dwayne Johnson, Karen Gillan, Kevin Hart","synopsis":"El misterioso y letal juego Jumanji reaparece más de veinte años después. Es la época actual, y cuatro adolescentes se introducen en esta nueva aventura, ahora a partir de un videojuego que sirve como un portal a través del espacio-tiempo. Absorbidos por el mundo de Jumanji, un juego que no se puede abandonar hasta que acaba la partida, los jóvenes se enfrentarán a rinocerontes, mambas negras y una infinita variedad de trampas de la selva. ","carteleraNombre":"JumanjiPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDANlpIMUI2QVpOS3c","trailer":"https://www.youtube.com/watch?v=LSrBBhedXVE","Marca temporal":"Sat Oct 28 2017 21:31:55 GMT-0400 (EDT)"},{"titulo":"El Gran Showman","estreno":"04/01/2018","genero":"Drama","clasificacion":"A","duracion":"","director":" Michael Gracey","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Zendaya, Rebecca Ferguson, Hugh Jackman","synopsis":"Estados Unidos, siglo XIX. P.T. Barnum (Hugh Jackman) acaba de perder su trabajo de oficinista porque la empresa para la que trabajaba se ha ido a la bancarrota. Deseoso de ofrecer a su esposa Charity (Michelle Williams) y a sus dos hijas la vida que siempre les había prometido, Barnum se embarca en un proyecto colosal: crear un gran y asombroso espectáculo circense. Para ello, este inventor del show bussines buscará artistas únicos, desde enanos, a mujeres barbudas, equilibristas y toda clase de shows imaginativos. Su lema: para hacer algo nuevo hay que hacer algo poco convencional. ","carteleraNombre":"ShowmanPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAcEJZeUdKMHBUa00","trailer":"https://www.youtube.com/watch?v=-Q8P4mj4cRM","Marca temporal":"Sat Oct 28 2017 21:39:56 GMT-0400 (EDT)"},{"titulo":"Notas Perfectas 3","estreno":"04/01/2018","genero":"Comedia","clasificacion":"B","duracion":"","director":"Trish Sie","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Ruby Rose, Hailee Steinfeld, Anna Kendrick","synopsis":"Dando la nota vuelve con más música, humor, y nuevas y espectaculares coreografías. Después de haber ganado el Campeonato Mundial, las Barden Bellas están de capa caída. Su mayor deseo es reunirse de nuevo y volver a cantar en los escenarios. Su oportunidad será en el USO Tour, una gira que se organiza para montar espectáculos y conciertos para animar la moral de los miembros de las Fuerzas Armadas de los Estados Unidos por todo el mundo. Pero el reto será complicado porque las Bellas compiten con grupos que además de voz utilizan instrumentos. ¿Preparados para que comience el espectáculo?\n","carteleraNombre":"NotasPerfectas3PubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDANUMxYlJrMXY0VTQ","trailer":"https://www.youtube.com/watch?v=tzfbnK6L9_I","Marca temporal":"Sat Oct 28 2017 22:05:33 GMT-0400 (EDT)"},{"titulo":"La Noche del Demonio: La última llave","estreno":"04/01/2018","genero":"Terror","clasificacion":"B","duracion":"","director":"Adam Robitel","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Lin Shaye, Javier Botet, Josh Stewart","synopsis":"Regresan los eventos parapsicólogicos protagonizados por la talentosa psíquica Elise Rainier (Lin Shaye), la médium capaz de ponerse en contacto con los muertos y que lucha contra los espíritus demoniacos. En esta nueva aventura, ambientada tras los hechos ocurridos en Chapter 3, conoceremos a la familia de Elise, así como sus orígenes.\n","carteleraNombre":"LaNochedelDemonioPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAaVhPRWYzUUxVRUk","trailer":"https://www.youtube.com/watch?v=qf5Z0cwNkIk","Marca temporal":"Sat Oct 28 2017 22:17:44 GMT-0400 (EDT)"},{"titulo":"The Foreigner","estreno":"04/01/2018","genero":"Acción","clasificacion":"C","duracion":"1h 54min","director":"Martin Campbell","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Katie Leung, Jackie Chan, Rufus Jones ","synopsis":"Quan (Jackie Chan) es el propietario de un restaurante chino en Londres que sufre un atentado orquestado por el grupo paramilitar irlandés IRA. Su hija muere en la explosión y este decidirá vengarse.","carteleraNombre":"ForeignerPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAdHlxcjhfV1dLUTg","trailer":"https://www.youtube.com/watch?v=LmImJ6ZUiqE","Marca temporal":"Sat Oct 28 2017 22:35:34 GMT-0400 (EDT)"},{"titulo":"El Pájaro Loco: La película","estreno":"11/01/2018","genero":"Animación","clasificacion":"A","duracion":"1h 24min ","director":" Alex Zamm","lenguaje":"Español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Timothy Omundson, Thaila Ayala, Eric Bauza","synopsis":"Lance Walters es un abogado divorciado que decide irse a vivir con su hijo y su nueva novia a una casa de ensueño en un bosque situado en las montañas. Sin embargo, allí descubrirá que para construir su hogar deberá cortar un árbol en el que vive un pájaro carpintero, contra el que empezará una guerra para decidir quién se hará con el lugar.","carteleraNombre":"PajaroLocoPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAcDFhTlItWFh6bjA","trailer":"https://www.youtube.com/watch?v=TYW_cdcLAoM","Marca temporal":"Sat Oct 28 2017 22:40:58 GMT-0400 (EDT)"},{"titulo":"Pequeña Gran Vida","estreno":"11/01/2018","genero":"Comedia","clasificacion":"","duracion":"2h 15min","director":"Alexander Payne","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Matt Damon, Christoph Waltz, Hong Chau","synopsis":"Esta es la historia de un hombre de Omaha, que se une a un grupo de personas que están experimentando con una nueva idea, la de reducir su tamaño para moverse a las pequeñas comunidades que se están creando en todo el mundo. ","carteleraNombre":"PequeñaGranVidaPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAUFFFWXJYdGhZc2c","trailer":"https://www.youtube.com/watch?v=xbYyje7FR3c","Marca temporal":"Sat Oct 28 2017 22:54:11 GMT-0400 (EDT)"},{"titulo":"Tadeo Jones 2: El secreto del Rey Midas","estreno":"18/01/2017","genero":"Acción","clasificacion":"","duracion":"1h 25min ","director":" David Alonso, Enrique Gato","lenguaje":"Español","formato":"3D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Óscar Barberán, Michelle Jenner, Adriana Ugarte","synopsis":"¡Tadeo Jones de nuevo en acción! En esta segunda entrega de las aventuras del albañil convertido a arqueólogo viajaremos hasta Las Vegas. Allí acudirá el intrépido protagonista, que ha decidido formalizar su vocación y comenzar sus estudios en la universidad, para la presentación del último descubrimiento de la arqueóloga Sara Lavroff: uno de los tres discosde oro del collar del Rey Midas, el monarca que convertía todo lo que tocaba en oro, confirmando de esta manera que existe de verdad. ","carteleraNombre":"TadeoJones2PubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAVHBZcVRULUNmczg","trailer":"https://www.youtube.com/watch?v=BvtaqbIS7PA","Marca temporal":"Sat Oct 28 2017 23:02:26 GMT-0400 (EDT)"},{"titulo":"Wonder Wheel","estreno":"18/01/2018","genero":"Drama","clasificacion":"B","duracion":"1h 41min","director":"Woody Allen","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Jim Belushi, Juno Temple, Justin Timberlake","synopsis":"Son los años 50 en Nueva York. Las vidas de cuatro personajes se entrelazan en medio del ajetreo y el bullicio del parque de atracciones de Coney Island. Ginny (Kate Winslet) es una ex actriz emocionalmente volátil que ahora trabaja como camarera, Humpty (Jim Belushi), es el rudo operador del carrusel Wonder Wheel, Mickey (Justin Timberlake) es un apuesto salvavidas que sueña con convertirse en dramaturgo y Carolina (Juno Temple) es la hija de Humpty que tiene problemas con ciertos gangsters.","carteleraNombre":"WonderWheelPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAd0lWUUJzX1dMYXM","trailer":"https://www.youtube.com/watch?v=VFM0UqX9MJ8","Marca temporal":"Sat Oct 28 2017 23:09:16 GMT-0400 (EDT)"},{"titulo":"Maze Runner: La Cura Mortal","estreno":"25/01/2018","genero":"Acción","clasificacion":"B","duracion":"","director":"Wes Ball","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Kaya Scodelario, Dylan O'Brien, Walton Goggins","synopsis":"Thomas (Dylan O'Brien) ha vuelto con más fuerzas que nunca. Su objetivo es encontrar de una vez por todas la cura para la Llamarada, la enfermedad que ha asolado el mundo. Además, él y sus compañeros tendrán que resolver todas las preguntas que les persiguen desde que un día aparecieran en el Claro del Laberinto. Para ello, tendrán que volver al punto de partida donde empezaron, pero el camino no será nada fácil. ¿Conseguirán dar respuesta a todos los interrogantes sobre el laberinto y los que lo crearon? ","carteleraNombre":"MazeRunner3PubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDAT2R4STR4VHE1MG8","trailer":"https://www.youtube.com/watch?v=SDcssH4MVO4","Marca temporal":"Sat Oct 28 2017 23:14:52 GMT-0400 (EDT)"},{"titulo":"Cincuenta Sombras: Liberadas","estreno":"08/02/2018","genero":"Drama","clasificacion":"C","duracion":"","director":" James Foley","lenguaje":"Español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":" Dakota Johnson, Jamie Dornan, Arielle Kebbel","synopsis":"Tercera y última entrega de la trilogía que describe la turbulenta y sensual relación entre la joven Anastasia Steele (Dakota Johnson) y el seductor y exitoso magnate de los negocios Christian Grey (Jamie Dornan). En esta ocasión, Grey accederá a los propósitos de Anastasia, con tal de mantenerla a su lado. Fundiendo sus vidas como si fueran una sola, Grey ha demostrado que quiere poner el mundo a los pies de la joven, pero no sabe si será suficiente. A pesar de su necesidad extrema de protegerla en todo momento, ambos están enamorados y siguen su camino juntos.","carteleraNombre":"CincuentaSombrasLiberadasPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDATHpFdWtDYnZuVU0","trailer":"https://www.youtube.com/watch?v=9P9sf5TiigY","Marca temporal":"Sat Oct 28 2017 23:27:40 GMT-0400 (EDT)"},{"titulo":"Pantera Negra","estreno":"15/02/2018","genero":"Acción","clasificacion":"","duracion":"","director":" Ryan Coogler","lenguaje":"Inglés con subtítulos en español","formato":"2D","ciudad":"Tegucigalpa, San Pedro Sula, Comayagua, Choluteca, Siguatepeque, El Progreso, Choloma, La Ceiba, Tela, Puerto Cortes","cines":"Cinemark, Cinépolis, Metrocinemas, Unicines, Premiere, Bahia, Aventura, Valladolid","elenco":"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o","synopsis":"T'Challa (Chadwick Boseman) regresa a su hogar en la apartada nación africana de Wakanda para servir como líder de su país. Tras suceder a su padre en el trono, pasa a convertirse en Pantera Negra, una sigilosa criatura de la noche, con agudos sentidos felinos y otras habilidades como súper fuerza e inteligencia, agilidad, estrategia o maestro del combate sin armas. Es bajo el liderazgo de T'Challa como Wakanda consigue convertirse en una de las naciones más ricas y tecnológicamente avanzadas del planeta. ","carteleraNombre":"PanteraNegraPubliCine","cartelera":"https://drive.google.com/open?id=0B06jgNMPyWDARUhUdXQzZWZUQ1E","trailer":"https://www.youtube.com/watch?v=JcIye2DaZwI","Marca temporal":"Sat Oct 28 2017 23:33:34 GMT-0400 (EDT)"}]}

/***/ })
],[9]);
//# sourceMappingURL=app.js.map?2f22c87546a058f61195