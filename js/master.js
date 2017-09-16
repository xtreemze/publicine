class Movie {
  constructor(
    title,
    dateDay,
    dateMonth,
    duration,
    director,
    cast,
    synopsis,
    poster
  ) {
    this.title = title;
    this.dateDay = dateDay;
    this.dateMonth = dateMonth;
    this.duration = duration;
    this.director = director;
    this.cast = cast;
    this.synopsis = synopsis;
    this.poster = poster;
    // this.rating = rating;
    const date = dateDay + " de " + dateMonth;
    this.card = `<article class="card horizontal black hide-on-small-only">
    <div class="card-image">
      <img class="" src="${poster}">
    </div>
    <div class="card-stacked">
      <div class="card-content grey-text text-lighten-2">
        <span class="card-title yellow-text text-darken-3">${title}</span>
        <ul>
          <li>${duration}</li>
          <li>Director: ${director}</li>
          <li>Reparto: ${cast}</li>
        </ul>
        <p>
        ${synopsis}
        </p>
      </div>
      <div class="card-action">
        <h6 class="yellow-text text-darken-3">Fecha de estreno: ${date}</h6>
      </div>
    </div>
  </article>
  <article class="card black hide-on-med-and-up">
    <div class="card-image">
      <img src="${poster}">
    </div>
    <div class="card black">
      <div class="card-content grey-text text-lighten-2">
        <span class="card-title yellow-text text-darken-3">${title}</span>
        <ul>
          <li>/ C / 1h 35min / Ciencia Ficcion</li>
          <li>Director: ${director}</li>
          <li>Reparto: ${cast}</li>
        </ul>
        <p>
        ${synopsis}
        </p>
      </div>
      <div class="card-action">
        <h6 class="yellow-text text-darken-3">Fecha de estreno: ${date}}</h6>
      </div>
    </div>
  </article>`;
  }
}

const torreOscura = new Movie(
  "La Torre Oscura",
  "24",
  "Agosto",
  "/ C / 1h 35min / Ciencia Ficcion",
  "Nicolaj Arcel",
  "Idris Elba, Matthew McConaughey",
  "Existen otros mundos además de éste. The Dark Tower, de Stephen King, la ambiciosa y extensa historia de uno de los autores más famosos del mundo, llega a la gran pantalla. El último Caballero Guerrero, Roland Deschain (Idris Elba), está confinado en una eterna batalla con Walter O’Dim, también conocido como el Hombre de Negro (Matthew McConaughey), decidido a evitar que destruya la Torre Oscura, que mantiene unido al universo. Con el destino de los mundos en peligro, el bien y el mal colisionan en la batalla final, pues únicamente Roland puede defender la Torre contra el Hombre de Negro.",
  "./posters/2017/08/La_Torre_Oscura_Poster_Final_Latino.jpg"
);
const movieSection = document.getElementById("movieCard");
movieSection.innerHTML = torreOscura.card;
$(document).ready(function() {
  $(".carousel").carousel({
    dist: -45,
    padding: 10
  });
});
