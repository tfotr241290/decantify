
const urlData = "./json/data.json";

let content = document.querySelector(".content");


async function getData(){
    const response = await fetch(urlData);
    const data = await response.json();
    console.log(data);
    
    const perfumeInfo = data.fragances;
    perfumeInfo.forEach(displayPerfumes);
};

function displayPerfumes(perfumeInfo){
    let perfume = document.createElement('img');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let linkToPage = document.createElement('a');
    let botonVer = document.createElement('button');    
    perfume.setAttribute('src', perfumeInfo.image);
    perfume.setAttribute('alt', perfumeInfo.perfume);
    botonVer.setAttribute('type', "submit");
    linkToPage.setAttribute('href',`./${perfumeInfo.link}.html`)

    h2.textContent = `${perfumeInfo.perfume}`;
    h3.textContent = `${perfumeInfo.brand}`;
    p1.textContent = `Precio: $ ${perfumeInfo.price} MXN`;
    p2.textContent = `Cantidad: ${perfumeInfo.quantity}`;
    p3.textContent = `${perfumeInfo.info}`;
    botonVer.textContent = "Ver más";

    let section = document.createElement("section");
    section.classList.add("imageSection");

    linkToPage.appendChild(botonVer);

    section.appendChild(perfume).classList.add("fragances");
    section.appendChild(h2).classList.add("titles");
    section.appendChild(h3).classList.add("brands");
    section.appendChild(p1).classList.add("prices");
    section.appendChild(p2).classList.add("quantities");
    section.appendChild(linkToPage).classList.add("verMas");
    

    content.appendChild(section);
};

getData();



