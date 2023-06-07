let checkoutSection = document.querySelector('.mainCheckout');
function checkOutDisplay(){
    let listOfItems = localStorage.getItem("listCards");
    const obj = JSON.parse(listOfItems);
    console.log(typeof obj)
    obj.forEach((value,key)=>{
        let checkDiv = document.createElement('li');
        checkDiv.innerHTML = `
            <div><img src="${value.image}"></div>
            <div>${value.perfume}</div>
            <div>${value.price.toLocaleString()}</div>
        `;
        checkoutSection.appendChild(checkDiv);
    })
    
}
checkOutDisplay();