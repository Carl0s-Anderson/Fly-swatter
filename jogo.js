
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
 nivel = nivel.replace('?','')
 nivel = decodeURIComponent(nivel) 
 if(nivel === 'Normal'){
 criaMosquitoTempo = 1500
 } else if(nivel === 'Dificil'){
 criaMosquitoTempo = 1000
 }else if(nivel === 'Muito Dificil'){
 criaMosquitoTempo = 890
 }

document.addEventListener('DOMContentLoaded', function() {
    const musicaFundo = document.getElementById('musicaFundo');
    if (musicaFundo) {
        musicaFundo.play().catch(error => {
            console.log("A reprodução automática foi bloqueada pelo navegador.");
        });
    }
});
function ajustamanhopalcojogo() {

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

//ajustamanhopalcojogo()

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {

        clearInterval(cronometro)
        clearInterval(criaMosquito)
         window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)
function posicaoAleatoria() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
            alert('jogo interrompido (gamer-over)')
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    console.log(posicaoX, posicaoY)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAletorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
       mosquito.onclick = function () {
        const somRaquetada = document.getElementById('somRaquetada');
        if (somRaquetada) {
            somRaquetada.currentTime = 0; // Reinicia o áudio
            somRaquetada.play();          // Toca o som da raquetada
        }
        this.remove(); // Remove o mosquito
    }


    document.body.appendChild(mosquito)


}
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 4)
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return ' mosquito3'
        case 3:
            return 'mosquito4'
    }
}
function ladoAletorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}




