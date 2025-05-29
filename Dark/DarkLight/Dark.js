const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggle.textContent = '☀️';  
  } else {
    toggle.textContent = '🌙';  
  }
});