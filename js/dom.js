//Creacion de variables. 
const title = document.getElementById("title");
const header = document.getElementById('header');
const hero = document.getElementById('hero');
const barra = document.getElementById('barra');
const lista = document.getElementById("lista-catalogo");
const foot = document.getElementById("footer");

//Creamos el contenido del dom

title.innerText = `
					E-Martket`;
console.log(title, "agregamos titulo de pagina");

//Creamos el div Container dentro del header. 

let container = document.createElement('div');
    container.classList.add("container");

header.appendChild(container)
console.log(header);

//Creamos el row dentro del container

let row = document.createElement('div');
    row.classList.add("row");
    row.innerHTML = `
                    <div class="four columns">
					    <h1>E-MARTKET</h1>
				    </div>
				    <div class="two columns u-pull-right">
					    <ul>
						    <li class="submenu">
							    <img src="img/cart.png">
							    <div id="carrito">
								    <p class="vacio">carrito vacio</p>
								    <table id="lista-carrito" class="u-full-width">
									    <thead>
										    <tr>
											    <th>Imagen</th>
											    <th>Productos</th>
											    <th>Precio</th>
										    </tr>
									    </thead>
									    <tbody>
										</tbody>
								    </table>
								    <a href="#" id="vaciar-carrito" class="button u-full-width">vaciar carrito</a>
							    </div>	
						    </li>
					    </ul>
				    </div>`
container.appendChild(row)


//Creamos el contenido del div class hero

let div1 = document.createElement('div');
    div1.classList.add("container");

hero.appendChild(div1);
console.log(hero);

//Se agrega unu div con la class row y dentro su contenido.
let div2 = document.createElement('div');
    div2.classList.add("row");
    div2.innerHTML = `
                    <div class="six columns">
					                <div class="contenido-hero">
						                <h2>Realizar pedido.</h2>
						                <p>Todos los pedidos con descuento</p>
						                <form>
							                <input class="u-full-width" type="text" placeholder="¿Que te gustaria comprar?" id="buscador">
							                <input type="submit" class="submit-buscador">
						                </form>
					                </div>
				                </div>`        
div1.appendChild(div2);

//Llamamos al div barra y agregamos su contenido.

let contBar = document.createElement('div');
    contBar.classList.add("container");
let rowBar = document.createElement('div');
    rowBar.classList.add("row");
    rowBar.innerHTML = `
                        <div class="four columns icono icono1">
                            <p>Mas de 100 productos diferentes<br>Explora los nuevos productos</p>
                        </div>
                        <div class="four columns icono icono2">
                            <p>Expertos<br>Prueba las nuevas combinaciones</p>
                        </div>
                        <div class="four columns icono icono3">
                            <p>Envio<br>Gratis hasta tu casa</p>
                        </div>`
barra.appendChild(contBar);
contBar.appendChild(rowBar);
console.log(barra);

//Agregamos el div con el catalogo de productos.


lista.innerHTML = `
            <h1 class="encabezado">Pedidos en linea</h1>`
let div3 = document.createElement('div');
    div3.classList.add("row");
let fourCol1 = document.createElement('div')
    fourCol1.classList.add("four");
    fourCol1.classList.add("columns");
    fourCol1.innerHTML = `
                        <div class="card">
                            <img src="img/product1.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Sencilla</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$52000<span class="u-pull-right">$45000</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
                            </div>
                        </div>`
lista.appendChild(div3);
div3.appendChild(fourCol1);
console.log(lista);

//Agregamos la 2da columna que contiene la 2da imagen.

let fourCol2 = document.createElement('div');
    fourCol2.classList.add("four")
    fourCol2.classList.add("columns");
    fourCol2.innerHTML = `                    
                        <div class="card">
                            <img src="img/product2.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Media</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$66000<span class="u-pull-right">$62000</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar al carrito</a>
                            </div>
                        </div>`
div3.appendChild(fourCol2);

