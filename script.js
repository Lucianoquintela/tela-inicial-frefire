// ao clicar iniciar jogo musica toca

function tocarMusica() {
  var audio = new Audio("/src/audio/frefire-theme.m4a")

  document.onclick = function() {
  audio.play();
  }
  
  console.log("musica ativada")
}



