// Exercício 1
function textoParagraph () {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerText = "texto texto texto texto texto texto texto texto texto texto texto texto";
}
textoParagraph();

// Exercício 2
function quadradoVerde () {
    let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
    quadradoAmarelo.style.background = 'rgb(76,164,109)';
}
quadradoVerde();

// Exercício 3
function quadradoBranco () {
    let quadradoVermelho = document.getElementsByClassName('center-content')[0];
    quadradoVermelho.style.background = 'white';
}
quadradoBranco();

// Exercício 4
function corrigindoTitulo () {
    let titulo = document.getElementsByTagName('h1')[0];
    titulo.innerHTML = 'Exercício 5.1 - JavaScript';
}
corrigindoTitulo();

// Exercício 5
function modficar () {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
modficar();

// Exercício 6
function mostrar () {
    let paragrafos = document.getElementsByTagName('p');
    for (let index = 0; index < paragrafos.length; index +=1) {
        console.log(paragrafos[index].innerHTML);
    }
}
mostrar();