let fourCol3 = document.createElement('div');
    fourCol3.classList.add("four")
    fourCol3.classList.add("columns");
    fourCol3.innerHTML = `
                        <div class="card">
                            <img src="img/product3.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Alta</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$92500<span class="u-pull-right">$83300</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar al carrito</a>
                            </div>
                        </div>`
div3.appendChild(fourCol3);

//Creamos el 2 div row que contiene 3 imagenes mas. 

let div4 = document.createElement('div');
    div4.classList.add("row");
let fourCol4 = document.createElement('div');
    fourCol4.classList.add("four")
    fourCol4.classList.add("columns");
    fourCol4.innerHTML = `
                        <div class="card">
                        <img src="img/product4.jpg" class="u-full-width">
                        <div class="info-card">
                            <h4>Pc Gamer Sencilla</h4>
                            <p>Envio Gratis</p>
                            <img src="img/estrellas.png">
                            <p class="precio">$48350<span class="u-pull-right">$42000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar al carrito</a>
                        </div>
                    </div>`
lista.appendChild(div4);
div4.appendChild(fourCol4);

let fourCol5 = document.createElement('div');
    fourCol5.classList.add("four")
    fourCol5.classList.add("columns");
    fourCol5.innerHTML = ` 
                        <div class="card">
                            <img src="img/product5.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Media</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$50<span class="u-pull-right">$15</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar al carrito</a>
                            </div>
                        </div>
    `
div4.appendChild(fourCol5);

let fourCol6 = document.createElement('div');
    fourCol6.classList.add("four")
    fourCol6.classList.add("columns");
    fourCol6.innerHTML = `
                        <div class="card">
                            <img src="img/product6.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Sencilla</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$38000<span class="u-pull-right">$35250</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar al carrito</a>
                            </div>
                        </div>`
div4.appendChild(fourCol6);

let div5 = document.createElement('div')
    div5.classList.add("row");
let fourCol7 = document.createElement('div');
    fourCol7.classList.add("four");
    fourCol7.classList.add("columns");
    fourCol7.innerHTML = `
                        <div class="card">
                            <img src="img/product7.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Sencilla</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$39750<span class="u-pull-right">$31000</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar al carrito</a>
                            </div>
                        </div>`
lista.appendChild(div5);
div5.appendChild(fourCol7);

let fourCol8 = document.createElement('div');
    fourCol8.classList.add("four");
    fourCol8.classList.add("columns");
    fourCol8.innerHTML = `
                        <div class="card">
					        <img src="img/product8.jpg" class="u-full-width">
					        <div class="info-card">
						        <h4>Pc Gamer Media</h4>
						        <p>Envio Gratis</p>
						        <img src="img/estrellas.png">
						        <p class="precio">$46750<span class="u-pull-right">$43300</span></p>
						        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar al carrito</a>
					        </div>
				        </div>`
div5.appendChild(fourCol8);

let fourCol9 = document.createElement('div');
    fourCol9.classList.add("four");
    fourCol9.classList.add("columns");
    fourCol9.innerHTML = `
                        <div class="card">
                            <img src="img/product9.jpg" class="u-full-width">
                            <div class="info-card">
                                <h4>Pc Gamer Alta</h4>
                                <p>Envio Gratis</p>
                                <img src="img/estrellas.png">
                                <p class="precio">$250000<span class="u-pull-right">$220500</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar al carrito</a>
                            </div>
                        </div>`
div5.appendChild(fourCol9);

//Ingresamos el Footer Mediante DOM.

let div6 = document.createElement('div');
    div6.classList.add("container");
let rowFoot = document.createElement('div');
    rowFoot.classList.add("row");
let colList = document.createElement('div');
    colList.classList.add("four")
    colList.classList.add("columns");
let nav = document.createElement('nav');
    nav.classList.add("menu");
    nav.innerHTML = `
                    <a class="enlace" href="#">Pedidos a domicilio</a>
                    <a class="enlace" href="#">Pedidos en linea</a>
                    <a class="enlace" href="#">Pedidos por telefono</a>
                    <a class="enlace" href="#">Pedidos Menu</a>
                    <a class="enlace" href="#">Componentes</a>
                    `
