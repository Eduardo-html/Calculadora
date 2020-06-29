
    //objeto calculadora
    let calculadora = {};
    calculadora.display = document.querySelector("#display");

    let botaoUm = document.querySelector("#numeroUm");
    let botaoDois = document.querySelector("#numeroDois");
    let botaoTres = document.querySelector("#numeroTres");
    let botaoQuatro = document.querySelector("#numeroQuatro");
    let botaoCinco = document.querySelector("#numeroCinco");
    let botaoSeis = document.querySelector("#numeroSeis");
    let botaoSete = document.querySelector("#numeroSete");
    let botaoOito = document.querySelector("#numeroOito");
    let botaoNove = document.querySelector("#numeroNove");
    let botaoZero = document.querySelector("#numeroZero");
    let botaoPorcentagem = document.querySelector("#porcentagem");
    let botaoAspas = document.querySelector("#aspas");
    let botaoDivisao = document.querySelector("#divisao");
    let botaoMultiplicacao = document.querySelector("#multiplicacao");
    let botaoSoma = document.querySelector("#soma");
    let botaoSubtracao = document.querySelector("#subtracao");
    let botaoIgual = document.querySelector("#igual");
    let botaoBackspace = document.querySelector("#backspace");
    let botaoPonto = document.querySelector("#ponto");
    let acumulador = "";
    
    botaoBackspace.onclick = function() {
        calculadora.display.innerText = "";
        
    }   
    botaoUm.onclick = function() {
        calculadora.display.innerText += 1;
    }
    botaoDois.onclick = function() {
        calculadora.display.innerText += 2;
    }
    botaoTres.onclick = function() {
        calculadora.display.innerText += 3;
    }
    botaoQuatro.onclick = function() {
        calculadora.display.innerText += 4;
    }
    botaoCinco.onclick = function() {
        calculadora.display.innerText += 5;
    }
    botaoSeis.onclick = function() {
        calculadora.display.innerText += 6;
    }
    botaoSete.onclick = function() {
        calculadora.display.innerText += 7;
    }
    botaoOito.onclick = function() {
        calculadora.display.innerText += 8;
    }
    botaoNove.onclick = function() {
        calculadora.display.innerText += 9;
    }
    botaoZero.onclick = function() {
        calculadora.display.innerText += 0;
    }
    botaoPonto.onclick = function() {
        calculadora.display.innerText += ".";
    }

    botaoSoma.onclick = function() {
        acumulador += calculadora.display.innerText;
        acumulador += " + ";
        calculadora.display.innerText = "";
    }
    botaoSubtracao.onclick = function() {
        acumulador += calculadora.display.innerText;
        acumulador += " - ";
        calculadora.display.innerText = "";
    }
    botaoMultiplicacao.onclick = function() {
        acumulador += calculadora.display.innerText;
        acumulador += " * ";
        calculadora.display.innerText = "";
    }
    botaoDivisao.onclick = function() {
        acumulador += calculadora.display.innerText;
        acumulador += " / ";
        calculadora.display.innerText = "";
    }
    botaoPorcentagem.onclick = function() {
        acumulador += calculadora.display.innerText;
        acumulador += " % ";
        calculadora.display.innerText = "";
    }

    botaoIgual.onclick = function() {
        //TODO: checar se existe conteúdo dentro do display

        //colocando conteúdo do display no acumulador
        acumulador += calculadora.display.innerText;
        //resolvendo conta (conteúdo acumulador)
        let resultado = eval(acumulador);
        //colocando no display o conteúdo do acumulador
        calculadora.display.innerText = resultado;
        // limpando o acumulador
        acumulador = "";

    }
    

