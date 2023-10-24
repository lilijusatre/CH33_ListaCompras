// El código va aquí -> 
let product = document.querySelector("#Name");
let amount = document.querySelector("#Number");
const addButton = document.querySelector("#btnAgregar");
const clearbtn = document.querySelector("#btnClear");
const alert = document.querySelector("#alertValidaciones");
const table = document.querySelector("tbody");

let contador = 0;
let precio = 0;

function validarCantidad() {
    if(amount.value.length === 0 || isNaN(amount.value) || parseFloat(amount.value) <= 0 ){
        return false;
    }
    return true;
}
addButton.addEventListener("click", function(e) {
    let isValid = true;
    e.preventDefault();
    alert.innerHTML = "";
    alert.style.display = "none";
    product.style.border = "";
    amount.style.border = "";

    if(product.value.length < 3) {
        alert.innerHTML = "El campo <strong>Nombre</strong> es requerido. <br>   ";
        alert.style.display = "block";
        product.style.border = "solid thin red";
        isValid = false;

    } // product
    if(! validarCantidad()){
        alert.innerHTML += "El campo <strong>Cantidad</strong> es requerido";
        alert.style.display = "block";
        amount.style.border = "solid thin red";
        isValid = false;
    }
    if(isValid){
        contador++;
        precio = getPrice();
    
        const row = `<tr>
                        <td>${contador}</td>
                        <td>${product.value}</td>
                        <td>${amount.value}</td>
                        <td>${precio}</td>
                    </tr>`;
    //    let table = document.querySelector("#tablaListaCompras");
    //    let tbody = table.getElementsByTagName("tbody").item(0);
        table.insertAdjacentHTML("beforeend",row);
        product.value = "";
        amount.value = "";
        product.focus();
    }

});
clearbtn.addEventListener("click", function(e){
    e.preventDefault();
    const form = document.querySelector("form");
    form.reset();
    alert.innerHTML = "";
    alert.style.display = "none";
    product.style.border = "";
    amount.style.border = "";
    product.value = "";
    amount.value = ""; 
    table.innerHTML = "";
});


function getPrice() {
    return Math.floor((Math.random() * 100)*100)/100;
}
