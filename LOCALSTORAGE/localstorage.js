let productos = [
  {
    nombre: "Aroz",
    precio: 3000,
    presentacion: "bolsa 1kl",
    imagen:
      "https://jumbocolombiaio.vtexassets.com/arquivos/ids/186321/7702511000038.jpg?v=637813981854430000",
  },
  {
    nombre: "Aceite",
    precio: 5000,
    presentacion: "bolsa 1kl",
    imagen:
      "https://www.conasi.eu/blog/wp-content/uploads/2013/01/aceite-oliva.jpg",
  },
  {
    nombre: "Azucar",
    precio: 2500,
    presentacion: "bolsa 1kl",
    imagen:
      "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2023-09/tipos-azucar_0.jpg.webp?itok=kCO5OpHF",
  },
];
// //gaurdar datos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));
alert("Productos Guardados con exito");

//extraer la informacion de localStorage
let datos = JSON.parse(localStorage.getItem("productos"));
// console.log(datos);
let contenedor = document.querySelector("#tarjetas");
datos.forEach((pro, i) => {
  //contenedor.innerHTML += "";
  let tarjeta = `<div class="card" style="width: 18rem;">
    <img src="${pro.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="${pro.nombre}">Card title</h5>
      <p class="card-text">${pro.presentacion}</p>
      <p class="card-text">${pro.precio}</p>
      <a href="#" class="btn btn-primary">COMPRAR</a>
      <button type = "button" onclick="eliminarPro(${i})" class= "btn btn-danger">🚗</button>
    </div>
  </div>
    `;
  contenedor.innerHTML += tarjeta;
});
// //eliminar datos guardados en localStorage
// localStorage.removeItem("productos");
// alert("productos eliminados con exito");

//eliminar un producto
function eliminarPro(pos) {
  //traer los datos del storage
  let productos = JSON.parse(localStorage.getItem("productos"));
  let pro = [];
  //verificar que no hay datos nulos
  if (productos != null) {
    pro = productos;
  }
  console.log(pro[pos]);
  let confirmar = confirm("Deseas eliminar el producto"+ pro[pos].nombre);
  if (confirmar){
    pro [pos].splice(pos, 1);
    alert ("producto eliminado con exito");
  }
}
