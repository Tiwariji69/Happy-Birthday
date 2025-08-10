// Floating Hearts
const heartsContainer = document.getElementById('hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);

// Typewriter effect
const text = "You are my everything, and I’m forever grateful for you.";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
typeWriter();

// Memory animations
document.querySelectorAll('.memory').forEach((mem, idx) => {
  mem.style.animationDelay = `${idx * 0.3}s`;
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.memory img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
