// variable assignment
let restaurants = document.getElementById('shops')



// map import 
//gives map and starts at set coordinates and zoom
let mymap = L.map('myMap').setView([44.47655925, -73.21435285244789], 16)
//specifies the tiles you want to be shown. Theme.
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 50,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap)



// Home sidebar including hte names of all restaurants in the file----------------------------
// Turn thpse names into links to the restaurants featured page
window.fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants')
    .then(response => response.json()) /* get date */
    .then(json => {
        function findElement() {
            // find where the list can go
            const target = document.getElementById('sideNav')
            return target
        }
        const target = findElement();

        function createParent() {
            //  create tje parent of the list items 
            const restaurantList = document.createElement('ul')
            return restaurantList
        }
        const restaurantList = createParent()

        function makeListItems() {

            // for every post in the JSON 
            // make a list item
            const posts = json.map((postData) => {
                let id = postData.id 
                const listItem = document.createElement('li')
                const link = document.createElement('a')
                link.setAttribute('href', '/shop/' + id)
                link.textContent = ` ${postData.name} `
                listItem.appendChild(link)
                return listItem;
            }); return posts
        }
        const posts = makeListItems();

        function addChildrenToParent() {
            // add each ost listitem to the parent ol
            posts.forEach((post) => {
                restaurantList.appendChild(post)


            });
        }
        addChildrenToParent()

        function addListToBody() {
            // add the parent list to the body of the page
            target.appendChild(restaurantList)
            return undefined;
        }
        addListToBody()
    });

//-----------------------Dropping pins for all the resturants and also their basic info -------------------
function getLatLong(address, myInfo) {

    let latLon = {}
    fetch(`https://nominatim.openstreetmap.org/search/?q=${address}&format=json`)
        .then((data) => {
            return data.json()
        })
        .then((locInfo) => {
            console.log(locInfo[0])
            let info = locInfo[0]
            let lat = info.lat
            let lon = info.lon
            console.log(lat)
            console.log(lon)
            latLon.lat = lat
            latLon.lon = lon
            L.marker([lat, lon]).addTo(mymap).bindPopup(myInfo)
        })

}
// example or ^ working
getLatLong('149 S Champlain St. Burlington, VT 05401')
// assigning addresses and apssing through getLatLong funciton
function placemarkers() {
    window.fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants')
        .then(response => response.json()) /* get date */
        .then(json => {
            function makeMarker() {
                // for every shop in the JSON 
                // make a marker
                const posts = json.map((postData) => {
                    const myInfo = postData.name
                    const mark = getLatLong(postData.address, myInfo)
                    return mark
                })
                return posts
            }
            const posts = makeMarker();
            function addAdressToFunction() {
                // add each ost listitem to the parent ol
                posts.forEach((address) => {
                    getLatLong(address)


                });
            } addAdressToFunction()
        })
}

placemarkers()



