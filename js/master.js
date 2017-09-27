let EnCines = new Set();
let Septiembre = new Set();
let Octubre = new Set();
let Noviembre = new Set();
class Movie {
  /**
   * Creates an instance of Movie.
   * @param {Object} {
   *     titulo,
   *     estreno,
   *     duracion,
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
    director,
    elenco,
    synopsis,
    cartelera
  }) {
    this.titulo = titulo;
    this.estreno = estreno;
    this.mes = mes;
    this.duracion = duracion;
    this.director = director;
    this.elenco = elenco;
    this.synopsis = synopsis;
    this.cartelera = cartelera;
    this.card = `<article class="card horizontal black hide-on-med-and-down show-on-large-only">
    <div class="card-image col m4 l3">
      <img class="" src="${cartelera}">
    </div>
    <div class="card-stacked col m8 l9">
      <div class="card-content grey-text text-lighten-2">
        <span class="card-title yellow-text text-darken-3">${titulo}</span>
        <ul>
          <li>${duracion}</li>
          <li>Director: ${director}</li>
          <li>Reparto: ${elenco}</li>
        </ul>
        <p>
        ${synopsis}
        </p>
      </div>
      <div class="card-action">
        <h6 class="yellow-text text-darken-3">Fecha de estreno: ${estreno}</h6>
      </div>
    </div>
  </article>
  <article class="card black hide-on-large-only">
    <div class="card-image">
      <img src="${cartelera}">
    </div>
    <div class="card black">
      <div class="card-content grey-text text-lighten-2">
        <span class="card-title yellow-text text-darken-3">${titulo}</span>
        <ul>
          <li>/ C / 1h 35min / Ciencia Ficcion</li>
          <li>Director: ${director}</li>
          <li>Reparto: ${elenco}</li>
        </ul>
        <p>
        ${synopsis}
        </p>
      </div>
      <div class="card-action">
        <h6 class="yellow-text text-darken-3">Fecha de estreno: ${estreno}}</h6>
      </div>
    </div>
  </article>`;
  }
}

const torreOscura = new Movie({
  titulo: "La Torre Oscura",
  estreno: "24",
  duracion: "/ C / 1h 35min / Ciencia Ficcion",
  director: "Nicolaj Arcel",
  elenco: "Idris Elba, Matthew McConaughey",
  synopsis:
    "Existen otros mundos además de éste. The Dark Tower, de Stephen King, la ambiciosa y extensa historia de uno de los autores más famosos del mundo, llega a la gran pantalla. El último Caballero Guerrero, Roland Deschain (Idris Elba), está confinado en una eterna batalla con Walter O’Dim, también conocido como el Hombre de Negro (Matthew McConaughey), decidido a evitar que destruya la Torre Oscura, que mantiene unido al universo. Con el destino de los mundos en peligro, el bien y el mal colisionan en la batalla final, pues únicamente Roland puede defender la Torre contra el Hombre de Negro.",
  cartelera: "./posters/2017/08/La_Torre_Oscura_Poster_Final_Latino.jpg"
});
const movieSection = document.getElementById("movieCard");
movieSection.innerHTML = torreOscura.card;
$(document).ready(function() {
  $(".carousel").carousel({
    dist: -45,
    padding: 10
  });
});
