/**Funciones */

function ingresarNumero() {

    let num = prompt("Ingrese un numero del 1 al 3 para conocer los precios");

    while (num < 0 || num > 3) {
        num = prompt("Error. Debe ingresar un numero entre 1 al 3");
    }

    return num;
}



/**Funciones */
function mostrarPrecios(numero) {

    let costo = 0;

    switch (numero) {
        case '1':
            costo = 200;
            alert("Costo del producto 1 es: $" + costo);
            break;
        case '2':
            costo = 300;
            alert("Costo del producto 2 es: $" + costo);
            break;
        case '3':
            costo = 500;
            alert("Costo del producto 3 es: $" + costo);
            break;

        default:
            alert("Sin costo");
    }

    return costo;
}

let numero = ingresarNumero();

mostrarPrecios(numero)






