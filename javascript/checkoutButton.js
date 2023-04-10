let add = document.createElement('button');
let order = document.createElement('button');

add.setAttribute("type", "submit");
order.setAttribute("type","submit");

add.textContent = "Agregar al carrito";
order.textContent = "Comprar ahora";

const buttonArea = document.querySelector(".addbutton");

buttonArea.appendChild(add);
buttonArea.appendChild(order);