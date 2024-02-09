var map;
var facetChoice;
var facetChosen = 0;
var sw;
var ne;


//Runs when the page is loaded, in order to create a google map with the center in New York City.
function initMap() {
  var newYorkCityLatLong = new google.maps.LatLng(40.7128, -74.0059);
  map = new google.maps.Map(document.getElementById('map'), {
    center: newYorkCityLatLong,
    zoom: 9,
  });

  //this listener works, but I am having a very hard time getting the NY Times api to work the way it is supposed to when using the sw,
  //and ne parameters. When those are supplied it is supposed to keep the results to those within the box created by those two points, 
  //but it doesn't work, not here or in their console. A different way to do this would be to manually check if every point is within the
  //parameters.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    sw = bounds.getSouthWest();
    ne = bounds.getNorthEast();
    swLat = sw.lat().toFixed(5);
    swLng = sw.lng().toFixed(5);
    neLat = ne.lat().toFixed(5);
    neLng = ne.lng().toFixed(5);
    loadMarkers();
  });
}

//Queries the NY Times Geographic API and takes the results and creates markers out of them.
function loadMarkers() {
  var url = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
  if(facetChosen) {
    url += '?' + $.param({
      'sw': swLat + ',' + swLng,
      'ne': neLat + ',' + neLng,
      'facet': facetChoice,
      'country_code': "US",
      'api-key': "af9bf1c31430421ab0ab8f940e8b987f"
    });
    facetChosen = 0;
  } else {
    url += '?' + $.param({
      'sw': swLat + ',' + swLng,
      'ne': neLat + ',' + neLng,
      'country_code': "US",
      'api-key': "af9bf1c31430421ab0ab8f940e8b987f"
  });
}
  var things;
  //This proxyurl was used to overcome a Access-Control-Allow-Origin error with CORS.
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //could use this fetch method, or a GET ajax call.
  fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents => JSON.parse(contents))
    .then(function(data){
      console.log(url);
      for (var i = 0; i < data.results.length; i++) {
        var latLon = new google.maps.LatLng(data.results[i].latitude,data.results[i].longitude);
        var marker = new google.maps.Marker({
            position: latLon,
        });  
        marker.addListener('click', addInfoWindow(data, marker, i));
        marker.setMap(map); 
      } 
    });
  }

//Creates an info window to be opened when a marker is clicked.
function addInfoWindow(data, marker, index) {
  return function() {
    var infowindow = new google.maps.InfoWindow({
      content: '<h1>' + data.results[index].name + '</h1>' +
               '<p>' + data.results[index].name + ' has a lat/lng of (' + data.results[index].latitude + ', ' + data.results[index].longitude + '). ' +
                'It also has an elevation of ' + data.results[index].elevation + ' feet.</p>'
    });
    infowindow.open(map, marker);
  }
}

//Takes radio button input and reloads markers based on the change in facets.
function changeFacet(val) {
  if (val > 0) {
    facetChoice = val;
    facetChosen = 1;
  }
  loadMarkers();
}