var texto1 = document.getElementById("texto-1");
var text2 = document.getElementById("texto-2");

function clickNoProjetos(){
    console.log("Clicou no botão Projetos");
    text2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block";
    text2.style.display = "none";
}