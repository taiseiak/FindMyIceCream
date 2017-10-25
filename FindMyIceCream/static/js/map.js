/*
Javascript file for map
*/

var map = L.map('map').setView([44.044752, -123.081731], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGFpc2VpIiwiYSI6ImNqOTY1MjZkNjAwdDczNGxmb2wxZ2p4anIifQ.GTOUmUftywRhBLnYsA8F2w'
}).addTo(map);

// Get position of client machine from IP
var pos = L.GeoIP.getPosition();

// Center map to position
L.GeoIP.centerMapOnPosition(map, 12);

/*
// Zoom map view to detected location
map.locate({setView: true, maxZoom: 16});

// Alert when the location cannot be found
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
*/