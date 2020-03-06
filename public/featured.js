let path = window.location.pathname
let pathArray = path.split('/')
let id = pathArray.pop()
console.log(id)


alert('js connected')

// map import 
//gives map and starts at set coordinates and zoom
let mymap = L.map('myMap').setView([44.47655925, -73.21435285244789], 16)
//specifies the tiles you want to be shown. Theme.
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 50,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap)
