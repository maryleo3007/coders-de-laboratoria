window.addEventListener('load', function () {

    var opciones = document.getElementById("opciones");
    var allCoders = document.getElementById("allCoders");

    /******Registro de alumnas */
      var coderLima1 = new Coder(1,"4taPromocion","Anais Araya","assets/img/4-lima/anais-araya .jpg");
      var coderLima2 = new Coder(2,"4taPromocion","Andrea Miranda","assets/img/4-lima/andrea-miranda.jpg");
      var coderLima3 = new Coder(3,"4taPromocion","Berenisse Rios","assets/img/4-lima/berenisse-ríos.jpg");
      var coderLima4 = new Coder(4,"4taPromocion","Caterina da Silva","assets/img/4-lima/caterina-da-silva.jpg");
      var coderLima5 = new Coder(5,"4taPromocion","Daniela Sanchez","assets/img/4-lima/daniela-sanchez.jpg");
      var coderLima6 = new Coder(6,"4taPromocion","Francisca Ojeda","assets/img/4-lima/francisca-ojeda.jpg");
      var coderLima7 = new Coder(7,"4taPromocion","Katerina Sandoval","assets/img/4-lima/katerine-sandoval.jpg");
      var coderLima8 = new Coder(8,"5taPromocion","Andrea Cabrera","assets/img/5-lima/andrea-cabrera.jpg");
      var coderLima9 = new Coder(9,"5taPromocion","Ariadna Izaguirre","assets/img/5-lima/ariadna-izaguirre.jpg");
      var coderLima10 = new Coder(10,"5taPromocion","Carito Juarez","assets/img/5-lima/carito-juarez.jpg");
      var coderLima11 = new Coder(11,"5taPromocion","Cristy Castro","assets/img/5-lima/cristy-castro.jpg");
      var coderLima12 = new Coder(12,"5taPromocion","Karol Orrillo","assets/img/5-lima/karol-orrillo.jpg");
      var coderLima13 = new Coder(13,"5taPromocion","Paola Ortiz","assets/img/5-lima/paola-ortiz.jpg");
      var coderLima14 = new Coder(14,"5taPromocion","Teresa Lara","assets/img/5-lima/teresa-lara.jpg");
      var coderLima15 = new Coder(15,"6taPromocion","Arantza Burga","assets/img/6-lima/arantza-burga.jpg");
      var coderLima16 = new Coder(16,"6taPromocion","Daguiana Revoredo","assets/img/6-lima/daguiana-revoredo.jpg");
      var coderLima17 = new Coder(17,"6taPromocion","Elizabeth Condori","assets/img/6-lima/elizabeth-condori.jpg");
      var coderLima18 = new Coder(18,"6taPromocion","Grecia Rayme","assets/img/6-lima/grecia-rayme.jpg");
      var coderLima19 = new Coder(19,"6taPromocion","Janine Vega","assets/img/6-lima/janine-vega.jpg");
      var coderLima20 = new Coder(20,"6taPromocion","Michelle More","assets/img/6-lima/michelle-more.jpg");
      var coderLima21 = new Coder(21,"6taPromocion","Misshel Velazquez","assets/img/6-lima/mishel-velasquez.jpg");
      var coderLima22 = new Coder(22,"6taPromocion","Rosario Felix","assets/img/6-lima/rosario-felix.jpg");
      coders.push(coderLima1);
      coders.push(coderLima2);
      coders.push(coderLima3);
      coders.push(coderLima4);
      coders.push(coderLima5);
      coders.push(coderLima6);
      coders.push(coderLima7);
      coders.push(coderLima8);
      coders.push(coderLima9);
      coders.push(coderLima10);
      coders.push(coderLima11);
      coders.push(coderLima12);
      coders.push(coderLima13);
      coders.push(coderLima14);
      coders.push(coderLima15);
      coders.push(coderLima16);
      coders.push(coderLima17);
      coders.push(coderLima18);
      coders.push(coderLima19);
      coders.push(coderLima20);
      coders.push(coderLima21);
      coders.push(coderLima22);
    /*****Fin del registro de alumnas*****/

    printCoderHtml(allCoders);
    opciones.onchange = function(){
          var valor = opciones.value;
          if(valor == "4taPromocion"){
              print4taProm(allCoders);
          }else if (valor == "5taPromocion") {
              print5taProm(allCoders);
          }else if (valor == "6taPromocion") {
              print6taProm(allCoders);
          }
    }
});
/**********funciones************/
var coders = [];

/*******Creado el objeto coder******/
function Coder(id,promocion,nombre,foto){
    this.id = id;
    this.promocion = promocion;
    this.nombre = nombre;
    this.foto = foto;
}
/*******Funcion para imprimir todas las coders*********/
function printCoderHtml(parent){
    parent.innerHTML = "";
    coders.forEach(function(elemento){
        //parent.appendChild(createCodeHtml(elemento.id,elemento.promocion,elemento.nombre,elemento.foto));
        parent.appendChild(createCodeHtml(elemento.id,elemento.foto));
    });
    var tamanio = coders.length;
    for(var i = 0; i < tamanio ; i++){
        aleatorio = Math.floor(Math.random()*tamanio);
        seleccion = coders[aleatorio];
        //console.log(seleccion);
    }
}
/*********Funcion para  imprimir las coders que pertenezcan a la 4ta promocion***********/
function print4taProm(parent){
    parent.innerHTML = "";
    coders.forEach(function(elemento){
        if(elemento.promocion == "4taPromocion"){
            //parent.appendChild(createCodeHtml(elemento.id,elemento.promocion,elemento.nombre,elemento.foto));
            parent.appendChild(createCodeHtml(elemento.id,elemento.foto));
        }
    });
}
/*********Funcion para  imprimir las coders que pertenezcan a la 5ta promocion***********/
function print5taProm(parent){
    parent.innerHTML = "";
    coders.forEach(function(elemento){
        if(elemento.promocion == "5taPromocion"){
            //parent.appendChild(createCodeHtml(elemento.id,elemento.promocion,elemento.nombre,elemento.foto));
            parent.appendChild(createCodeHtml(elemento.id,elemento.foto));
        }
    });
}
/*********Funcion para  imprimir las coders que pertenezcan a la 6ta promocion***********/
function print6taProm(parent){
    parent.innerHTML = "";
    coders.forEach(function(elemento){
        if(elemento.promocion == "6taPromocion"){
            //parent.appendChild(createCodeHtml(elemento.id,elemento.promocion,elemento.nombre,elemento.foto));
            parent.appendChild(createCodeHtml(elemento.id,elemento.foto));
        }
    });
}
/*********Funcion para crear el dom para mostrar la lista de coders***********/
function createCodeHtml(id,srcFoto){
    var df = document.createDocumentFragment();
    var div= document.createElement("div");
    div.setAttribute("class","divCoder");
    var img = document.createElement("img");
    img.setAttribute("src",srcFoto);
    /*var br1 = document.createElement("br");
    //var spanPromocion = document.createElement("span");
    //spanPromocion.appendChild(document.createTextNode(txtPromocion));
    //spanPromocion.setAttribute("class","spanPromocion");
    //var br2 = document.createElement("br");
    //var spanNombre = document.createElement("span");
    //spanNombre.appendChild(document.createTextNode(txtNombre));
    //spanNombre.setAttribute("class","spanNombre");*/
    div.appendChild(img);
    /*//div.appendChild(br1);
    //div.appendChild(spanPromocion);
    //div.appendChild(br2);
    //div.appendChild(spanNombre);*/
    df.appendChild(div);
    return df;
}
