const bancoDePalavras = ["monitor", "mouse", "computador", "notebook", "teclado"];

function inciarJogo() {
    let palavraSorteada = sortearPalavraDoBanco().toUpperCase().split('');
    let tentativas = 6;
    let letrasChutadas = [];
    let palavraJogador = [];
    for (let i = 0; i < palavraSorteada.length; i++) {
        palavraJogador.push('_');
    }

    atualizarPlacar();
    const teclas = document.querySelectorAll(".btn")

    teclas.forEach(tecla => {
        tecla.addEventListener("click", function () {
            if (tentativas <= 0) {

            }
            verificarLetra(tecla.value)
        })
    })

    function atualizarPlacar() {
        if (tentativas <= 0) {
            document.getElementById("numberAttempts").innerHTML = "Você perdeu!";
            let palavraExibicao = document.getElementById("wordLine").innerHTML = palavraJogador.toString();
            document.getElementById("wordLine").innerHTML = palavraExibicao.replaceAll(",", " ");

        } else {
            document.getElementById("numberAttempts").innerHTML = `Tentativas: ${tentativas}`;
            let palavraExibicao = document.getElementById("wordLine").innerHTML = palavraJogador.toString();
            document.getElementById("wordLine").innerHTML = palavraExibicao.replaceAll(",", " ");
        }

    }

    function verificarSeAcertouAPalavra() {
        if (palavraJogador.toString === palavraSorteada.toString) {
            return true
        }
        else {
            return false
        }
    }

    function verificarLetra(letraChutada) {
        let naoAchou = [];
        let letra = letraChutada;
        let verificarSeALetraJaFoiUsada = letrasChutadas.includes(letra);

        if (!verificarSeALetraJaFoiUsada == true) {
            letrasChutadas.push(letraChutada);

            for (let i = 0; i < palavraSorteada.length; i++) {
                if (letraChutada == palavraSorteada[i]) {
                    delete palavraJogador[i];
                    palavraJogador[i] = letraChutada.toUpperCase()
                    let teste = verificarSeAcertouAPalavra()
                    if (teste == true) {
                        document.getElementById("numberAttempts").innerHTML = `Você ganhou!`;
                        let palavraExibicao = document.getElementById("wordLine").innerHTML = palavraJogador.toString();
                        document.getElementById("wordLine").innerHTML = palavraExibicao.replaceAll(",", " ");
                    }
                    else {
                        atualizarPlacar();
                    }
                }
                else {
                    naoAchou.push("nao achou");
                    atualizarPlacar();
                }
            }

            if (naoAchou.length == palavraSorteada.length) {
                tentativas -= 1
            }

        }
        else {
            console.log('letra ja foi usada');

        }
    }

    function sortearPalavraDoBanco() {
        let tamanhoDoBanco = bancoDePalavras.length;
        let posicaoDaPalavraSorteada = Math.floor(Math.random() * (tamanhoDoBanco));
        let palavraSorteada = bancoDePalavras[posicaoDaPalavraSorteada];
        return palavraSorteada;
    }

}
//document.getElementById("numberAttempts").innerHTML = `Você perdeu`;

inciarJogo();