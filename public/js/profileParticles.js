function createParticlesAtPosition(x, y) {
  // Create temporary container at click position
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  container.style.transform = 'translate(-50%, -50%)';
  document.getElementById('global-particles').appendChild(container);

  // Determine theme
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const color = theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  // Create particles for click
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: ${color};
      border-radius: 50%;
      opacity: 0;
      pointer-events none;
    `;

    container.appendChild(particle);

    // Random direction from click point
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 50;
    const duration = 800 + Math.random() * 400;

    particle.animate([
      { 
        transform: `translate(0, 0) scale(1)`,
        opacity: 1
      },
      { 
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
        opacity: 0
      }
    ], { duration, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }).onfinish = () => {
      particle.remove();
      if (container.childElementCount === 0) {
        container.remove();
      }
    };
  }
}

// Add click handler for whole page
document.addEventListener('click', (e) => {
  createParticlesAtPosition(e.clientX, e.clientY);
});

// Run on load and then trigger particles every 500ms
window.addEventListener('load', () => {
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      const container = document.getElementById('profile-particles');
      if (container) {
        // Remove existing particles
        container.innerHTML = '';
        
        // Random spawn position every time (-5px to +5px from center)
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        container.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
        
        // Create profile particles
        createParticlesAtPosition(container.offsetLeft, container.offsetTop);
      }
    }
  }, 500);
});
