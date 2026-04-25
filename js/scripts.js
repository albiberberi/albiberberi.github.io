document.addEventListener("DOMContentLoaded", function () {
  const typewriterEl = document.getElementById('typewriter');
  const phrases = [
    'Junior Software Engineer',
    'Web Developer',
    'UI/UX Enthusiast',
    
  ];
  let index = 0;
  let char = 0;
  let forward = true;

  function type() {
    const text = phrases[index];
    typewriterEl.textContent = text.slice(0, char);

    if (forward) {
      if (char < text.length) {
        char++;
        setTimeout(type, 80);
      } else {
        forward = false;
        setTimeout(type, 1100);
      }
    } else {
      if (char > 0) {
        char--;
        setTimeout(type, 40);
      } else {
        forward = true;
        index = (index + 1) % phrases.length;
        setTimeout(type, 200);
      }
    }
  }

  if (typewriterEl) type();

  const revealItems = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealItems.forEach(item => observer.observe(item));
});