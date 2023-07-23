let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
      },
    ],
  };


for(let i of products.data){
    //kart oluşturma
    let card = document.createElement("div");
    //kartın kategorisi olmalı ve başlangıçta gizli olmalı
    card.classList.add("card", i.category, "hide");
    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //ürünün adı
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //ürünün fiyatı
    let price = document.createElement("h6");
    price.innerText = "₺" + i.price;
    container.appendChild(price);

    //card ın içine containerı yerleştirme
    card.appendChild(container);
    //html kodlarımızdaki products divinin içine card ' ı yerleştirme
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //değerin innerText e eşit olup olmadığının kontrolü
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

//select all cards
let elements = document.querySelectorAll(".card");
//tüm kartlarda döngü
elements.forEach((element) =>{
    //all butonuna tıklandığında tüm kartları görüntüle
    if (value == "all") {
        element.classList.remove("hide");
    } else{
        //öğenin kategori sınıfı içerip içermediğinin kontrolü
        if(element.classList.contains(value)) {
        // kategoriye göre görüntüleme
        element.classList.remove("hide");
        } else{
            //diğer öğeleri gizle
            element.classList.add("hide");
        }
    }
} );
}

//arama butonu click
document.getElementById("search").addEventListener("click", () => {
    //başlatmalar
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //tüm elemanlar arasında döngü
    elements.forEach((element, index) => {
      //metnin arama değeri içerip içermeidğin kontrolü
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //eşleşen cardları göster
        cards[index].classList.remove("hide");
      } else {
        //diğerlerini gizle
        cards[index].classList.add("hide");
      }
    });
  });
  //başlangıçta tüm ürünleri göster
  window.onload = () => {
    filterProduct("all");
  };
















