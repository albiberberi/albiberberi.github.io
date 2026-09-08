document.addEventListener("DOMContentLoaded", function () {
  // Enhanced Typewriter Effect
  const typewriterEl = document.getElementById('typewriter');
  const phrases = [
    'Junior Software Engineer',
    'IT Support Specialist',
    'Full-Stack Web Developer',
    'UI/UX & Systems Enthusiast'
  ];
  let index = 0;
  let char = 0;
  let forward = true;

  function type() {
    if (!typewriterEl) return;
    const text = phrases[index];
    const sliced = text.slice(0, char);

    requestAnimationFrame(() => {
      typewriterEl.textContent = sliced || '\u00A0';
    });

    if (forward) {
      if (char < text.length) {
        char++;
        setTimeout(type, 70);
      } else {
        forward = false;
        setTimeout(type, 1300);
      }
    } else {
      if (char > 0) {
        char--;
        setTimeout(type, 35);
      } else {
        forward = true;
        index = (index + 1) % phrases.length;
        setTimeout(type, 250);
      }
    }
  }

  if (typewriterEl) type();

  // Scroll Reveal Animations
  const revealItems = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(item => observer.observe(item));

  // Copy to Clipboard Utility with Toast Notice
  const copyBtns = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('copy-toast');
  const toastText = document.getElementById('toast-text');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Item';
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          if (toast && toastText) {
            toastText.textContent = `${label} copied to clipboard!`;
            toast.classList.add('show');
            setTimeout(() => {
              toast.classList.remove('show');
            }, 3000);
          }
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      }
    });
  });
});