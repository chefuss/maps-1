function inicializarMapa() {
  var localizacion = { lat: -31.4662446, lng: -64.3983766 };
  var contenidoCasaCentral = '<h2>Casa Central</h2>';
  var locales = [
    {
      title: 'Tienda Córdoba 1',
      content: '<p>Tienda Córdoba 1</p>',
      position: {
        lat: -31.3366099,
        lng: -64.2867402
      }
    },
    {
      title: 'Tienda Córdoba 2',
      content: '<p>Tienda Córdoba 2</p>',
      position: {
        lat: -31.3412589,
        lng: -64.296862
      }
    },
    {
      title: 'Tienda Córdoba 3',
      content: '<p>Tienda Córdoba 3</p>',
      position: {
        lat: -31.3583939,
        lng: -64.3433966
      }
    }
  ];

  var mapa = document.getElementById('maps');
  var map = new google.maps.Map(mapa, {
    center: localizacion,
    zoom: 8
  });

  var infoWindow = new google.maps.InfoWindow({
    content: contenidoCasaCentral
  });
  var marker = new google.maps.Marker({
    position: localizacion,
    map: map,
    title: 'Casa Central'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  for (var i = 0; i < locales.length; i++) {
    var infoWindows = new google.maps.InfoWindow({
      content: locales[i].content
    });

    var local = new google.maps.Marker({
      position: { lat: locales[i].position.lat, lng: locales[i].position.lng },
      map: map,
      title: locales[i].title,
      content: locales[i].content
    });
    google.maps.event.addListener(local, 'click', function() {
      console.log(this);
      infoWindows.setContent(this.content);
      infoWindows.open(map, this);
    });
  }
}
