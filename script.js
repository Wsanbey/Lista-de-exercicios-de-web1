const mostrarCronometro = document.querySelector("p");
let mostrarPalavraSecreta = document.querySelector("h1");

document.getElementById("sortearPalavras").addEventListener("click", mostarPalavraSorteada); 
document.getElementById("ckecarPalavra").addEventListener("click", validarResposta);  
const palavraUsuario = document.querySelector("#palavraUsuario");
const resultadoDaPartida = document.querySelector("#resultadoDaPartida");

// variaveis
var tempoDaPartida = 30;
var duracaoDaPartida = 30;
var reinicializar = 5;
var paraCronometro = false;
  
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

function mostarPalavraSorteada(){
    let palavraEmbaralhada = embaralharPalavraSecreta(palavraSecreta);
    mostrarPalavraSecreta.innerHTML= palavraEmbaralhada;
}

// Validar com click
function validarResposta(){
    let resposta = palavraUsuario.value;
    let palavraIgual = palavraSecreta === resposta ? true : false;
    if(palavraIgual){
        paraCronometro = true;
    }else
    {   paraCronometro = false;
    }
 
    fimDoJogo(palavraIgual);
     
}; 

//Validar com o teclado
palavraUsuario.addEventListener("keydown", function (event) { 
    if(event.keyCode === 13){
        let resposta = palavraUsuario.value;
        console.log(resposta)
        let palavraIgual = palavraSecreta === resposta ? true : false;
        console.log(palavraIgual);
        if(palavraIgual){
            paraCronometro = true;
        }else
        {   paraCronometro = false;
        }
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
function limparCampos(){
    palavraUsuario.value = "";
    resultadoDaPartida.innerHTML = "";
    // mostarPalavraSorteada(); 
} 
   
//Cronometrar e sorteart palavras
 
function ligarCronometro(){
    var cronometro = setInterval(()=> { 
        if(tempoDaPartida < 0){
            resultadoDaPartida.innerHTML = `A palavra é ${this.palavraSecreta}`
            tempoDaPartida = duracaoDaPartida;     
            pararCronometro();
            clearInterval(cronometro);
        } 

        if(paraCronometro){ 
            tempoDaPartida = duracaoDaPartida;  
            validarResposta();
            pararCronometro();
            clearInterval(cronometro);
            paraCronometro = false;
            console.log("Passou");
 
        }else {
                mostrarCronometro.innerHTML= `Time Leff: ${tempoDaPartida}s`;
                tempoDaPartida--;    
                }
    },1000);
}

 // pausa o intervalo após 5 segundos
function pararCronometro(){
    //clearInterval(this.cronometro);
    console.log("desligando Cronomento");
    setTimeout(() => {
        start(); 
        console.log("ligando Cronomento");
      }, 5000);
}
  
function start(){
    console.log("entrei em start");
    limparCampos();
    ligarCronometro();
    sortearPalavras();
    embaralharPalavraSecreta(palavraSecreta)
    mostarPalavraSorteada();
}
 
start();
  