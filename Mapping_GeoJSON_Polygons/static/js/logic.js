// Add console.log to check to see if our code is working.
console.log("working");

// create the map object with a center(San Framcisco) and zoom level.
// let map=L.map("mapid").setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Light: light,
    Dark: dark
};

// create the map object with a center(San Framcisco) and zoom level.
let map = L.map("mapid", {
    center: [30, 30],
    zoom:2,
    layers:[light]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// // Then we add our tile layer to the map.
// streets.addTo(map);

//Accessing the toronto airline dataset URL
let torontoData = "https://raw.githubusercontent.com/Wuyang080510/Mapping_Earthquakes/main/torontoRoutes.json"
// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/Wuyang080510/Mapping_Earthquakes/main/majorAirports.json";

// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}
// Grabbing our GeoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3> <hr><h3>Destination: " + 
            feature.properties.dst + "</h3>");
        }
    })
    .addTo(map);
});

// // Grabbing out GeoJson data
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Create a GeoJSON layer with the retrieved data
//     L.geoJSON(data, {
//         pointToLayer: function(feature, latlng) {
//             console.log(feature);
//             return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2>")
//         }
// }).addTo(map);
// })
// Add GeoJSON object to the map through GeoJSON layer L.geoJSON()
// L.geoJSON(sanFranAirport, {
//     // we turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//     }
// }).addTo(map);

// // Grab GeoJSON data and add popup marker with onEachFeature callback function
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport code:" + feature.properties.faa + "</h2><hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//     }
// }).addTo(map);

// Coordinates for each point to be used in the line
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];
// // Create a polyline using the line coordinates and make the line red
// L.polyline(line, {
//     color: "blue",
//     dashArray:6,
//     weight: 4,
//     opacity: 0.5
// }).addTo(map);

// Get data from cities.js
// let cityData = cities;
// Loop through each city and add marker
// cityData.forEach(city => {
// console.log(city);
// L.marker(city.location).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population" + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });
// Add a circle market to the map for 5 cities
// cityData.forEach(city => {
//     console.log(city);
//     L.circleMarker(city.location, {
//         radius:city.population/200000,
//         color:"darkgreen",
//         fillColor: "green",
//     }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// var circle= L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "#f5f38f"
//     // fillOpacity: 0.3
// }).addTo(map);

