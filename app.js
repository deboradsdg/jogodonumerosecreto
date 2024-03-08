//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto.";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número de 01 a 10!"

//Se voce perceber ambos comandos acima obedem a mesam coisa, a unica coisa q muda é a tag to queryselector e o texto, logo vamos criar uma funçao para isso 

let listaNumerosSorteados = [];
let maximodeNumeros = 100;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function MensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${maximodeNumeros}`);
}

MensagemInicial();



function verificarChute(){
//função sem parametro e sem retorno
    let chute = document.querySelector("input").value;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);

    
    if(chute == numeroSecreto){

        exibirTextoNaTela("h1", "Acertou");

        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa"

        let mensagemTentativas= `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`

        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{

        exibirTextoNaTela("h1", "Você errou")

        if(chute > numeroSecreto){
                exibirTextoNaTela("p", " O número secreto é menor");
    
        } else{
            exibirTextoNaTela("p", " O número secreto é maior");
        }

        tentativas++;
        limparCampo();
        


    }

}


function gerarNumeroAleatorio() {
//função com que retonra um valor
    let numeroAleartorio = parseInt(Math.random() * maximodeNumeros + 1);
    let quantidadeDeNumeroEscolhidos = listaNumerosSorteados.length;

        // quando ja tiver utilizado todos os numeros possivel, limpar a lista = começar de novo 
    if(quantidadeDeNumeroEscolhidos == maximodeNumeros){

        listaNumerosSorteados = [];
    }


    // para que os numeros sorteados não se repitam, crio um array para guardar o numeor, se repetido pede para tirar do zero

    if(listaNumerosSorteados.includes(numeroAleartorio)){

        return gerarNumeroAleatorio();

    } else{
    
            listaNumerosSorteados.push(numeroAleartorio);
            return numeroAleartorio;

        
        
    }

 

}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";

}




function reiniciarJogo(){

   numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    MensagemInicial();
    tentativas=1
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



