const bancoDePalavras = ["monitor", "mouse", "computador", "notebook", "teclado", "banana", "carro", "computador", "cachorro", "lua", "montanha", "foguete", "praia", "livro", "chocolate", "aviao", "telefone", "jardim", "sorvete", "girassol", "elefante", "casa", "chave", "cafe", "bicicleta", "arvore", "rio", "lapis", "sol", "terra", "vento", "navio", "mochila", "cadeira", "amigo", "paisagem", "cidade", "ocean", "teclado", "gato", "escola", "papel", "radio", "bolacha", "flor", "espelho", "pintura", "esquilo", "abacaxi", "dinossauro", "inverno", "primavera", "verao", "outono", "neve", "chuva", "estrela", "rocha", "caverna", "sonho", "viagem", "feira", "mercado", "hamburguer", "pizza", "piscina", "festa", "caminhada", "travesseiro", "cobertor", "cobertor", "relogio", "luz", "caneta", "filme", "foto", "batata", "melancia", "limao", "laranja", "banana", "mel", "abelha", "formiga", "mariposa", "nuvem", "ventilador", "porta", "janela", "cachoeira", "sabao", "escova", "faca", "garfo", "colher"];

function inciarJogo() {

    let palavraSorteada = sortearPalavraDoBanco().toUpperCase().split('');
    let tentativas = 6;
    let letrasChutadas = [];
    let palavraJogador = [];
    for (let i = 0; i < palavraSorteada.length; i++) {
        palavraJogador.push('_');
    }
    atualizarPlacar();
    const teclas = document.querySelectorAll(".btn");

    teclas.forEach(tecla => {
        tecla.addEventListener("click", function () {
            let teclaId = tecla.id;
            verificarLetra(tecla.value, teclaId);
        })
    })

    function atualizarPlacar() {
        if (tentativas <= 0) {
            document.getElementById("numberAttempts").innerHTML = "Você perdeu! A palavra era:";
            let palavraExibicao = document.getElementById("wordLine").innerHTML = palavraSorteada.toString();
            document.getElementById("wordLine").innerHTML = palavraExibicao.replaceAll(",", " ");
            setTimeout(function () {
                window.location.reload();
            }, 3000)

        } else {
            document.getElementById("numberAttempts").innerHTML = `Tentativas: ${tentativas}`;
            let palavraExibicao = document.getElementById("wordLine").innerHTML = palavraJogador.toString();
            document.getElementById("wordLine").innerHTML = palavraExibicao.replaceAll(",", " ");
        }

    }

    function verificarSeAcertouAPalavra() {
        if (palavraJogador.toString() === palavraSorteada.toString()) {
            document.getElementById("numberAttempts").innerHTML = `Você ganhou!`;
            let palavraExibicao = document.getElementById("wordLine").innerHTML = palavraJogador.toString();
            document.getElementById("wordLine").innerHTML = palavraExibicao.replaceAll(",", " ");
        }
        else {
            atualizarPlacar();
        }
    }

    function verificarLetra(letraChutada, idTecla) {
        let naoAchou = [];
        let letra = letraChutada;
        let teclaId = idTecla
        let verificarSeALetraJaFoiUsada = letrasChutadas.includes(letra);

        if (!verificarSeALetraJaFoiUsada == true) {
            letrasChutadas.push(letraChutada);
            for (let i = 0; i < palavraSorteada.length; i++) {
                if (letraChutada == palavraSorteada[i]) {
                    delete palavraJogador[i];
                    palavraJogador[i] = letraChutada.toUpperCase();
                    document.getElementById(teclaId).style = 'background-color: rgb(124, 254, 88); color:black;';
                    document.getElementById(teclaId).disabled = true;
                    verificarSeAcertouAPalavra();
                }
                else {
                    verificarSeAcertouAPalavra()
                    naoAchou.push("nao achou");
                }
            }

            if (naoAchou.length == palavraSorteada.length) {
                tentativas -= 1
                document.getElementById(teclaId).style = 'background-color: rgb(255, 96, 96); color:black;';
                document.getElementById(teclaId).disabled = true;
                
                atualizarPlacar();
            }

        }
        else {
            console.log('tecla ja usada');
        }
    }

    function sortearPalavraDoBanco() {
        let tamanhoDoBanco = bancoDePalavras.length;
        let posicaoDaPalavraSorteada = Math.floor(Math.random() * (tamanhoDoBanco));
        let palavraSorteada = bancoDePalavras[posicaoDaPalavraSorteada];
        return palavraSorteada;
    }

}

inciarJogo();