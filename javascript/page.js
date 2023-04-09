let invictusP = ` <div class="single">
                    <img src="https://ik.imagekit.io/tfotr241290/invictus2.jpg?updatedAt=1680990031460" alt="Invictus Platinum">
                    <h2>Invictus Platinum</h2>
                    <h3>Paco Rabanne</h3><br>
                    <p id="infoSection">Invictus Platinum de Paco Rabanne es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Esta fragrancia es nueva. Invictus Platinum se lanzó en 2022. Las Notas de Salida son toronja (pomelo) y absenta; las Notas de Corazón son menta y lavanda; las Notas de Fondo son ciprés y pachulí.</p>
                  </div>
`;

let sauvageE = ` <div class="single">
<img src="https://ik.imagekit.io/tfotr241290/elixir2.jpg?updatedAt=1680990028300" alt="Sauvage Elixir">
<h2>Sauvage Elixir</h2>
<h3>Dior</h3><br>
<p id="infoSection">Sauvage Elixir de Dior es una fragancia de la familia olfativa Aromática para Hombres. Esta fragrancia es nueva. Sauvage Elixir se lanzó en 2021. La Nariz detrás de esta fragrancia es Francois Demachy. Las Notas de Salida son nuez moscada, canela, cardamomo y toronja (pomelo); la Nota de Corazón es lavanda; las Notas de Fondo son regaliz, sándalo, ámbar, pachulí y vetiver de Haití.</p>
</div>
`;

let lblueH = ` <div class="single">
<img src="https://ik.imagekit.io/tfotr241290/light_blue2.jpg?updatedAt=1680990030941" alt="Light Blue Pour Homme">
<h2>Light Blue Pour Homme</h2>
<h3>Dolce&Gabbana</h3><br>
<p id="infoSection">Light Blue pour Homme de Dolce&Gabbana es una fragancia de la familia olfativa Cítrica Aromática para Hombres. Light Blue pour Homme se lanzó en 2007. Las Notas de Salida son toronja (pomelo), bergamota, mandarina siciliana y enebro de Virginia; las Notas de Corazón son pimienta, romero y palo de rosa de Brasil; las Notas de Fondo son almizcle, incienso y musgo de roble. Este perfume es el ganador del premio FiFi Award Fragrance Of The Year Mens Luxe 2008.</p>
</div>
`;

let valentinoI = ` <div class="single">
<img src="https://ik.imagekit.io/tfotr241290/valentino2.jpg?updatedAt=1680990030945" alt="Valentino Uomo Intense">
<h2>Valentino Uomo Intense</h2>
<h3>Valentino</h3><br>
<p id="infoSection">Valentino Uomo Intense de Valentino es una fragancia de la familia olfativa Cuero para Hombres. Valentino Uomo Intense se lanzó en 2016. Las Notas de Salida son mandarina y esclarea; las Notas de Corazón son iris y haba tonka; las Notas de Fondo son vainilla y cuero.</p>
</div>
`;


const pages = {
    invictus_platinum: `${invictusP}`,
    sauvage_elixir: `${sauvageE}`,
    lightblue_pourhomme: `${lblueH}`,
    valentino_intense: `${valentinoI}`,
  };

function getPageContent(page) {
    let contentToReturn;
  
    switch (page) {
      case "invictus_platinum":
        contentToReturn = pages.invictusP;
        break;
      case "sauvage_elixir":
        contentToReturn = pages.sauvageE;
        break;
      case "valentino_intense":
        contentToReturn = pages.valentinoI;
        break;
      case "lightblue_pourhomme":
        contentToReturn = pages.lblueH;
      default:
        contentToReturn = pages.invictusP;
        break;
    }
  
    document.querySelector(".content-page").innerHTML = contentToReturn;
}
