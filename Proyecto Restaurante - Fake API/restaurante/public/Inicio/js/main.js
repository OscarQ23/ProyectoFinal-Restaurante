window.addEventListener('load' , function(){

let imagenes = [0];
let indice = 0; 

imagenes[0] = 'img/img-inicio/comida1.jpg';
imagenes[1] = 'img/img-inicio/comida2.jpg';
imagenes[2] = 'img/img-inicio/comida3.jpg';
imagenes[3] = 'img/img-inicio/comida4.jpg';

function cambiar(){

document.slider.src = imagenes[indice];

if(indice < 3){
    indice++;
}
else{
    indice = 0;
}

}

setInterval(cambiar, 3000);

});