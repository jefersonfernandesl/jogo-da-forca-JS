const bancoDePalavras = ["monitor", "mouse", "computador", "notebook", "teclado"];
let palavraSorteada = sortearPalavraDoBanco().split('');
let palavraJogador = [];
let letrasChutadas = [];
let tentativas = 7;
for (let i = 0; i < palavraSorteada.length; i++) {
    palavraJogador.push('_');
}

function inciarJogo() {
    // while(tentativas > 0) {

    //     console.log(tentativas);
    // }

    let letraChutada = 'l';
    verificarLetra(letraChutada);

}

function sortearPalavraDoBanco() {
    let tamanhoDoBanco = bancoDePalavras.length;
    let posicaoDaPalavraSorteada = Math.floor(Math.random() * (tamanhoDoBanco));
    let palavraSorteada = bancoDePalavras[posicaoDaPalavraSorteada];
    return palavraSorteada;
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
                palavraJogador[i] = letraChutada
            }
            else {
                naoAchou.push("nao achou");
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

inciarJogo();