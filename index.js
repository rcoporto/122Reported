// Import the leaflet package
var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([14.58025,120.98475], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>;',
	zoomAnimation:true,
    maxZoom: 30,
    minZoom: 19
}).addTo(map);

// Adds a popup marker to the webmap for GGL address
L.circleMarker([14.58025,120.98475]).addTo(map);

//initialize first floor map
fetch('./map/casfloor1.geojson').then(response =>  response.json()).then(data => {
    L.geoJSON(data, {
        style:{color: 'cadetblue',weight: 1,opacity: 1},
    }).addTo(map);
    map.fitBounds(L.geoJSON(data).getBounds());
}).catch(error => console.error('out of service.. ~_~  @_@', error));


document.getElementById('1').addEventListener('click', () => {
    map.eachLayer(function (layer) {
        if (!!layer.toGeoJSON) { map.removeLayer(layer); }
    });
    fetch('./map/casfloor1.geojson').then(response => response.json()).then(data => {
        L.geoJSON(data, {
            style: { color: 'cadetblue', weight: 1, opacity: 1 },
        }).addTo(map);
        map.fitBounds(L.geoJSON(data).getBounds());
    }).catch(error => console.error('out of service.. ~_~  @_@', error));

});

document.getElementById('2').addEventListener('click', () => {
    map.eachLayer(function (layer) {
        if (!!layer.toGeoJSON) { map.removeLayer(layer); }
    });
    fetch('./map/casfloor2.geojson').then(response => response.json()).then(data => {
        L.geoJSON(data, {
            style: { color: 'cadetblue', weight: 1, opacity: 1 },
        }).addTo(map);
        map.fitBounds(L.geoJSON(data).getBounds());
    }).catch(error => console.error('out of service.. ~_~  @_@', error));

});

document.getElementById('3').addEventListener('click', () => {
    map.eachLayer(function (layer) {
        if (!!layer.toGeoJSON) { map.removeLayer(layer); }
    });
    fetch('./map/casfloor3.2.geojson').then(response => response.json()).then(data => {
        L.geoJSON(data, {
            style: { color: 'cadetblue', weight: 1, opacity: 1 },
        }).addTo(map);
        map.fitBounds(L.geoJSON(data).getBounds());
    }).catch(error => console.error('out of service.. ~_~  @_@', error));

});