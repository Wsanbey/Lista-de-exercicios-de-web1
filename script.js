const mostrarCronometro = document.querySelector("p");
let mostrarPalavraSecreta = document.querySelector("h1");

document.getElementById("sortearPalavras").addEventListener("click", mostarPalavraSorteada); 
document.getElementById("ckecarPalavra").addEventListener("click", validarResposta);  
const palavraUsuario = document.querySelector("#palavraUsuario");
const resultadoDaPartida = document.querySelector("#resultadoDaPartida");

// variaveis
var tempoDaPartida = 10;

// lista de palavras
var palavras = [
    "banana", 
    "laranja", 
    "legal",
    "manga", 
    "abacaxi", 
    "morango",  
    "tio", 
    "melancia",  
    "tangerina", 
    "geo"
];

//Sorteando plavras do array
function sortearPalavras(){
    // palavra sorteada 
    let n = Math.floor(Math.random() * palavras.length);
    palavraSecreta =  palavras[n] ;   
    return palavraSecreta;
};
//palavra secreta
var  palavraSecreta = sortearPalavras();
console.log(palavraSecreta);

function embaralharPalavraSecreta(palavra){
    var palavraEmbaralhada = palavra.split('').sort(function(){return 0.5-Math.random()}).join('');
    return palavraEmbaralhada;
}

function mostarPalavraSorteada(palavra){
    let palavraEmbaralhada = embaralharPalavraSecreta(palavraSecreta);
    mostrarPalavraSecreta.innerHTML= palavraEmbaralhada;
}

// Validar com click
function validarResposta(){
    let resposta = palavraUsuario.value;
    let palavraIgual = palavraSecreta === resposta ? true : false;
    fimDoJogo(palavraIgual);
}; 

//Validar com o teclado
palavraUsuario.addEventListener("keydown", function (event) { 
    if(event.keyCode === 13){
        let resposta = palavraUsuario.value;
        console.log(resposta)
        let palavraIgual = palavraSecreta === resposta ? true : false;
        console.log(palavraIgual);
        fimDoJogo(palavraIgual);
    }; 
});
//Resultado do jogo
function fimDoJogo(resultado){
    if(resultado){
        resultadoDaPartida.innerHTML = `Vacê acertou a palavra é ${this.palavraSecreta}`;
    }else{
        resultadoDaPartida.innerHTML = `Vacê errou a palavra é ${this.palavraSecreta}`
    }
} 
// area de testes
function reinicializarJogo(){
console.log("Reinicializado");

}

//Fim do teste
 
//Cronometrar e sorteart palavras
function cronometro() {
    if(tempoDaPartida < 0){
        tempoDaPartida = 10;
        sortearPalavras();
        embaralharPalavraSecreta(palavraSecreta)
        mostarPalavraSorteada(palavraSecreta);
        limparCampos();
        
    }
    mostrarCronometro.innerHTML= `Time Leff: ${tempoDaPartida}s`;
    tempoDaPartida--;  
} 
setInterval(cronometro, 1000);
 

function limparCampos(){
    palavraUsuario.value = "";
    resultadoDaPartida.innerHTML = "";
}
 
 
function acompanharFunçoes(){
    mostarPalavraSorteada
    limparCampos
    validarResposta
    cronometro
    embaralharPalavraSecreta
    sortearPalavras
    fimDoJogo
}

mostarPalavraSorteada();