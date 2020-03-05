// variable assignment
let restaurants = document.getElementById('shops')



// map import 
//gives map and starts at set coordinates and zoom
let mymap = L.map('myMap').setView([44.815, -73.012], 12)
//specifies the tiles you want to be shown. Theme.
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 50,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap)

//sets marker
let myMarker = L.marker([44.814237, -73.077879]).addTo(mymap)
//gives marker contect on click. can start with message open if given .opnPopup()
myMarker.bindPopup("<b>Hello world!</b><br>I am a popup.")


// the fetch address to access the api with restaurant information
fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants')


// Home sidebar including hte names of all restaurants in the file
function


