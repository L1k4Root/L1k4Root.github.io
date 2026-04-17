document.documentElement.classList.add('js-enabled');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

if (hasFinePointer && !prefersReducedMotion) {
  document.documentElement.classList.add('has-fine-pointer');

  const dot = document.getElementById('cur-dot');
  const ring = document.getElementById('cur-ring');
  const ringEl = document.getElementById('ring-el');
  let ringX = 0;
  let ringY = 0;
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  const loop = () => {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    window.requestAnimationFrame(loop);
  };

  window.requestAnimationFrame(loop);

  document.querySelectorAll('a, .proj-card, .metric-cell, .cl-item, .stack-col, .cert-card').forEach((element) => {
    element.addEventListener('mouseenter', () => ringEl.classList.add('expand'));
    element.addEventListener('mouseleave', () => ringEl.classList.remove('expand'));
  });
}

const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.rev').forEach((element) => revealObserver.observe(element));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});
