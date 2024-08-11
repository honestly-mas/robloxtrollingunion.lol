document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('mouseover', () => {
        bubble.style.backgroundColor = '#00ff99'; 
    });
    bubble.addEventListener('mouseout', () => {
        bubble.style.backgroundColor = 'rgba(0, 255, 153, 0.2)'; 
    });
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    paper.style.transform = 'scale(1.05)'; 
    setTimeout(() => {
        paper.style.transform = 'scale(1)'; 
    }, 200);
});
const body = document.querySelector('body');
let hue = 0;
function animateBackground() {
    hue = (hue + 1) % 360;
    body.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 20%), #000)`;
    requestAnimationFrame(animateBackground);
}
animateBackground();
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 100;
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.05; 
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}