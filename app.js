let contenedor = document.getElementById("contenedor");
let color = prompt("Desea continuar con el modo obscuro?");
if(color === "si"){
  contenedor.className = "container";
}

let nombre = prompt("Ingrese su nombre")
let father = document.getElementById("padre");
let personas = [];
personas.push("Bienvenido" + "&nbsp" + nombre)
for(const persona of personas){
  let li = document.createElement("li");
  li.innerHTML = persona;
  father.append(li);
}

let parrafo = document.createElement("p");
let seccion = prompt("ingrese si quiere al inicio o al carrito");
if(seccion === "inicio"){
  parrafo.innerHTML = "<h1>Estamos en el inicio de la pagina</h1>"
}else if(seccion === "carrito"){
  parrafo.innerHTML = "<h1>Estamos en el carrito</h1>"

  alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-teclado $8000 2-mouse $4500 3-mousepad $2000 4-auriculares $10000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Teclado, indique la cantidad deseada a comprar"))
            total += cantidad(seleccionarCantidad, 8000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Mouse, indique la cantidad deseada a comprar"))
        total += cantidad(seleccionarCantidad, 4500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Mousepad, indique la cantidad deseada a comprar"))
      total += cantidad(seleccionarCantidad, 2000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Auriculares, indique la cantidad deseada a comprar"))
      total += cantidad(seleccionarCantidad, 10000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-teclado $8000 2-mouse $4500 3-mousepad $2000 4-auriculares $10000 "))
}

alert("el total de la compra es de: " + total)





const productos = [
    {id: 1, nombre: "Teclado", precio: 8000},
    {id: 2, nombre: "Mouse", precio: 4500},
    {id: 3, nombre: "Mousepad", precio: 2000},
    {id: 4, nombre: "Ariculares", precio: 10000},
  ];
  let padre = document.getElementById("padre");
  for(const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2>ID: ${producto.id}</h2>
                      <p>Producto: ${producto.nombre}</p>
                      <b>$ ${producto.precio}</b>`;
    
    padre.append(contenedor);
  } 

}else{
  parrafo.innerHTML = "<h1>Título de la página</h1>"
}
document.body.append(parrafo);


