// Classe para gerenciar os botões de surpresa
class SurpriseButtons {
    constructor() {
        this.btnSim = document.getElementById('btnSim');
        this.btnNao = document.getElementById('btnNao');
        this.responseMessage = document.getElementById('responseMessage');
        
        this.simClicked = false;
        this.naoClicks = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.btnSim.addEventListener('click', () => this.handleSimClick());
        this.btnNao.addEventListener('click', () => this.handleNaoClick());
        
        // Efeito ao passar o mouse (desktop)
        this.btnSim.addEventListener('mouseenter', () => this.addParticles('sim'));
        this.btnNao.addEventListener('mouseenter', () => this.addParticles('nao'));
        
        // Suporte a touch (mobile)
        this.btnSim.addEventListener('touchstart', () => this.addParticles('sim'), false);
        this.btnNao.addEventListener('touchstart', () => this.addParticles('nao'), false);
    }

    handleSimClick() {
        if (this.simClicked) return;
        
        this.simClicked = true;
        this.btnSim.disabled = true;
        this.btnNao.disabled = true;
        
        // Efeito de confete
        this.createConfetti();
        
        // Animação de sucesso no botão
        this.btnSim.style.animation = 'none';
        setTimeout(() => {
            this.btnSim.style.animation = 'buttonBounce 0.6s ease-out';
        }, 10);
        
        // Mostrar mensagem final e redirecionar
        this.responseMessage.textContent = '💝 Você é incrível! Eu te amo!';
        this.responseMessage.style.animation = 'none';
        setTimeout(() => {
            this.responseMessage.style.animation = 'fadeIn 0.9s ease-out';
        }, 10);
        
        // Redirecionar após 1.5 segundos
        setTimeout(() => {
            this.redirectToIndex();
        }, 1500);
    }

    redirectToIndex() {
        // Adiciona uma animação de fade out antes de redirecionar
        document.body.style.animation = 'fadeOut 1s ease-out';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    handleNaoClick() {
        this.naoClicks++;
        
        // Fazer o botão "Não" fugir
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 200;
        
        this.btnNao.style.transform = `translate(${randomX}px, ${randomY}px) scale(1)`;
        
        if (this.naoClicks === 1) {
            this.responseMessage.textContent = '😔 Tem certeza? Pense melhor...';
        } else if (this.naoClicks === 2) {
            this.responseMessage.textContent = '🥺 Mas a surpresa é para você!';
        } else if (this.naoClicks === 3) {
            this.responseMessage.textContent = '😅 O botão "Não" está fugindo também!';
        } else if (this.naoClicks === 4) {
            this.responseMessage.textContent = '💫 Sério, clique em "Sim"!';
        } else if (this.naoClicks >= 5) {
            this.responseMessage.textContent = '❤️ Vou insistir: SIM é a resposta certa!';
            this.makeBtnSimBigger();
        }
        
        this.responseMessage.style.animation = 'none';
        setTimeout(() => {
            this.responseMessage.style.animation = 'fadeIn 0.6s ease-out';
        }, 10);
    }

    makeBtnSimBigger() {
        if (this.naoClicks === 5) {
            this.btnSim.style.fontSize = '32px';
            this.btnSim.style.padding = '30px 70px';
        } else if (this.naoClicks === 6) {
            this.btnSim.style.fontSize = '40px';
            this.btnSim.style.padding = '40px 90px';
        } else if (this.naoClicks > 6) {
            this.btnSim.style.fontSize = '50px';
            this.btnSim.style.padding = '50px 110px';
        }
    }

    createConfetti() {
        const colors = ['#ff6b9d', '#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.setProperty('--x', (Math.random() - 0.5) * 300 + 'px');
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
    }

    addParticles(type) {
        const container = document.querySelector('.content-wrapper');
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                font-size: 24px;
                pointer-events: none;
                z-index: 5;
            `;
            
            if (type === 'sim') {
                particle.textContent = '💝';
            } else {
                particle.textContent = '😊';
            }
            
            const btn = type === 'sim' ? this.btnSim : this.btnNao;
            const rect = btn.getBoundingClientRect();
            
            particle.style.left = (rect.left + rect.width / 2) + 'px';
            particle.style.top = (rect.top + rect.height / 2) + 'px';
            
            document.body.appendChild(particle);
            
            // Animar partícula
            const angle = (Math.random() * 360) * (Math.PI / 180);
            const velocity = 3 + Math.random() * 2;
            const distance = 100 + Math.random() * 100;
            
            let x = 0;
            let y = 0;
            let opacity = 1;
            
            const animate = () => {
                x += Math.cos(angle) * velocity;
                y += Math.sin(angle) * velocity;
                opacity -= 0.02;
                
                particle.style.transform = `translate(${x}px, ${y}px)`;
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            animate();
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new SurpriseButtons();
});
