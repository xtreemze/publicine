const bodyContent = document.getElementById("bodyContent");
const banner = require("../img/banner.svg");
const banner2 = require("../src/banner-02.svg");
bodyContent.innerHTML = `<main class="grey darken-4">
  <div class="row ">
    <div class="col s12 m12 l5">
      <section class="grey darken-4">
        <div class="center-align">
          <a href="" class="brand-logo">
            <img src="${banner2}" alt="">
          </a>
        </div>
      </section>
      <ul id="navTabs" class="tabs tabs-transparent tabs-fixed-width">
      </ul>
      <section id="roundList" class="row">
      </section>
    </div>
    <div class="col s12 m12 l7">
      <section id="movieCard" class="section row">
        <div class="container">
          <div class="card grey darken-3">
            <div class="card-image">
              <img src="${banner}" alt="">
            </div>
            <div class="card-content">
            </div>
            <div class="card-action">
              <a class="yellow-text text-darken-3">
                Elige una pelicula</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</main>
<footer class="page-footer yellow darken-3">
  <div class="container">
    <div class="row">
      <div class="col l6 m6 s12">
        <h5 class="white-text">Contactenos</h5>
        <ul>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Link 1</a>
          </li>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Link 2</a>
          </li>
        </ul>
      </div>
      <div class="col l6 m6 s12">
        <h5 class="white-text">Trabaja con Nosotros</h5>
        <ul>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Link 1</a>
          </li>
          <li>
            <a class="grey-text text-lighten-3" href="#!">Link 2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright yellow darken-4">
    <div class="container">
      <div class="row">
        <p class="col s12 m6 l6">©2017 PubliCine</p>
        <p id="city" class="col s12 m6 l6"></p>
      </div>
    </div>
  </div>
</footer>
<!-- <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script> -->
<!-- <script src="bundle.js"></script> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-106538829-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments) };
  gtag('js', new Date());

  gtag('config', 'UA-106538829-1');
</script>
`;
