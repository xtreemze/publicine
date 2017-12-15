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
  }, 130);
  window.timer = window.setTimeout(function() {
    window.listMovie(movie);
    window.clearTimeout(window.timer);
  }, 600);
  window.timer3 = window.setTimeout(function() {
    document
      .getElementById("intro")
      .scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth"
      });
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
    ].tabContent = `<li class="tab pointer truncate"><a href="#${name}" onclick="roundListMovies(${name})">${
      window[name].name
    }</a></li>`;
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
  const imported = require("./cines.json");
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
    this.carteleraNombre = carteleraNombre.replace(
      "Nahun_Banegas.jpg",
      ".jpg"
    );
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
        <i class="material-icons tiny">new_releases</i> ${
          this.estrenoMonth
        }
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
        <iframe width="720" height="480" src="https://www.youtube.com/embed/${
          this.trailerID
        }?hl=es&modestbranding=1&playsinline=1&rel=0&showinfo=0&color=red&iv_load_policy=3"
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
    this.roundListContent = `<a id="img${
      this.shortTitle
    }" ontouchstart="window.delayedTouch(window['${
      this.titulo
    }'])" ontouchmove="window.clearTimer()" onclick="window.delayedTouch(window['${
      this.titulo
    }'])" class="carousel-item pointer">${this.image}</a>
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
  const imported = require("./export.json");
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
