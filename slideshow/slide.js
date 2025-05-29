let current = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const descs = document.querySelectorAll('.slide-description .desc');

  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  descs.forEach((d, i) => d.classList.toggle('active', i === index));

  current = index;
}

function nextSlide() {
  current = (current + 1) % document.querySelectorAll('.slide').length;
  showSlide(current);
}

setInterval(nextSlide, 4000);
showSlide(0);

window.currentSlide = showSlide; // ให้ dot กดได้
