document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const welcomeOverlay = document.getElementById("welcome-overlay");
  const audio = document.getElementById("my-audio");

  startBtn.addEventListener("click", () => {
    // Tenta reproduzir o áudio
    audio.play().catch(err => {
      console.log("Erro ao tocar áudio:", err);
    });

    // Remove a classe container para iniciar as animações das flores
    document.body.classList.remove("container");

    // Adiciona fade-out no overlay
    welcomeOverlay.classList.add("fade-out");

    // Inicia a função de ocultar o título (definida em anim.js)
    if (typeof ocultarTitulo === "function") {
      ocultarTitulo();
    }
  });
});