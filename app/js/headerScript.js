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
