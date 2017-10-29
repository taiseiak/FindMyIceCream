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

var popup = L.popup()
    .setLatLng([44.044752, -123.081731])
    .setContent("I am a standalone popup.")
    .openOn(map);

var popup = L.popup();

function onMapClick(e) {
    var latlng = e.latlng
    $.getJSON("/_get_addy", {lat: latlng.lat, lng: latlng.lng},
        function(data) {
            var address = data.result;
            console.log("address json" + address.address);
            popup
                .setLatLng(e.latlng)
                .setContent(address.address)
                .openOn(map);
        }
    )

}

map.on('click', onMapClick);