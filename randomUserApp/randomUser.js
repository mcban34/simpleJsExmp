fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(value =>{
    // console.log(value)
     let userYazdir = value.results.map(item =>{
      latitude = item.location.coordinates.latitude;
      longitude = item.location.coordinates.longitude;
      country = item.location.country;
        return `

        <div class="card">
          <img src=${item.picture.large}>
          <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
          <h6>E-mail : ${item.email}</h6>
          <h6>Telefon : ${item.phone}</h6>
        </div>

        `
    })
    document.querySelector(".parent").innerHTML=userYazdir;
    document.body.appendChild(document.querySelector(".parent"))
    var map = L.map('map').setView([latitude, longitude], 2);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([latitude, longitude]).addTo(map)
    .bindPopup(`${country}`)
    .openPopup();
    console.log(latitude,longitude)
    

    
})