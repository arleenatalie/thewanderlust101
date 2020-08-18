if (document.readyState=="loading") {
  document.addEventListener("DOMContentLoaded", ready)
}
else{
  ready()
}

function ready(){
  //slider
  const slider = document.querySelector('.slider');
  M.Slider.init(slider,{
    height: 350,
    transition: 500,
    interval: 5000
  })
  
  //scrollspy
  const ss=document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(ss,{});
  
}

// DESTINATION DATA
const data = [
  {
    id: "artic",
    name: "Artic Circle",
    location: "North Pole",
    country: "Iceland", 
    title: "Artic Circle, Iceland",
    price: "Rp. 10.000.000,-",
    shortDesc: "Amongst the most coveted travel destinations, Iceland is one of the most surreal and magnificent countries in the world. Located close to the Arctic Circle, it offers amazingly dramatic and breath-taking landscapes and exotic natural phenomena.",
    fullDesc: "Amongst the most coveted travel destinations, Iceland is one of the most surreal and magnificent countries in the world. Located close to the Arctic Circle, it offers amazingly dramatic and breath-taking landscapes and exotic natural phenomena. Summer is the best time to visit, owing to the mild temperatures and a plethora of available activities from hiking fjords to playing golf at midnight. However, no time is a bad time to visit this spectacular snow-covered country."
  },

  {
    id: "nusa",
    name: "Nusa Penida",
    location: "Bali",
    country: "Indonesia",
    title: "Nusa Penida, Indonesia",
    price: "Rp. 20.000.000,-",
    shortDesc: "The hidden treasure of Indonesia, Nusa Penida is the most exotic of the three Nusa Islands and is relatively less travelled. Located in the Klungkung district, it is a little off the shores of Bali.",
    fullDesc: "The hidden treasure of Indonesia, Nusa Penida is the most exotic of the three Nusa Islands and is relatively less travelled. Located in the Klungkung district, it is a little off the shores of Bali. During this season, the island is relatively dry and is fairly suited for activities like snorkelling, scuba diving and surfing. Despite these qualities, Nusa Penida is largely left unexplored and is awaiting tourists to explore this exotic destination. Pristine white sand beaches like Atuh and Nusa Penida beach draw tourists from around the world."
  },
  {
    id: "moni",
    name: "Moni",
    location: "Flores",
    country: "Indonesia",
    title: "Moni, Indonesia",
    price: "Rp. 30.000.000,-",
    shortDesc: "Moni is a small village town in the Flores island of Indonesia. It is located on the base of the volcano mountain Kelimutu. The best time to visit Moni is during July- August as it is Indonesia’s dry season to better explore the town.",
    fullDesc: "Moni is a small village town in the Flores island of Indonesia. It is located on the base of the volcano mountain Kelimutu. The best time to visit Moni is during July- August as it is Indonesia’s dry season to better explore the town. The Rasta community of the town are very friendly with the travellers and often invite them for small communal music performances."
  },
  {
    id: "colloseum",
    name: "Colloseum",
    location: "Rome",
    country: "Italy",
    title: "Colloseum, Italy",
    price: "Rp. 40.000.000,-",
    shortDesc: "This was originally called the Flavian Amphitheatre and was mostly used as public entertainment arena. The Colosseum is one of the most famous attractions in Rome and is where most gladiatorial fights took place.",
    fullDesc: "This was originally called the Flavian Amphitheatre and was mostly used as public entertainment arena. The Colosseum is one of the most famous attractions in Rome and is where most gladiatorial fights took place. Today, actors in gladiator clothes stand outside the Colosseum, where you can take pictures with them (for a price!) The Colosseum is a testament to the ingenuity of the builders, having stood the test of time. While parts have been damaged, the Colosseum still remains standing in most of its original glory today. It is advisable that you buy your tickets in advance to skip the ticketing queue, which can be quite the time saver!"
  },
  {
    id: "canyon",
    name: "The Grand Canyon",
    location: "Arizona",
    country: "United States",
    title: "The Grand Canyon, United States",
    price: "Rp. 50.000.000",
    shortDesc: "Yellowstone's Grand Canyon is one of the most iconic sites in the region, providing several stunning vistas as you go along. This almost 40 km long canyon is a large and the most famous canyon in Yellowstone.",
    fullDesc: "Yellowstone's Grand Canyon is one of the most iconic sites in the region, providing several stunning vistas as you go along. This almost 40 km long canyon is a large and the most famous canyon in Yellowstone. It is hugely popular among visitors due to its scenic views of the Lower and Upper falls, as well as the fascinating pink and yellow coloured rocks. There are several viewpoints and points of interest along the length of the canyon. The canyon's beautiful shades of colours are an iconic part of Yellowstone. The mineral stains due to the activities of water have given the rocks of the canyon such a pleasant tint of colours, it is truly a sight to behold."
  }
];

//get element
const showCard = document.getElementById("cardrow");
const showModal = document.getElementById("modalBox");
const input = document.getElementById("searchbox");
const dropdown = document.getElementById("selectCountry");

//show data
const displaycard = destination => {
  let listCard = destination.map(items => {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card">
        <div class="card-image">
          <img src="destinasi/${items.id}.jpg">
          <span class="card-title">${items.name}, ${items.country}</span>
        </div>
        <div class="card-content">
          <p>${items.shortDesc}</p>
        </div>
        <div class="card-footer center">
          <div class="price">${items.price}</div>                            
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${items.id}">See More</button>
          <button class="btn-small waves-effect waves-light" id="wishlistbutton"> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
    `;
  });
  // append element from class "row" then join with empty string
  showCard.innerHTML = listCard.join("");
}
// load data from object
const loadData = () => {
  displaycard(data);
};
// call function LoadData()
loadData();


//Modal Box
const displayModal = modal => {
  let modalBox = modal.map(items => {
    return `
    <div class="modal fade " id="${items.id}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modalbox">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>${items.name}, ${items.country}</b></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="destinasi/${items.id}.jpg" class="imgmodal center">
                    <h5><b>Location: ${items.location}, ${items.country}</b></h5>
                    <p>${items.fullDesc}</p>
                </div>
                <div class="modal-footer">
                    <p>Total Expense: </p><p class="left price">${items.price}</p>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="wishlistbutton"> Add to Wishlist</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });
  showModal.innerHTML = modalBox.join("");
}
//load and call modal
const loadModal = () => {
  displayModal(data);
};
// call modal
loadModal();


// Search from searchbox
input.addEventListener("keyup", e => {
  // get value from search
  const searchValue = e.target.value;
  const filterSearch = searchValue.toUpperCase();

  const newData = data.filter(item => {
    return (
      item.title.toUpperCase().includes(filterSearch)
    );
  });
  displaycard(newData);
});

// Search from dropdown
dropdown.addEventListener("change",e => {
  const dropdownValue = e.target.value;
  const filterChange = data.filter(item => {
    return item.country.includes(dropdownValue);
  });
  displaycard(filterChange);
});

//Update Total Price
document.addEventListener("click", e => {
  // check click by button with id addWishlist
  if (e.target.id === "wishlistbutton") {
    var totalVal = document.getElementsByClassName("total")[0].value
    var total = parseFloat(totalVal.replace("Total: Rp. ",""))

    var buttonAdd = e.target
    var wishlist = buttonAdd.parentElement
    var price = wishlist.getElementsByClassName("price")[0].innerText
    var priceNum = parseFloat(price.replace("Rp. ",""))
    var updateTotal = total + priceNum;
    document.getElementsByClassName("total")[0].value = "Total: Rp. " + updateTotal + ".000.000,-";
  };
});