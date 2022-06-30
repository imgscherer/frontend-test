const url = "http://127.0.0.1:3000/"

var randomUrl = ({number}) => "http://127.0.0.1:3000/random/${number}";

async function getAllBeers() {
  const response = await axios.get(url)
  let data = response.data
  //console.log(data)

  var allBeers = data.map(function(beer){
    return `<tr>
      <td>${beer.name}</td>
      <td>${beer.category}</td>
      <td>${beer.abv}</td>
      <td>${beer.ibu}</td>
      <td>${beer.description}</td>
      <td>${beer.website}</td>
      <td>${beer.address}</td>
      <td>${beer.city}</td>
      <td>${beer.state}</td>
      <td>${beer.coutry}</td>
      <td>${beer.coordinates}</td>
    </tr>`;
  });

  document.querySelector("#dataTable tbody").innerHTML = allBeers.join("");

}

async function getRandomBeers() {
  const response = await axios.get(randomUrl({number: numberOfBeers}))
  let data = response.data
  //console.log(data)

  var allBeers = data.slice(0, numberOfBeers).map(function(beer){
    return `<tr>
      <td>${beer.name}</td>
      <td>${beer.category}</td>
      <td>${beer.abv}</td>
      <td>${beer.ibu}</td>
      <td>${beer.description}</td>
      <td>${beer.website}</td>
      <td>${beer.address}</td>
      <td>${beer.city}</td>
      <td>${beer.state}</td>
      <td>${beer.coutry}</td>
      <td>${beer.coordinates}</td>
    </tr>`;
  });

  document.querySelector("#dataTable tbody").innerHTML = allBeers.join("");

}

getAllBeers();
getRandomBeers()

