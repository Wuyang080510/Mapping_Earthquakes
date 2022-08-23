// Add console.log to check to see if our code is working.
console.log("working");

// create the map object with a center and zoom level.
let map=L.map("mapid").setView([39.8283, -98.5795], 4);

// Get data from cities.js
let cityData = cities;
// Loop through each city and add marker
// cityData.forEach(city => {
// console.log(city);
// L.marker(city.location).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population" + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });
// Add a circle market to the map for 5 cities
cityData.forEach(city => {
    console.log(city);
    L.circleMarker(city.location, {
        radius:city.population/200000,
        color:"darkgreen",
        fillColor: "green",
    }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});
// var circle= L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "#f5f38f"
//     // fillOpacity: 0.3
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);