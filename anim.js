var audio = document.getElementById("my-audio") || document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Tem dias que eu acordo pensando em você", time: 15 },
  { text: "E em tudo que a gente viveu", time: 18 },
  { text: "Não sei por que esse amor não deu", time: 27 },
  { text: "Mas tudo bem, o erro não foi seu", time: 32 },
  { text: "E hoje eu vivo aqui nessa solidão", time: 37 },
  { text: "Tentando acalmar o meu coração", time: 42 },
  { text: "Que chora por falta de você", time: 48 },
  { text: "Que chora por falta de você...", time: 54 },
  { text: "Mas se você me der uma chance", time: 60 },
  { text: "Eu prometo te fazer feliz", time: 67 },
  { text: "Eu mudo o meu jeito de ser", time: 72 },
  { text: "E faço tudo que você quiser!", time: 78 },
  { text: "Eu troco a minha vida por um beijo seu", time: 83 },
  { text: "Eu aceito os seus termos, o seu mundo e o meu", time: 91 },
  { text: "Só pra te ver sorrir, só pra te ver cantar", time: 97 },
  { text: "Eu faço o que você quiser", time: 104 },
  { text: "E se preciso for, eu grito pro mundo ouvir", time: 108 },
  { text: "Que o meu amor é seu, e sempre vai ser assim", time: 114 },
  { text: "Eu mudo o meu jeito, eu faço o que você quiser...", time: 121 },
  { text: "Eu troco a minha vida por um beijo seu", time: 140 },
  { text: "Eu aceito os seus termos, o seu mundo e o meu", time: 144 },
  { text: "Só pra te ver sorrir, só pra te ver cantar", time: 148 },
  { text: "Eu faço o que você quiser", time: 153 },
  { text: "E se preciso for, eu grito pro mundo ouvir", time: 158 },
  { text: "Que o meu amor é seu, e sempre vai ser assim", time: 164 },
  { text: "Eu mudo o meu jeito...", time: 169 },
  { text: "Eu faço o que você quiser", time: 176 },
  { text: "💝 Eu te amo muito! 💝", time: 183 },
  { text: "Feliz Dia dos Namorados! ❤️", time: 189 }
];

function updateLyrics() {
  if (!audio) return;
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Atualização mais frequente para suavidade
setInterval(updateLyrics, 500);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (!titulo) return;
  
  // Aguarda 20 segundos antes de começar a sumir o título inicial
  setTimeout(function () {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards"; 
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000); 
  }, 20000);
}