let div7 = document.createElement('div');
    div7.classList.add("four");
    div7.classList.add("columns")
let nav2 = document.createElement('nav');
    nav2.classList.add("menu");
    nav2.innerHTML = `						
                        <a class="enlace" href="#">Ubicacion</a>
                        <a class="enlace" href="#">Fabrica</a>
                        <a class="enlace" href="#">Telefono</a>`

foot.appendChild(div6);
div6.appendChild(rowFoot);
rowFoot.appendChild(colList);
colList.appendChild(nav);
rowFoot.appendChild(div7)
div7.appendChild(nav2);
console.log(foot)

const carrito = document.getElementById('carrito');
const catalogos = document.getElementById('lista-catalogo');
const listaCatalogos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
     catalogos.addEventListener('click', comprarCatalogo);
     carrito.addEventListener('click', eliminarCatalogo);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


function comprarCatalogo(e) {
     e.preventDefault();

     if(e.target.classList.contains('agregar-carrito')){
          const catalogo = e.target.parentElement.parentElement;
          leerDatosCatalogo(catalogo);
     }
}


function leerDatosCatalogo(catalogo) {
     const infoCatalogo = {
          imagen: catalogo.querySelector('img').src,
          titulo: catalogo.querySelector('h4').textContent,
          precio: catalogo.querySelector('.precio span').textContent,
          id: catalogo.querySelector('a').getAttribute('data-id')
     }
     insertarCarrito(infoCatalogo);
}

function insertarCarrito(catalogo) {
     const row = document.createElement('tr');
     row.innerHTML = `
          <td>
               <img src="${catalogo.imagen}" width=100>
          </td>
          <td>${catalogo.titulo}</td>
          <td>${catalogo.precio}</td>
          <td>
               <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
          </td>
     `; 
     listaCatalogos.appendChild(row);
     guardarCatalogoLocalStorage(catalogo);
}

function eliminarCatalogo(e) {
     e.preventDefault();

     let catalogo,
          catalogoId;

     if(e.target.classList.contains('borrar-catalogo')){
          e.target.parentElement.parentElement.remove();
          catalogo = e.target.parentElement.parentElement;
          catalogoId = catalogo.querySelector('a').getAttribute('data-id');
     }

     eliminarCatalogoLocalStorage(catalogoId);
}


function vaciarCarrito() {
     while(listaCatalogos.firstChild) {
          listaCatalogos.removeChild(listaCatalogos.firstChild);
     }

     vaciarLocalStorage();

     return false;
}


function guardarCatalogoLocalStorage(catalogo) {
     let catalogos;

     catalogos = obtenerCatalogosLocalStorage();

     catalogos.push(catalogo);

     localStorage.setItem('catalogos', JSON.stringify(catalogos));
}


function obtenerCatalogosLocalStorage() {
     let catalogosLS;

     if(localStorage.getItem('catalogos') === null){
          catalogosLS = [];
     }else {
          catalogosLS = JSON.parse(localStorage.getItem('catalogos'));
     }
     return catalogosLS
}


function leerLocalStorage() {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogo){

          const row = document.createElement('tr');
          row.innerHTML = `
               <td>
                    <img src="${catalogo.imagen}" width=100>
               </td>
               <td>${catalogo.titulo}</td>
               <td>${catalogo.precio}</td>
               <td>
                    <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
               </td>
          `;
          listaCatalogos.appendChild(row);

     });
}


function eliminarCatalogoLocalStorage(catalogo) {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogosLS, index){
          if(catalogosLS.id === catalogo) {
               catalogosLS.splice(index, 1);
          }
     });

     localStorage.setItem('catalogos', JSON.stringify(catalogosLS));

}

function vaciarLocalStorage() {
     localStorage.clear();
}
