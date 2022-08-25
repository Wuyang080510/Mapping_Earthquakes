// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Streets: streets,
    Satellite: satelliteStreets
};

// Create the earthquake layer for our map
let earthquakes = new L.LayerGroup();
// We define an object taht contains the overlays, this overlay will be visible all the time 
// Create a overlay layer that holds the markers
let overlays = {
    Earthquakes: earthquakes
};
// create the map object with a center(San Framcisco) and zoom level.
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom:3,
    layers:[streets]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps, overlays).addTo(map);

// Accessing the toronto neighborhood dataset GeoJSON URL
let Earthquakes_past7days= "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Grabbing our GeoJSON data
d3.json(Earthquakes_past7days).then(function(data) {
    console.log(data);
    // Add a style function that return the style of each earthquakes we plot on
    function styleInfo(feature) {
        return {
            opacity:1,
            fillOpacity:1,
            fillColor: getColor(feature.properties.mag),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }
    // Add a getRadius() function to calculate radius for each earthquake circlemarker
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    }
    // Add a getColor() function to map different colors for earthquakes in different levels
    function getColor(magnitude) {
        if (magnitude > 5) {
            return "#ea2c2c";
        }
        if (magnitude > 4) {
            return "#ea822c";
        }
        if (magnitude > 3) {
            return "#ee9c00";
        }
        if (magnitude > 2) {
            return "#eecc00";
        }
        if (magnitude > 1) {
            return "#d4ee00"
        }
        return "#98ee00";
    }
    // Create a GeoJson layer with the retrieved data
    L.geoJSON(data, {
        // Turn each feature into a circleMarker on the map
        pointToLayer: function(feature, latlng) {
            console.log(feature);
            return L.circleMarker(latlng);
        },
        // Set the style for each marker with the styleInfo function
        style:styleInfo,
        // Add a popup for each circleMarker to display the magnitude and location of the
        // earthquake after the marker has been created and styled
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<b>Magnitude: </b>" + feature.properties.mag + "<br><b>Location: </b>" + feature.properties.place);
        }
    }).addTo(earthquakes);
    // Add earthquake layer to the map
    earthquakes.addTo(map);
});


// // Create a style for the lines
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }
// // Grabbing our GeoJSON data
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     L.geoJSON(data, {
//         style: myStyle,
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3> <hr><h3>Destination: " + 
//             feature.properties.dst + "</h3>");
//         }
//     })
//     .addTo(map);
// });

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

