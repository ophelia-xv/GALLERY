// Simple hover tilt effect based on mouse movement inside the block
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('mousemove', e => {
    const rect = block.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 8;  // max 8 deg rotation
    const rotateY = (x / (rect.width / 2)) * 8;

    block.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  });

  block.addEventListener('mouseleave', () => {
    block.style.transform = '';
  });
});
