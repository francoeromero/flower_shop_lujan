let products = {
  data: [
    {
      productName: "Ramo de Rosas azules Nacionales",
      category: "Rosas",
      price: "1000",
      image: "./img/rosa1.jpg",
    },
    {
      productName: "Ramo de Rosas Rojas Nacionales",
      category: "Rosas",
      price: "1000",
      image: "./img/rosa2.jpg",
    },
    {
      productName: "Ramo de Rosas Amarillas Nacionales",
      category: "Rosas",
      price: "1000",
      image: "./img/rosa3.jpg",
    },
    {
      productName: "Ramo de Rosas Rosadas Nacionales",
      category: "Rosas",
      price: "1000",
      image: "./img/rosa4.jpg",
    },
    {
      productName: "Ramo de Rosas Champagne Nacionales",
      category: "Ramo",
      price: "129",
      image: "./img/rosa5.jpg",
    },
    {
      productName: "Lilium",
      category: "Plantas",
      price: "1000",
      image: "./img/plantas1.jpg",
    },
    {
      productName: "Violeta de los Alpes",
      category: "Plantas",
      price: "1000",
      image: "./img/plantas2.jpg",
    },
    {
      productName: "Santa Rita",
      category: "Plantas",
      price: "1000",
      image: "./img/plantas3.jpg",
    },
    {
      productName: "Jazmin Kimura",
      category: "Plantas",
      price: "1000",
      image: "./img/plantas4.jpg",
    },
    {
      productName: "Erica",
      category: "Plantas",
      price: "49",
      image: "./img/plantas5.jpg",
    },
    {
      productName: "Palo de Agua",
      category: "Plantas",
      price: "49",
      image: "./img/plantas6.jpg",
    },
    {
      productName: "Aphelandra",
      category: "Plantas",
      price: "49",
      image: "./img/plantas7.jpg",
    },
    {
      productName: "Potus Elegante",
      category: "Plantas",
      price: "49",
      image: "./img/plantas8.jpg",
    },
    {
      productName: "Palo de Agua",
      category: "Plantas",
      price: "49",
      image: "./img/plantas9.jpg",
    },
    {
      productName: "Cruz de claveles",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias1.jpg",
    },
    {
      productName: "Bouquette Clasico",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias2.jpg",
    },
    {
      productName: "Bouquette Especial de Rosas Rojas",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias3.jpg",
    },
    {
      productName: "Corona Clásica",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias4.jpg",
    },
    {
      productName: "Corona Elegante",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias5.jpg",
    },
    {
      productName: "Corona Funebre Premium",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias6.jpg",
    },
    {
      productName: "Corazon de Rosas",
      category: "Condolencias",
      price: "49",
      image: "./img/condolencias7.jpg",
    },
    {
      productName: "Tulipanes",
      category: "Flores",
      price: "49",
      image: "./img/flores1.jpg",
    },
    {
      productName: "Ramo de Margaritas Petit",
      category: "Flores",
      price: "49",
      image: "./img/flores2.jpg",
    },
    {
      productName: "Ramo de Aleli Perfumados(6 varas)",
      category: "Flores",
      price: "49",
      image: "./img/flores3.jpg",
    },
    {
      productName: "Ramo de Fresias Perfumadas(25 unidades)",
      category: "Flores",
      price: "49",
      image: "./img/flores4.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  card.style.width = "20rem";
  card.style.height = "23rem";
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  image.style.borderRadius = "10px";
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.style.textAlign = 'center';
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.style.textAlign = 'center';
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "todos") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Function to handle Enter key press
document.getElementById("search-input").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // 13 is the key code for "Enter"
    event.preventDefault(); // Prevent the default behavior of the Enter key (submitting the form)
    document.getElementById("search").click(); // Simulate a click on the search button
  }
});
document.getElementById("search-input").style.width = "15rem"

//Initially display all products
window.onload = () => {
  filterProduct("todos");
};


// phone
let phone = document.querySelector('.bi-telephone-fill');

phone.addEventListener('mouseover', function(){
  this.classList.add('animation');
});

phone.addEventListener('mouseout', function(){
  this.classList.remove('animation');
})