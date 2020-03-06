// path variables
let path = window.location.pathname
let pathArray = path.split('/')
let id = pathArray.pop()
console.log(id)
//  funcitoning variables
let title = document.getElementById('featured')
title.textContent = id


// -----------enter name notes number address hours into sidebar-----
window.fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants/' + id)
    .then(response => response.json()) /* get date */
    .then(json => {
        let name = document.getElementById('name')
        let notes = document.getElementById('notes')
        let number = document.getElementById('number')
        let address = document.getElementById('address')
        let hours = document.getElementById('hours')
        name.textContent = json.name
        notes.textContent = json.notes.pop(0)
        number.textContent = json.phone
        address.textContent = json.address
        hours.textContent = json.hours
        dropPin(address.textContent, name.textContent)

    }
    
    )
   
    // -------------------drop pin and focus on location -----------------------------
  function dropPin(address, name){  
let latLon = {}
    fetch(`https://nominatim.openstreetmap.org/search/?q=${address}&format=json`)
.then((data) => {
    return data.json()
})
.then((locInfo) => {
    let info = locInfo[0]
    console.log(locInfo[0])
    let lat = info.lat
    let lon = info.lon
    latLon.lat = lat
    latLon.lon = lon
    let mymap = L.map('myMap').setView([lat, lon], 18)
    var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 50,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    }).addTo(mymap)
    L.marker([lat, lon]).addTo(mymap).bindPopup(name)
    
})

  }
  
//   ----------------------commenting ------------------------------
