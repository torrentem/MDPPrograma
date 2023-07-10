const div1 = document.getElementById("div-1")
const div2 = document.getElementById("div-2")
const botonAgrandar = document.getElementById("applyBig")
const botonAchicar = document.getElementById("applySmall")


botonAgrandar.onclick = function(){
    div1.classList.add('big'),
    div2.classList.add('big');
}

botonAchicar.onclick = function(){
    div1.classList.remove('big'),
    div2.classList.remove('big');
}