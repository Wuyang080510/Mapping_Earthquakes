// Add console.log to check to see if our code is working.
console.log("working");

// create the map object with a center and zoom level.
let map=L.map("mapid").setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "blue",
    dashArray:6,
    weight: 4,
    opacity: 0.5
}).addTo(map);
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

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);