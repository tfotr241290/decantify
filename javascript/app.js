let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.content');
let listCard = document.querySelector('.listCard');
let quantityy = document.querySelector('.quantityy');
let total = document.querySelector('.total');
let body = document.querySelector('body');
let checkoutSection = document.querySelector('.mainCheckout');

// JavaScript code to toggle the mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');

hamburgerBtn.addEventListener('click', function() {
  mainNav.classList.toggle('showMenu');
});


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        "image": "https://ik.imagekit.io/tfotr241290/invictus_p.jpg?updatedAt=1686158995171",
        "brand": "Paco Rabanne",
        "perfume": "Invictus Platinum",
        "quantity": "Precio por mililitro",
        "info": "Invictus Platinum de Paco Rabanne es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Esta fragrancia es nueva. Invictus Platinum se lanzó en 2022. Las Notas de Salida son toronja (pomelo) y absenta; las Notas de Corazón son menta y lavanda; las Notas de Fondo son ciprés y pachulí.",
        "price": "45",
        "link": "invictus_platinum"
      },
      {
        "image": "https://ik.imagekit.io/tfotr241290/elixirs_Fsi1LYKAoT?updatedAt=1686160956439",
        "brand": "Dior",
        "perfume": "Sauvage Elixir",
        "quantity": "Precio por mililitro",
        "info": "Sauvage Elixir de Dior es una fragancia de la familia olfativa Aromática para Hombres. Esta fragrancia es nueva. Sauvage Elixir se lanzó en 2021. La Nariz detrás de esta fragrancia es Francois Demachy. Las Notas de Salida son nuez moscada, canela, cardamomo y toronja (pomelo); la Nota de Corazón es lavanda; las Notas de Fondo son regaliz, sándalo, ámbar, pachulí y vetiver de Haití.",
        "price": "105",
        "link": "sauvage_elixir"
      },
      {
          "image": "https://ik.imagekit.io/tfotr241290/lightblue_original.jpg?updatedAt=1686160186713",
          "brand": "Dolce&Gabbana",
          "perfume": "Light Blue Pour Homme",
          "quantity": "Precio por mililitro",
          "info": "Light Blue pour Homme de Dolce&Gabbana es una fragancia de la familia olfativa Cítrica Aromática para Hombres. Light Blue pour Homme se lanzó en 2007. Las Notas de Salida son toronja (pomelo), bergamota, mandarina siciliana y enebro de Virginia; las Notas de Corazón son pimienta, romero y palo de rosa de Brasil; las Notas de Fondo son almizcle, incienso y musgo de roble. Este perfume es el ganador del premio FiFi Award Fragrance Of The Year Men`s Luxe 2008.",
          "price": "35",
          "link": "lightblue_pourhomme"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/intense.jpg?updatedAt=1686161200593",
          "brand": "Valentino",
          "perfume": "Valentino Uomo Intense",
          "quantity": "Precio por mililitro",
          "info": "Valentino Uomo Intense de Valentino es una fragancia de la familia olfativa Cuero para Hombres. Valentino Uomo Intense se lanzó en 2016. Las Notas de Salida son mandarina y esclarea; las Notas de Corazón son iris y haba tonka; las Notas de Fondo son vainilla y cuero.",
          "price": "55",
          "link": "valentino_intense"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/gentleman_edt.jpg?updatedAt=1686161418511",
          "brand": "Givenchy",
          "perfume": "Gentleman EDT",
          "quantity": "Precio por mililitro",
          "info": "Gentleman (2017) de Givenchy es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Gentleman (2017) se lanzó en 2017. Gentleman (2017) fue creada por Olivier Cresp y Nathalie Lorson. Las Notas de Salida son pera, cardamomo y piña; las Notas de Corazón son iris, lavanda y geranio; las Notas de Fondo son cuero, vaina de vainilla negra y pachulí.",
          "price": "40",
          "link": "gentleman_edt"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/born_in_roma.jpg?updatedAt=1686161403174",
          "brand": "Valentino",
          "perfume": "Valentino Uomo Born In Roma",
          "quantity": "Precio por mililitro",
          "info": "Valentino Uomo Born in Roma de Valentino es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Valentino Uomo Born in Roma se lanzó en 2019. Valentino Uomo Born in Roma fue creada por Antoine Maisondieu y Guillaume Flavigny. Las Notas de Salida son Notas minerales, hojas de violeta y sal; las Notas de Corazón son jengibre y salvia; las Notas de Fondo son notas amaderadas y vetiver.",
          "price": "45",
          "link": "valentino_roma"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/bleu.jpg?updatedAt=1686158995241",
          "brand": "CHANEL",
          "perfume": "Bleu de Chanel Eau de Parfum",
          "quantity": "Precio por mililitro",
          "info": "Bleu de Chanel Eau de Parfum de Chanel es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Bleu de Chanel Eau de Parfum se lanzó en 2014. La Nariz detrás de esta fragrancia es Jacques Polge. Las Notas de Salida son toronja (pomelo), limón (lima ácida), menta, pimienta rosa, bergamota, aldehídos y cilantro; las Notas de Corazón son jengibre, nuez moscada, jazmín y melón; las Notas de Fondo son incienso, ámbar, cedro, sándalo, pachulí, Amberwood y ládano.",
          "price": "55",
          "link": "bleu_chanel"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/the_most_wanted.jpg?updatedAt=1686161406695",
          "brand": "Azzaro",
          "perfume": "The Most Wanted",
          "quantity": "Precio por mililitro",
          "info": "The Most Wanted de Azzaro es una fragancia de la familia olfativa Ámbar Especiada para Hombres. The Most Wanted se lanzó en 2021. La Nota de Salida es cardamomo; la Nota de Corazón es tófe; la Nota de Fondo es Amberwood.",
          "price": "45",
          "link": "most_wanted"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/summer_vibes.jpg?updatedAt=1686158916433",
          "brand": "Dolce&Gabbana",
          "perfume": "Light Blue Summer Vibes",
          "quantity": "Precio por mililitro",
          "info": "Light Blue Pour Homme Summer Vibes de Dolce&Gabbana es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Esta fragrancia es nueva. Light Blue Pour Homme Summer Vibes se lanzó en 2023. La Nariz detrás de esta fragrancia es Alberto Morillas. La Nota de Salida es limón siciliano (lima siciliana); la Nota de Corazón es ciprés; la Nota de Fondo es Amberwood.",
          "price": "40",
          "link": "summer_vibes"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/orange_blossom.jpg?updatedAt=1686161393592",
          "brand": "Jo Malone",
          "perfume": "Orange Blossom",
          "quantity": "Precio por mililitro",
          "info": "Orange Blossom de Jo Malone London es una fragancia de la familia olfativa Floral para Hombres y Mujeres. Orange Blossom se lanzó en 2003. La Nariz detrás de esta fragrancia es Jean Claude Delville. La Nota de Salida es flor de tangerina; las Notas de Corazón son flor de azahar del naranjo, lila y nenúfar (lirio de agua); las Notas de Fondo son iris y vetiver.",
          "price": "55",
          "link": "orange_blossom"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/amber%20oud.webp?updatedAt=1690776430965",
          "brand": "Al Haramain",
          "perfume": "Amber Oud Gold Edition",
          "quantity": "Precio por mililitro",
          "info": "Amber Oud Gold Edition de Al Haramain Perfumes es una fragancia de la familia olfativa Ámbar Vainilla para Hombres y Mujeres. Amber Oud Gold Edition se lanzó en 2018. Las Notas de Salida son bergamota y notas verdes; las Notas de Corazón son notas dulces, melón, piña y ámbar; las Notas de Fondo son almizcle, vainilla y notas amaderadas.",
          "price": "30",
          "link": "amber_oud"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/icon%20racing.jpg?updatedAt=1690780714270",
          "brand": "Alfred Dunhill",
          "perfume": "Icon Racing",
          "quantity": "Precio por mililitro",
          "info": "Icon Racing de Alfred Dunhill es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Icon Racing se lanzó en 2017. La Nariz detrás de esta fragrancia es Laurent Le Guernec. Las Notas de Salida son toronja (pomelo), cardamomo y bergamota; las Notas de Corazón son flor de azahar del naranjo, lavanda y pimienta; las Notas de Fondo son almizcle, madera de gaiac y vetiver.",
          "price": "40",
          "link": "icon_racing"
        },
        {
          "image": "https://ik.imagekit.io/tfotr241290/rochas%20man.jpg?updatedAt=1690781812229",
          "brand": "Rochas Paris",
          "perfume": "Rochas Man",
          "quantity": "Precio por mililitro",
          "info": "Rochas Man de Rochas es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Rochas Man se lanzó en 1999. La Nariz detrás de esta fragrancia es Maurice Roucel. Las Notas de Salida son lavanda y bergamota; las Notas de Corazón son capuchino, frambuesa, jazmín, cedro de Virginia y lirio de los valles (muguete); las Notas de Fondo son vainilla, ámbar, sándalo y pachulí.",
          "price": "25",
          "link": "rochas_man"
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
            <p class="quantities">${value.quantity}</p>
            <p class="prices">$${value.price.toLocaleString()} mxn</p>
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
        listCards[key].quantityy = 1;
    }
    reloadCard();   
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) =>{
        totalPrice = parseInt(totalPrice) + parseInt(value.price);
        console.log(totalPrice);
        count = count + value.quantityy;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.perfume}</div>
                <div>${value.price.toLocaleString()}</div>
                
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantityy - 1})">-</button>
                    <div class="count">${value.quantityy}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantityy + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);

        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantityy.innerText = count;
    localStorage.setItem("listCards", JSON.stringify(listCards));
    
}


function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantityy = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
