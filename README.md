# Mapping_Earthquakes
Create an interactive earthquake map with Leaflet.js, JavaScript, D3.json(), API, and HTML.

## Overview
In this module, I created an informative and interactive map to showcase earthquakes around the world. I traversed and retrieved the earthquake data from the U.S. Geological Survey website with JavaScript and the D3 and Leaflet libraries, and plotted the data on Mapbox maps through API requests. 

## Purpose of the Project
- Retrieve data from a GeoJSON file
- Make API requests to a server to host geographical maps
- Populate geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library 
- Add multiple map layers to geographical maps using Leaflet control plugins to add user interface controls
- Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps
- Render maps on a local server

## Project Detail
I used the d3.json() function to make a call to the tectonic plate data from a URL. Then I passed the tectonic plate data to the geoJSON layer, styled the boundaries with colored lines, and added the tectonic plate layer to the map. I also used d3.json() to pull earthquake GeoJSON data from the U.S. Geological Survey website and usgs.gov. L.geoJson() was used to add data layers for each earthquake data set. The geometry data under each earthquake's feature was automatically parsed and added to the map through a GeoJSON layer. I used Circle markers to present the distribution of earthquakes around the world. The diameter of the circle marker reflects the earthquake's magnitude. The higher the earthquake's magnitude, the bigger the marker size. The color of the circle marker also changes as the earthquake's magnitude changes. The higher the earthquake's magnitude, the darker the marker's color. When users click any circle marker, a popup marker will show up with each earthquake's location and magnitude.

![mapwithmarkers](https://github.com/Wuyang080510/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/GitImage/popup_marker.png)

Another feature of this map is that users can toggle between different map styles by hoving the mouse on the layer symbol at the top right corner. There are three options: streets map, satellite map, and dark map. 

![street map](https://github.com/Wuyang080510/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/GitImage/streets_map.png)
Streets Map

![satellite map](https://github.com/Wuyang080510/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/GitImage/satellite_map.png)
Satellite Map

![dark map](https://github.com/Wuyang080510/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/GitImage/dark_map.png)
Dark Map

In addition, users can select the type of data to show on the map. They can view seismic data for the last seven days, the major earthquake data for the previous seven days, tectonic plates data, or all data by selecting different data layer options in the layer control panel.

![layercontrolpanel](https://github.com/Wuyang080510/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/GitImage/layer_control_panel.png)
