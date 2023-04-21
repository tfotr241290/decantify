let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.content');
let listCard = document.querySelector('.listCard');
let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total');
let body = document.querySelector('body');
 


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        "image": "https://ik.imagekit.io/tfotr241290/invictus2.jpg?updatedAt=1680990031460",
        "brand": "Paco Rabanne",
        "perfume": "Invictus Platinum",
        "quantityy": "3 mililitros",
        "info": "Invictus Platinum de Paco Rabanne es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Esta fragrancia es nueva. Invictus Platinum se lanzó en 2022. Las Notas de Salida son toronja (pomelo) y absenta; las Notas de Corazón son menta y lavanda; las Notas de Fondo son ciprés y pachulí.",
        "price": 160,
        "link": "invictus_platinum"
      },
      {
        "image": "https://ik.imagekit.io/tfotr241290/elixir2.jpg?updatedAt=1680990028300",
        "brand": "Dior",
        "perfume": "Sauvage Elixir",
        "quantityy": "3 mililitros",
        "info": "Sauvage Elixir de Dior es una fragancia de la familia olfativa Aromática para Hombres. Esta fragrancia es nueva. Sauvage Elixir se lanzó en 2021. La Nariz detrás de esta fragrancia es Francois Demachy. Las Notas de Salida son nuez moscada, canela, cardamomo y toronja (pomelo); la Nota de Corazón es lavanda; las Notas de Fondo son regaliz, sándalo, ámbar, pachulí y vetiver de Haití.",
        "price": 300,
        "link": "sauvage_elixir"
      },
      {
          "image": "https://ik.imagekit.io/tfotr241290/light_blue2.jpg?updatedAt=1680990030941",
          "brand": "Dolce&Gabbana",
          "perfume": "Light Blue Pour Homme",
          "quantityy": "3 mililitros",
          "info": "Light Blue pour Homme de Dolce&Gabbana es una fragancia de la familia olfativa Cítrica Aromática para Hombres. Light Blue pour Homme se lanzó en 2007. Las Notas de Salida son toronja (pomelo), bergamota, mandarina siciliana y enebro de Virginia; las Notas de Corazón son pimienta, romero y palo de rosa de Brasil; las Notas de Fondo son almizcle, incienso y musgo de roble. Este perfume es el ganador del premio FiFi Award Fragrance Of The Year Men`s Luxe 2008.",
          "price": 85,
          "link": "lightblue_pourhomme"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/valentino2.jpg?updatedAt=1680990030945",
          "brand": "Valentino",
          "perfume": "Valentino Uomo Intense",
          "quantityy": "3 mililitros",
          "info": "Valentino Uomo Intense de Valentino es una fragancia de la familia olfativa Cuero para Hombres. Valentino Uomo Intense se lanzó en 2016. Las Notas de Salida son mandarina y esclarea; las Notas de Corazón son iris y haba tonka; las Notas de Fondo son vainilla y cuero.",
          "price": 170,
          "link": "valentino_intense"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/gentleman2.jpg?updatedAt=1681074620918",
          "brand": "Givenchy",
          "perfume": "Gentleman EDT",
          "quantityy": "3 mililitros",
          "info": "Gentleman (2017) de Givenchy es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Gentleman (2017) se lanzó en 2017. Gentleman (2017) fue creada por Olivier Cresp y Nathalie Lorson. Las Notas de Salida son pera, cardamomo y piña; las Notas de Corazón son iris, lavanda y geranio; las Notas de Fondo son cuero, vaina de vainilla negra y pachulí.",
          "price": 130,
          "link": "gentleman_edt"
        }
]

let listCards = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add("sections")
        newDiv.innerHTML = `
            <img src="${value.image} class="fragances"">
            <h2 class="titles">${value.perfume}</h2>
            <h3 class="brands">${value.brand}</h3>
            <p class="prices">$${value.price.toLocaleString()} mxn</p>
            <p class="quantities">${value.quantityy}</p>
            <button onclick="addToCard(${key})" class="verMas">Agregar al carrito</button>
            <a href="./${value.link}.html"><button type="submit" class="verMas">Ver</button></a>

        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();   
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.perfume}</div>
                <div>${value.price.toLocaleString()}</div>
                
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
